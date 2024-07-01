import { useActivity } from '../../context/activityContext'
import { FirstActivityContainer } from './styles'

export function AddFirstActivity() {
  const { setIsMenuExpanded, setShowActivivtyInput } = useActivity()

  const handleCreateFirstActivityClick = () => {
    setIsMenuExpanded(true)
    setShowActivivtyInput(true)
  }

  return (
    <FirstActivityContainer>
      <h1>Crie sua primeira atividade</h1>
      <button onClick={handleCreateFirstActivityClick}>Criar</button>
    </FirstActivityContainer>
  )
}