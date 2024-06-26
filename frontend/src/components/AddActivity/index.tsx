import { PlusCircle } from "@phosphor-icons/react";
import { AddItemContainer, InputContainer } from "./styles";
import { useState } from "react";

export function AddActivty() {
  const [showActivtyInput, setShowActivivtyInput] = useState(false)

  const handleAddActivityClick = () => {
    setShowActivivtyInput(true)
    console.log('Add activity clicked')
  }

  const handleCreateActivity = () => {
    setShowActivivtyInput(false)
    console.log('Create activity clicked')
    // adicionar item na lista
  }

  return (
    <>
      {showActivtyInput ? (
        <>
          <InputContainer>
            <form>
              <input placeholder='Título da atividade...'/>
              <button onClick={handleCreateActivity}>Ok</button>
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
