import styled from 'styled-components'

interface TitleContainerProps {
  showEditActivity: boolean;
}

export const ActivityInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: var(--gray-11);
  font-size: 0.9rem;

  max-width: 30rem;

  gap: 0.3rem;
`

export const TitleContainer = styled.div<TitleContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.showEditActivity ? 'var(--gray-8)' : 'var(--gray-1)'} ;
    padding-left: 0.3rem;
  }

  svg:hover {
    color: var(--gray-9);
  }
`

export const ActivityTitle = styled.h1`
  color: var(--red-12);
  font-weight: bold;
  font-size: 2.5rem;
  max-width: 30rem;
  font-family: Archivo Black, sans-serif;
`

export const ActivityDescriptionView = styled.label``

export const ActivityInput = styled.input`
  height: 2rem;
  max-width: 20rem;

  padding: 0 1rem;
  background: var(--gray-3);
  color: var(--gray-9);
  border-radius: 8px;
  border: 0;
`

export const ActivityDataView = styled.label``

export const AtivityDataInput = styled.label``