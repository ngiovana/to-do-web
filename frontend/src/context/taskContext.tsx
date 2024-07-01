import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react'
import { api } from '../services/api';

interface TaskProps {
  id?: string,
  title: string,
  status?: boolean,
}

interface TaskProviderProps {
  children: ReactNode
}

interface TaskContextType {
  activityTasks: TaskProps[];
  setActivityTasks: Dispatch<SetStateAction<TaskProps[]>>;
  getActivityTasks: (activityId: string) => any;
  checkTask: (id: string, title: string, status: boolean, activityId: string) => any;
  createTask: (activity: TaskProps) => any;
  deleteTask: (id: string) => string;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)

export function TaskProvider({ children }: TaskProviderProps) {

  const createTask = async (task: TaskProps, activityId: string) => {
    if (!task || !task.title ) throw new Error('Informe o título da Tarefa')

    try {
      const response = await api.post('/task', {title: task.title, status: task.status, activityId})
      const newTask = response.data

      return newTask
    } catch (error: any) {
      console.error('Error creating task:', error)
      throw new Error(error.response.data.message || 'Erro ao criar Tarefa')
    }
  }

  const getActivityTasks = async (activityId: string) => {
    try {
      const response = await api.get(`/tasks?activityId=${activityId}`)
      const taskList = response.data

      return taskList
    } catch (error) {
      console.error('Error getting activity tasks:', error)
      throw new Error('Erro ao obter lista de Tarefas')
    }
  }

  const deleteTask = async (id: string, activityId: string) => {
    try {
      const response = await api.delete(`/task?id=${id}&activityId=${activityId}`)
      const deletedTask = response.data

      return deletedTask
    } catch (error) {
      console.error('Error deleting task:', error)
      throw new Error('Erro ao deletar Tarefa')
    }
  }

  const checkTask = async (id: string, title: string, status: boolean, activityId: string) => {
    try {
      const response = await api.put(`/task?id=${id}`, {id, title, status, activityId})
      const updatedTask = response.data

      return updatedTask
    } catch (error) {
      console.error('Error deleting task:', error)
      throw new Error('Erro ao deletar Tarefa')
    }
  }

  const value = {
    // activityTasks,
    // setActivityTasks,
    getActivityTasks,
    checkTask,
    createTask,
    deleteTask,
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTask(): TaskContextType {
  const context = useContext(TaskContext);
  if (!context) {
      throw new Error('useTask deve ser usado dentro de um TaskProvider');
  }
  return context
}
