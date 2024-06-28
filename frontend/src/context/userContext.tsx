import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

interface UserProps {
  id?: string,
  name: string,
  email: string,
  password: string
}

interface UserProviderProps {
  children: ReactNode
}

interface UserContextType {
  users: UserProps[];
  userLogged?: string;
  setUserLogged: Dispatch<SetStateAction<string>>;
  createUser: (user: UserProps) => void;
  updateUser: (user: UserProps) => void;
  loginUser: (email: string, password: string) => void;
  logoutUser: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<UserProps[]>([])
  const [userLogged, setUserLogged] = useState('')

  const navigate = useNavigate()

  const createUser = async (user: UserProps) => {
    if (!user || !user.name || !user.email || !user.password) throw new Error('Todos os campos devem ser preenchidos')

    try {
      const response = await api.post('/user', user)
      const newUser = response.data

      setUsers([...users, newUser])
    } catch (error: any) {
      console.error('Error creating user:', error)
      throw new Error(error.response.data.message || 'Erro ao criar usuário')
    }
  }

  const updateUser = (user: UserProps) => {
    const updatedUsers = users.map(u => {
      if (u.id === user.id) {
        return user;
      }
      return u;
    });
    setUsers(updatedUsers);
  }

  const loginUser = async (email: string, password: string) => {
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

  const logoutUser = () => {
    setUserLogged('')
    navigate('/login')
  }

  const value = {
    users,
    userLogged,
    setUserLogged,
    createUser,
    updateUser,
    loginUser,
    logoutUser,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
      throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context
}