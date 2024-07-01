import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react'
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

interface ActivityProps {
  id?: string,
  title: string,
  description?: string,
  deadline?: Date
}

interface ActivityProviderProps {
  children: ReactNode
}

interface ActivityContextType {
  activities: ActivityProps[];
  setActivities: Dispatch<SetStateAction<ActivityProps[]>>;
  currentActivity: ActivityProps;
  setCurrentActivity: Dispatch<SetStateAction<ActivityProps>>;
  createActivity: (activity: ActivityProps) => any;
  updateActivity: (activity: ActivityProps) => void;
  deleteActivity: (id: string) => string;
  getActivity: (id: string) => void;
  getActivities:(userId: string) => any;
  showActivtyInput: boolean;
  setShowActivivtyInput: Dispatch<SetStateAction<boolean>>;
  isMenuExpanded: boolean;
  setIsMenuExpanded: Dispatch<SetStateAction<boolean>>;
}

export const ActivityContext = createContext<ActivityContextType | undefined>(undefined)

export function ActivityProvider({ children }: ActivityProviderProps) {
  const [activities, setActivities] = useState<ActivityProps[]>([])
  const [currentActivity, setCurrentActivity] = useState('')
  const [showActivtyInput, setShowActivivtyInput] = useState(false)
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  const navigate = useNavigate()

  const createActivity = async (activity: ActivityProps) => {
    if (!activity || !activity.title ) throw new Error('Informe o título da Atividade')

    try {
      const response = await api.post('/activity', activity)
      const newActivity = response.data

      setActivities([...activities, newActivity])

      return newActivity
    } catch (error: any) {
      console.error('Error creating activity:', error)
      throw new Error(error.response.data.message || 'Erro ao criar atividade')
    }
  }

  const updateActivity = async (user: ActivityProps) => {
    try {
      const response = await api.put(`/user?id=${user.id}`, user)
      if (response.data) return response.data.id;
    } catch (error) {
      console.error(error)
      throw new Error('Erro ao atualizar usuário: ' + error)
    }
  }

  const deleteActivity = async (id: string, userId: string) => {
    try {
      const response = await api.delete(`/activity?id=${id}&userId=${userId}`)
      console.log(response)
  
      if (response.data) return response.data;
      throw new Error('Erro ao deletar atividade')
    } catch (error) {
      console.error(error)
      throw new Error('Erro ao deletar atividade: ' + error)
    }
  }

  const getActivity = () => {
    console.log('getActivity')
  }

  const getActivities = async (userId: string) => {
    console.log('getActivities')
    if (!userId ) throw new Error('Usuário não encontrado')

    try {
      const response = await api.get(`/activities?userId=${userId}`)
      const activitiesList = response.data
      setActivities(activitiesList)
      return activitiesList
    } catch (error) {
      console.error(error)
      throw new Error('Erro ao buscar atividades: ' + error)
    }
  }

  const value = {
    createActivity,
    updateActivity,
    deleteActivity,
    getActivity,
    activities,
    setActivities,
    currentActivity,
    setCurrentActivity,
    getActivities,
    showActivtyInput,
    setShowActivivtyInput,
    isMenuExpanded,
    setIsMenuExpanded
  }

  useEffect(() => {
    const userId = localStorage.getItem('userLogged')

    if (userId) {
      getActivities(userId)
    }
  }, [])

  return (
    <ActivityContext.Provider value={value}>
      {children}
    </ActivityContext.Provider>
  )
}

export function useActivity(): ActivityContextType {
  const context = useContext(ActivityContext);
  if (!context) {
      throw new Error('useActivity deve ser usado dentro de um ActivityProvider');
  }
  return context
}