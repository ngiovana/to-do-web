import { CaretDoubleLeft, List, Circle, PencilSimple, Trash } from '@phosphor-icons/react'

import { DoItem, MenuContainer, MenuHeader, ToItem, ItemContainer, Items, TodoContainer, ItemButtonsContainer } from './styles'
import { useState, useEffect } from 'react'
import { AddActivty } from '../AddActivity'
import { useActivity } from '../../context/activityContext'
import { useUser } from '../../context/userContext'

export function SideMenu() {
  const [isExpanded, setIsExpanded] = useState(false)

  const { userLogged } = useUser()
  const { activities, setCurrentActivityId, currentActivityId, getActivities, setActivities } = useActivity()

  const userId = localStorage.getItem('userLogged') || userLogged

  console.log('activities: ', activities)

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(userId)
        const activitiesList = await getActivities(userId || '')
        console.log(activitiesList)
        if (activitiesList) setActivities(activitiesList)
      } catch (error) {
        console.log(error)
      }
    }
  }, [userId])

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
              {activities.map((activity) => {
                <ItemContainer isActive={currentActivityId === activity.id} onClick={() => setCurrentActivityId(activity.id)}>
                  <Circle size={6} weight="fill"/>
                  <p>{activity.title}</p>

                  <ItemButtonsContainer>
                    {/* <PencilSimple size={16} style={{cursor: 'pointer'}} weight='bold' /> */}
                    <Trash size={16} style={{cursor: 'pointer', width: '1rem'}} weight='bold'/>
                  </ItemButtonsContainer>
                </ItemContainer>
              })}
            </Items>
          </> 
        )}      
    </MenuContainer>
  )
} 
