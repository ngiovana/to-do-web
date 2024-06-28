import { CreateAccountFormComponent } from "../../components/CreateAccountFormComponent";
import { EditUserContainer, EdisUserCard } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useUser } from "../../context/userContext";
import { CircularProgress } from "@mui/material";

export function UserEdit() {
  const [currentUser, setCurrentUser] = useState({email: '', name: '', password: ''})
  const [loading, setLoading] = useState(false)

  const { userLogged } = useUser()

  useEffect(() => {
    async function fetchData() {
      const userId = localStorage.getItem('userLogged') || userLogged

      try {
        setLoading(true)
        const response = await api.get(`/user?id=${userId}`)

        setCurrentUser(response.data)

      } catch (error) {
        console.log(error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    } 

    fetchData()
  }, [userLogged])

  if (loading) return <CircularProgress color='error' style={{display: 'flex', margin: '12rem auto'}}/>
  return (
    <EditUserContainer>
      <EdisUserCard>
        <CreateAccountFormComponent 
          emailProp={currentUser.email} 
          nameProp={currentUser.name} 
          passwordProp={currentUser.password}
          headerTitle={`Olá ${currentUser.name}!`}
          headerSubtitle='Atualize suas informações'
          isActive={true}
        />
      </EdisUserCard>
    </EditUserContainer>
  )
}
