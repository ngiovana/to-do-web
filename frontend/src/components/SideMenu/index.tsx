import { CaretDoubleLeft, List, Circle, PencilSimple, Trash, Check } from '@phosphor-icons/react'

import { DoItem, MenuContainer, MenuHeader, ToItem, ItemContainer, Items, TodoContainer, ItemButtonsContainer } from './styles'
import { useState, useEffect } from 'react'
import { AddActivty } from '../AddActivity'
import { useActivity } from '../../context/activityContext'
import { useUser } from '../../context/userContext'
import { FlashMessage } from '../FlashMessage'

export function SideMenu() {
  // const [isExpanded, setIsExpanded] = useState(false)
  const [updateActivityList, setUpdateActivityList] = useState(false)
  const [showMessage, setShowMessage] = useState({show: false, message: '', type: ''})


  const { userLogged } = useUser()
  const { activities, setCurrentActivity, currentActivity, getActivities, setActivities, deleteActivity, isMenuExpanded, setIsMenuExpanded } = useActivity()

  const userId = localStorage.getItem('userLogged') || userLogged

  useEffect(() => {
    async function fetchData() {
      try {
        await getActivities(userId || '')
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [userId, updateActivityList, currentActivity])

  const handleDeleteActivity = async (id: string) => {
    try {
      await deleteActivity(id, userId)
      const newList = activities.filter(activity => activity.id !== id)
      setActivities(newList)
      setUpdateActivityList(!updateActivityList)
      setShowMessage({show: true, message: 'Atividade deletada com sucesso!', type: 'success'})
    } catch (error) {
      setShowMessage({show: true, message: error.message, type: 'danger'})
    }
  }

  return (
    <>
      {showMessage.show && <FlashMessage message={showMessage} setMessage={setShowMessage} />}
      <MenuContainer expanded={isMenuExpanded}>
        { !isMenuExpanded && <List size={22} onClick={() => setIsMenuExpanded(true)}/> }

        
          {isMenuExpanded && (
            <>
              <MenuHeader>
                <TodoContainer>
                  <ToItem>to</ToItem>
                  <DoItem>Do</DoItem>
                </TodoContainer>
                <CaretDoubleLeft size={15} weight='bold' onClick={() => setIsMenuExpanded(false)}/>
              </MenuHeader>

              <AddActivty />

              <Items>
              {activities.map((activity) => ( 
                <ItemContainer
                  key={activity.id}
                  isActive={currentActivity.id === activity.id}
                  onClick={() => setCurrentActivity(activity)}
                >
                  { !activity.status && <Circle size={6} weight='fill' /> }
                  { activity.status && <Check weight='bold' size={30} />}
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
    </>
  )
} 
