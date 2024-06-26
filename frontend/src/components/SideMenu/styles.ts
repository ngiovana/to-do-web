import styled from 'styled-components'

interface MenuContainerProps {
  expanded: boolean;
}

export const MenuContainer = styled.div<MenuContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  align-items: center;

  height: 100vh;
  width: ${(props) => props.expanded ? '12vw' : '0'};
  min-width: 0.9rem;
  padding: 0.5rem 0.8rem 0.5rem 0.5rem;

  transition: all 0.2s ease-in-out;

  position: absolute;
  background-color: ${(props) => props.expanded ? 'var(--gray-2)' : 'var(--gray-1)'}; 
  
  overflow: auto;

  border-right: ${(props) => props.expanded ? '2px solid var(--gray-3)' : '0'};

  svg {
    color: var(--gray-9);
    cursor: pointer;

    &:hover {
      color: var(--red-8);
    }

    margin-left: 0.7rem;
  }
`

export const MenuHeader = styled.header`
  display: flex;
  flex-direction: row;

  font-weight: bold;
  font-size: 0.8rem;
  font-family: Archivo Black, sans-serif;

  margin: 1rem 0 1.5rem 0.8rem;

  width: 90%;

  svg {
    color: var(--gray-8);
    cursor: pointer;

    &:hover {
      color: var(--red-8);
    }

    margin-left: 0.7rem;
  }
`

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  // margin-right: 0.7rem;
`

export const ToItem = styled.h1`
  color: var(--red-12);
`

export const DoItem = styled.h1`
  color: var(--red-11);
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  align-items: center;
  justify-content: start;

  width: 95%;
  padding: 8px 5px;

  z-index: 1;

  border-radius: 0.5rem;

  cursor: pointer;

  p {
    color: var(--gray-9);

    font-size: 0.9rem;
    // font-weight: bold;
    letter-spacing: 0.05rem;

    z-index: 2;
  }

  svg {
    color: var(--gray-10);
    width: 0.5rem;
  }

  &:hover {
    background-color: var(--red-2-2);
    box-shadow: 0 0 2px var(--red-4);

    p {
      color: var(--red-9);
    }

    svg {
      color: var(--red-9);
    }
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 95%;

  border-top: 2px solid var(--gray-3);

  padding-top: 1rem;
`

export const ItemButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 0.2rem;

  margin-left: auto;

  svg {
    color: var(--gray-2);
  }

  svg:hover {
    color: var(--red-7);
  }
`