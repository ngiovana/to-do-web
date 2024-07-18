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
  const [taskCounter, setTaskCounter] = useState(tasks.length);
  const [checkedTasksCounter, setCheckedTasksCounter] = useState(tasks.reduce((prevValue, currentTask) => {
    if (currentTask.status) {
      return prevValue + 1
    }

    return prevValue
  }, 0))

  const { createTask, getActivityTasks, deleteTask, checkTask } = useTask()
  const { currentActivity, updateActivity, setCurrentActivity } = useActivity()

  useEffect(() => {
    async function fetchData() {
      if (!currentActivity?.id) return
      try {
        const tasksList = await getActivityTasks(currentActivity.id)
        if (tasksList.length > 0) {
          setTasks(tasksList)
          setTaskCounter(tasksList.length)
          setCheckedTasksCounter(tasksList.reduce((prevValue: number, currentTask: TaskType) => {
            if (currentTask.status) {
              return prevValue + 1
            }
        
            return prevValue
          }, 0))
          return
        }
        setTasks([])
        setTaskCounter(0)
        setCheckedTasksCounter(0)
      } catch (error) {
        console.log(error)
      }
      
    }
    fetchData()
  }, [currentActivity, reloadTasks])

  useEffect(() => {
    checkActivityStatus()
  }, [checkedTasksCounter, taskCounter])
  
  async function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (!newTaskText) {
      return
    }
    
    try {
      const newTask = await createTask({title: newTaskText, status: false}, currentActivity.id || '')
      setTasks((state) => [...state, newTask])
      setReloadTasks(!reloadTasks)
      checkActivityStatus()
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
      await deleteTask(id, currentActivity.id || '')
      setTaskCounter(0)
      setCheckedTasksCounter(0)
      setReloadTasks(!reloadTasks)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleToggleTask({ id, title, status }: { id: number; title: string; status: boolean }) {
    try {
      await checkTask(id, title, status, currentActivity.id || '')

      setReloadTasks(!reloadTasks)
    } catch (error) {
      console.log(error)
    }
  }

  async function checkActivityStatus() {
    if (taskCounter === checkedTasksCounter && taskCounter > 0) {
      const updatedActivity = await updateActivity({
        id: currentActivity.id,
        title: currentActivity.title, 
        description: currentActivity.description, 
        status: true, 
        deadline: currentActivity.deadline, 
      }, localStorage.getItem('userLogged') || '')
      setCurrentActivity(updatedActivity || {title: ''})
    } else if (taskCounter !== checkedTasksCounter && taskCounter > checkedTasksCounter || taskCounter === 0) {
      const updatedActivity = await updateActivity({
        id: currentActivity.id,
        title: currentActivity.title, 
        description: currentActivity.description, 
        status: false, 
        deadline: currentActivity.deadline, 
      }, localStorage.getItem('userLogged') || '')
      setCurrentActivity(updatedActivity || {title: ''})
    }
  }

  return (
    <div>
      <TaskForm onSubmit={handleCreateNewTask} disabled={!currentActivity}>
        <input 
          value={newTaskText} 
          onChange={handleNewTaskChange}
          placeholder='Adicione uma nova tarefa'
          disabled={!currentActivity}
        />
        <button type='submit' >
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