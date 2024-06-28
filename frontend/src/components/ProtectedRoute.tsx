import React, { useEffect } from "react";
import { useUser } from "../context/userContext";
import { Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  const { userLogged, logoutUser } = useUser()

  useEffect(() => {
    const currentUserLogged = window.localStorage.getItem('userLogged') || userLogged

    if (!currentUserLogged) {
      logoutUser()
      return
    }
    }, [userLogged])

  return children ? children : <Outlet />
} 