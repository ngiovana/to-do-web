import { PlusCircle } from "@phosphor-icons/react";
import { AddItemContainer, InputContainer } from "./styles";
import { ChangeEvent, useState } from "react";
import { useActivity } from "../../context/activityContext";
import { useUser } from "../../context/userContext";

export function AddActivty() {
  // const [showActivtyInput, setShowActivivtyInput] = useState(false)
  const [title, setTitle] = useState('')

  const { userLogged } = useUser()
  const { createActivity, setCurrentActivity, activities, setActivities, showActivtyInput, setShowActivivtyInput } = useActivity()

  const userId = localStorage.getItem('userLogged') || userLogged

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')

    setTitle(event.target.value)
  }

  const handleAddActivityClick = () => {
    setShowActivivtyInput(true)
    console.log('Add activity clicked')
  }

  const handleCreateActivity = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setShowActivivtyInput(false)
    try {
      if (title === '') {
        throw new Error('Informe um título')
      }

      const newActivity = await createActivity({ title, userId })
      setCurrentActivity(newActivity)
      localStorage.setItem('currentActivityId', newActivity.id)
      setActivities([...activities, newActivity])
      setTitle('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {showActivtyInput ? (
        <>
          <InputContainer>
            <form onSubmit={handleCreateActivity}>
              <input placeholder='Título da atividade...' value={title} onChange={handleTitleChange}/>
              <button type='submit'>Ok</button>
            </form>
          </InputContainer>
        </>
      ) : (
        <>
          <AddItemContainer onClick={handleAddActivityClick}>
            <PlusCircle size={18} weight='bold'/>
            <p>Nova Atividade</p>
          </AddItemContainer>
        </>
      )}
    </>
  )
}
