import styled from 'styled-components'

interface ProfileContainerProps {
  isDropdownVisible: boolean;
}

export const ProfileContainer = styled.div<ProfileContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  // background-color: var(--gray-10);
  // width: 5rem;
  position: relative;

  gap: 0.5rem;

  cursor: pointer;

  main {
    display: flex;
    flex-direction: row;
    align-items: center;

    visibility: ${props => props.isDropdownVisible ? 'hidden' : 'visible'};

    transition: all 0.3s;

    gap: 0.5rem;
  }

  span {
    color: var(--gray-12);
    font-weight: bold;
  }
`

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`