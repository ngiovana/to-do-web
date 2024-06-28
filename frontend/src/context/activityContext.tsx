import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

interface ActivityProps {
  id?: string,
  title: string,
  description?: string,
  deadeline?: Date
}

interface ActivityProviderProps {
  children: ReactNode
}

interface ActivityContextType {
  activities: ActivityProps[];
  setActivities: Dispatch<SetStateAction<ActivityProps[]>>;
  currentActivityId: string;
  setCurrentActivityId: Dispatch<SetStateAction<string>>;
  createActivity: (activity: ActivityProps) => any;
  updateActivity: (activity: ActivityProps) => void;
  deleteActivity: (id: string) => string;
  getActivity: (id: string) => void;
  getActivities:(userId: string) => any;
}

export const ActivityContext = createContext<ActivityContextType | undefined>(undefined)

export function ActivityProvider({ children }: ActivityProviderProps) {
  const [activities, setActivities] = useState<ActivityProps[]>([])
  const [currentActivityId, setCurrentActivityId] = useState('')

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

  const deleteActivity = async (email: string, password: string) => {
    // adicionar validação nas rotas com o userLogged
    try {
      const response = await api.post('/user/login', { 
        email, 
        password 
      })
  
      if (response.data) return response.data.id;
      throw new Error('Email ou senha inválidos')
    } catch (error) {
      console.error(error)
      throw new Error('Erro ao logar usuário: ' + error)
    }
  }

  const getActivity = () => {
    localStorage.removeItem('userLogged')
    navigate('/login')
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
    currentActivityId,
    setCurrentActivityId,
    getActivities
  }

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