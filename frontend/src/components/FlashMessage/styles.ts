import styled from 'styled-components'

interface FlashMessageProps {
    type: string
}

export const FlashMessageContainer = styled.div<FlashMessageProps>`
  height: 4rem;
  width: 30rem;
  position: fixed;
  z-index: 2000;
  bottom: 1.5rem;
  left: 0.5rem;

  background: ${props => props.type === 'danger' ? 'var(--danger)' : 'var(--green)'};

  border-radius: 8px;
  box-shadow: 0 0 5px var(--gray-6);

  text-align: center;
  
  p {
    font-size: 1.25rem;
    color: var(--gray-1);
    padding: 1rem;
  }
`