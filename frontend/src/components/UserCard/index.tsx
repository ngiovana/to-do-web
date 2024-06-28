import { CaretUp } from "@phosphor-icons/react";
import { Avatar, UserCardContainer, UserCardHeader, UserCardContent } from "./styles";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface UserCardProps {
  isActive: boolean;
}

export function UserCard({ isActive }: UserCardProps) {
  const [currentUser, setCurrentUser] = useState({name: ''})

  const { logoutUser, userLogged } = useUser()

  useEffect(() => {
    async function fetchData() {
      const userId = localStorage.getItem('userLogged') || userLogged

      try {
        const response = await api.get(`/user?id=${userId}`)

        setCurrentUser(response.data)

      } catch (error) {
        console.log(error)
      }
    } 

    fetchData()
  }, [userLogged])

  const handleLogout = () => {
    logoutUser()
  }

  const navigate = useNavigate()
  
  return (
    <UserCardContainer isActive={isActive}>
      <UserCardHeader>
        <Avatar src='https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' />
        <span>
          {currentUser.name}
        </span>
        <CaretUp size={14} />
      </UserCardHeader>

      <UserCardContent>
        <p onClick={() => navigate('/usuario/editar')}>Editar</p>
        <p onClick={handleLogout}>Sair</p>
      </UserCardContent>
    </UserCardContainer>
  )
}
