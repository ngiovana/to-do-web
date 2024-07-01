import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { TaskItem } from '../TaskItem';
import { Empty } from '../Empty';

import { PlusCircle } from '@phosphor-icons/react';

import { CountHeader, CreatedHeader, DoneHeader, TaskForm, TaskListWrapper, TasksWrapper, TasksHeader } from './styles'
import { useTask } from '../../context/taskContext';
import { useActivity } from '../../context/activityContext';

export interface TaskType {
  id: number;
  title: string;  
  status: boolean;
}

export function CreateTask() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [reloadTasks, setReloadTasks] = useState(false)
  const taskCounter = tasks.length;

  const { createTask, getActivityTasks, deleteTask, checkTask } = useTask()
  const { currentActivity, updateActivity, setCurrentActivity } = useActivity()

  useEffect(() => {
    async function fetchData() {
      if (!currentActivity) return
      setTasks([])
      const tasksList = await getActivityTasks(currentActivity.id)
      if (tasksList) setTasks(tasksList)
    }
    fetchData()
  }, [currentActivity, reloadTasks])

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.status) {
      return prevValue + 1
    }

    return prevValue
  }, 0)
  
  async function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (!newTaskText) {
      return
    }
    
    try {
      const newTask = await createTask({title: newTaskText, status: false}, currentActivity.id)
      setTasks((state) => [...state, newTask]);
    } catch (error) {
      console.log(error)
    }
    
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTaskText(event.target.value);
  }
  
  async function handleRemoveTask(id: number) {
    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }
    try {
      await deleteTask(id, currentActivity.id)
      setReloadTasks(!reloadTasks)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleToggleTask({ id, title, status }: { id: string; title: string; status: boolean }) {
    try {
      await checkTask(id, title, status, currentActivity.id)

      if (taskCounter === checkedTasksCounter) {
        const updatedActivity = await updateActivity({
          id: currentActivity.id,
          title: currentActivity.title, 
          description: currentActivity.description, 
          status: false, 
          deadline: currentActivity.deadline, 
        }, localStorage.getItem('userLogged'))
        setCurrentActivity(updatedActivity)
      } else if (taskCounter !== checkedTasksCounter && currentActivity.status === false) {
        const updatedActivity = await updateActivity({
          id: currentActivity.id,
          title: currentActivity.title, 
          description: currentActivity.description, 
          status: true, 
          deadline: currentActivity.deadline, 
        }, localStorage.getItem('userLogged'))
        setCurrentActivity(updatedActivity)
      }
      setReloadTasks(!reloadTasks)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <TaskForm onSubmit={handleCreateNewTask}>
        <input 
          value={newTaskText} 
          onChange={handleNewTaskChange}
          placeholder='Adicione uma nova tarefa'
        />
        <button type='submit'>
          Criar
          <PlusCircle size={16} color="#f2f2f2" weight="bold" />
        </button>
      </TaskForm>

      <TasksWrapper>
        <TasksHeader>
          <CreatedHeader>Tarefas Criadas</CreatedHeader>
          <CountHeader>{taskCounter}</CountHeader>
        </TasksHeader>

        <TasksHeader>
          <DoneHeader>Concluídas</DoneHeader>
          <CountHeader>{taskCounter === 0
            ? taskCounter
            : `${checkedTasksCounter} de ${taskCounter}`}</CountHeader>
        </TasksHeader>
      </TasksWrapper>

      <div>
        {taskCounter > 0 ? (
            <TaskListWrapper>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </TaskListWrapper>
          ) : (
            <Empty />
          )}
      </div>
    </div>
  )
}