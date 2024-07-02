import { useState } from 'react'
import { Check } from '@phosphor-icons/react'
import { ActivityTitle, ActivityInfoContainer, TitleContainer } from './styles'
import { useActivity } from '../../context/activityContext'
import { useUser } from '../../context/userContext'

interface ActivityInfoHeaderProps {
  id: string
  title: string,
  status: boolean,
  description: string,
  deadline: Date,
}

export function ActivityInfoHeader({ id, title, description, status, deadline }: ActivityInfoHeaderProps) {
  const [isEditingData, setIsEditingData] = useState(false)
  const [showEditActivity, setShowEditActivity] = useState(false)
  const [activityDescription, setActivityDescription] = useState(description || '')
  // const [activityDeadline, setActivityDeadline] = useState(deadline || new Date())

  // const { updateActivity, activities, setActivities } = useActivity()
  const { userLogged } = useUser()

  // const userId = localStorage.getItem('userLogged') || userLogged?.id

  // const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
  //   event.target.setCustomValidity('')
  //   // setIsEditingDescription(false)
  //   setActivityDescription(event.target.value)
  // }

  // const handleChangeDeadline = (event: ChangeEvent<HTMLInputElement>) => {
  //   event.target.setCustomValidity('')
  //   // setIsEditingDeadline(false)
  //   setActivityDeadline(event.target.value)
  // }

  // const handleUpdateActivity = async (event: ChangeEvent<HTMLFormElement>) => {
  //   event.preventDefault()
    
  //   try {
  //     const updatedActivity = await updateActivity({ id, title, description: activityDescription, deadline }, userId)
  //     const updatedActivitiesList = activities.map((activity) => (activity.id === updatedActivity.id ? updatedActivity : activity))
  //     setActivities(updatedActivitiesList)
        // setActivityDescription('');
  //     setIsEditingData(false)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <ActivityInfoContainer>
      <TitleContainer onMouseOver={() => setShowEditActivity(true)} onMouseOut={() => setShowEditActivity(false)} showEditActivity={showEditActivity}>
        {/* { !isEditingData && <PencilSimple size={16} style={{ cursor: 'pointer' }} onClick={() => setIsEditingData(true)} weight='bold' />}
        { isEditingData && <X size={16} style={{ cursor: 'pointer' }} onClick={() => setIsEditingData(false)} weight='bold'/>} */}
        <ActivityTitle>{title}</ActivityTitle>
        { status && <Check color='#65960b' weight='bold' size={24} />}
      </TitleContainer>
      {isEditingData ? (
        <>
          {/* <form onSubmit={handleUpdateActivity}> */}
            {/* <ActivityInput value={activityDescription} type='text' placeholder='Nova descrição...' onChange={handleChangeDescription} /> */}
            {/* <ActivityInput value={format(activityDeadline, 'dd/MM/yyyy')} onChange={handleChangeDeadline} /> */}
            {/* <button type='submit'>Salvar</button> */}
          {/* </form> */}
        </>
      ) : (
        <>
          {/* <ActivityDescriptionView>{activityDescription}</ActivityDescriptionView> */}
          {/* <ActivityDataView>{'Prazo: ' + format(activityDeadline, 'dd/MM/yyyy')}</ActivityDataView> */}
        </>
      )}
      
      
    </ActivityInfoContainer>
  )
}
