import { CaretDoubleLeft, List, Circle, PencilSimple, Trash } from '@phosphor-icons/react'

import { DoItem, MenuContainer, MenuHeader, ToItem, ItemContainer, Items, TodoContainer, ItemButtonsContainer } from './styles'
import { useState, useEffect } from 'react'
import { AddActivty } from '../AddActivity'
import { useActivity } from '../../context/activityContext'
import { useUser } from '../../context/userContext'

export function SideMenu() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [updateActivityList, setUpdateActivityList] = useState(false)

  const { userLogged } = useUser()
  const { activities, setCurrentActivityId, currentActivityId, getActivities, setActivities, deleteActivity } = useActivity()

  const userId = localStorage.getItem('userLogged') || userLogged

  useEffect(() => {
    async function fetchData() {
      try {
        const activitiesList = await getActivities(userId || '')
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [userId, updateActivityList])

  const handleDeleteActivity = async (id: string) => {
    try {
      await deleteActivity(id, userId)
      const newList = activities.filter(activity => activity.id !== id)
      setActivities(newList)
      setUpdateActivityList(!updateActivityList)
      alert('Atividade deletada com sucesso!')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <MenuContainer expanded={isExpanded}>
      { !isExpanded && <List size={22} onClick={() => setIsExpanded(true)}/> }

      
        {isExpanded && (
          <>
            <MenuHeader>
              <TodoContainer>
                <ToItem>to</ToItem>
                <DoItem>Do</DoItem>
              </TodoContainer>
              <CaretDoubleLeft size={15} weight='bold' onClick={() => setIsExpanded(false)}/>
            </MenuHeader>

            <AddActivty />

            <Items>
            {activities.map((activity) => ( 
              <ItemContainer
                key={activity.id}
                isActive={currentActivityId === activity.id}
                onClick={() => setCurrentActivityId(activity.id)}
              >
                <Circle size={6} weight='fill' />
                <p>{activity.title}</p>

                <ItemButtonsContainer>
                  {/* melhor editar com dois cliques  */}
                  {/* <PencilSimple size={16} style={{ cursor: 'pointer' }} weight='bold' /> */} 
                  <Trash size={16} style={{ cursor: 'pointer', width: '1rem' }} weight='bold' onClick={() => handleDeleteActivity(activity.id)} />
                </ItemButtonsContainer>
              </ItemContainer>
            ))}
            </Items>
          </> 
        )}      
    </MenuContainer>
  )
} 
