import styled from 'styled-components'

interface UserCardContainerProps {
  isActive: boolean;
}

export const UserCardContainer = styled.div<UserCardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15rem;
  position: absolute;
  left: -3rem;
  
  background-color: var(--gray-1);

  border-radius: 8px;

  box-shadow: 0 0 4px var(--gray-6);

  gap: 0.3rem;

  padding: 1.2rem 2rem;

  transition: all 0.3s;

  visibility: ${props => props.isActive ? 'visible' : 'hidden'};

  cursor: pointer;

  span {
    color: var(--gray-12);
    font-weight: bold;
  }
`

export const UserCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export const UserCardContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;

  font-size: 14px;

  svg:hover {
    color: var(--red-9)
  }

  p:hover {
    color: var(--red-9)
  }
`

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`