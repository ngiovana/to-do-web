import { ChangeEvent, FormEvent, useState } from 'react';
import { TaskItem } from '../TaskItem';
import { Empty } from '../Empty';

import { PlusCircle } from '@phosphor-icons/react';

import { CountHeader, CreatedHeader, DoneHeader, TaskForm, TaskListWrapper, TasksWrapper, TasksHeader } from './styles'

export interface TaskType {
  id: number;
  title: string;  
  done: boolean;
}

export function CreateTask() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const taskCounter = tasks.length;

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.done) {
      return prevValue + 1
    }

    return prevValue
  }, 0)
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (!newTaskText) {
      return
    }

    const newTask: TaskType = {
      id: new Date().getTime(),
      title: newTaskText,
      done: false,
    }
    
    setTasks((state) => [...state, newTask]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTaskText(event.target.value);
  }
  
  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
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