import { CaretDown } from "@phosphor-icons/react";
import { Avatar, ProfileContainer } from "./styles";
import { useEffect, useState } from "react";
import { UserCard } from "../UserCard";
import { api } from "../../services/api";
import { useUser } from "../../context/userContext";

export function ProfileHeader() {
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const [currentUser, setCurrentUser] = useState({name: ''})

  const { userLogged } = useUser()

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

  const handleProfileClick = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  return (
    <ProfileContainer isDropdownVisible={isDropdownVisible} onClick={handleProfileClick}>
        <UserCard isActive={isDropdownVisible}/>  

      {/* { !isDropdownVisible && */}
        <main>
          <Avatar src='https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' />
          <span>
            {currentUser.name}
          </span>
          <CaretDown size={14} />
        </main>
      {/* } */}
    </ProfileContainer>
  )
}