import { useState } from 'react'
import { ActivityDescriptionView, ActivityTitle, ActivityDataView, ActivityInfoContainer, ActivityDescriptionInput } from './styles'

interface ActivityInfoHeaderProps {
  title: string,
  description: string,
  data: string,
}

export function ActivityInfoHeader({ title, description, data }: ActivityInfoHeaderProps) {
  const [isEditingDescription, setIsEditingDescription] = useState(false)
  const [isEditingData, setIsEditingData] = useState(false)

  const handleChangeDescription = () => {
    console.log('change description')
    setIsEditingDescription(false)
  }

  return (
    <ActivityInfoContainer>
      <ActivityTitle>{title}</ActivityTitle>
      {isEditingDescription ? (
        <ActivityDescriptionInput value={description} onChange={handleChangeDescription} />
      ) : (
        <ActivityDescriptionView onClick={() => setIsEditingDescription(true)}>{description}</ActivityDescriptionView>
      )}
      
      <ActivityDataView onClick={() => setIsEditingData(true)}>{'Prazo: ' + data}</ActivityDataView>
    </ActivityInfoContainer>
  )
}
