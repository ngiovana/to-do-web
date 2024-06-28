import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'
import { api } from '../services/api';

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
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<UserProps[]>([])
  const [userLogged, setUserLogged] = useState('')

  const createUser = (user: UserProps) => {
    setUsers([...users, user])
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
    const response = await api.post('/user/login', { 
      email, 
      password 
    })

    console.log(response.data)

    if (response.data) return response.data.user.id;

    throw new Error('Email ou senha inválidos')
  }

  const value = {
    users,
    userLogged,
    setUserLogged,
    createUser,
    updateUser,
    loginUser,
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