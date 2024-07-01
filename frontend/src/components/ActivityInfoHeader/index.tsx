import { useState } from 'react'
import { PencilSimple } from '@phosphor-icons/react'
import { ActivityDescriptionView, ActivityTitle, ActivityDataView, ActivityInfoContainer, ActivityDescriptionInput, TitleContainer } from './styles'

interface ActivityInfoHeaderProps {
  title: string,
  description: string,
  deadline: Date,
}

export function ActivityInfoHeader({ title, description, deadline }: ActivityInfoHeaderProps) {
  const [isEditingData, setIsEditingData] = useState(false)

  const handleChangeDescription = () => {
    console.log('change description')
    // setIsEditingDescription(false)
  }

  return (
    <ActivityInfoContainer>
      <TitleContainer>
        <ActivityTitle>{title}</ActivityTitle>
        <PencilSimple size={16} style={{ cursor: 'pointer' }}  onClick={() => setIsEditingData(true)} weight='bold' />
      </TitleContainer>
      {isEditingData ? (
        <ActivityDescriptionInput value={description} onChange={handleChangeDescription} />
      ) : (
        <>
          <ActivityDescriptionView>{description}</ActivityDescriptionView>
          <ActivityDataView>{'Prazo: ' + deadline}</ActivityDataView>
        </>
      )}
      
      
    </ActivityInfoContainer>
  )
}
