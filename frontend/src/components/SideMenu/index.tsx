import { CaretDoubleLeft, List, Circle, PencilSimple, Trash } from '@phosphor-icons/react'

import { DoItem, MenuContainer, MenuHeader, ToItem, ItemContainer, Items, TodoContainer, ItemButtonsContainer } from './styles'
import { useState } from 'react'
import { AddActivty } from '../AddActivity'

export function SideMenu() {
  const [isExpanded, setIsExpanded] = useState(false)

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
              <ItemContainer>
                <Circle size={6} weight="fill"/>
                <p>Item 1</p>

                <ItemButtonsContainer>
                  {/* <PencilSimple size={16} style={{cursor: 'pointer'}} weight='bold' /> */}
                  <Trash size={16} style={{cursor: 'pointer', width: '1rem'}} weight='bold'/>
                </ItemButtonsContainer>
              </ItemContainer>
              <ItemContainer>
                <Circle size={6} weight="fill" />
                <p>Item 2</p>

                <ItemButtonsContainer>
                  {/* <PencilSimple size={16} style={{cursor: 'pointer'}} weight='bold' /> */}
                  <Trash size={16} style={{cursor: 'pointer', width: '1rem'}} weight='bold'/>
                </ItemButtonsContainer>
              </ItemContainer>
              <ItemContainer>
                <Circle size={6} weight="fill" />
                <p>Apresentação do trabalho</p>

                <ItemButtonsContainer>
                  {/* <PencilSimple size={16} style={{cursor: 'pointer'}} weight='bold' /> */}
                  <Trash size={16} style={{cursor: 'pointer', width: '1rem'}} weight='bold'/>
                </ItemButtonsContainer>
              </ItemContainer>
            </Items>
          </> 
        )}      
    </MenuContainer>
  )
} 
