import styled from 'styled-components'

export const ActivityInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: var(--gray-11);
  font-size: 0.9rem;

  max-width: 20rem;

  gap: 0.3rem;
`

export const ActivityTitle = styled.h1`
  color: var(--red-12);
  font-weight: bold;
  font-size: 2.5rem;
  font-family: Archivo Black, sans-serif;
`

export const ActivityDescriptionView = styled.label`
  cursor: pointer;
`

export const ActivityDescriptionInput = styled.input`
  height: 2rem;
  max-width: 20rem;

  padding: 0 1rem;
  background: var(--gray-3);
  color: var(--gray-9);
  border-radius: 8px;
  border: 0;
`

export const ActivityDataView = styled.label`
  cursor: pointer;
`

export const AtivityDataInput = styled.label``