import styled from 'styled-components'

export const TaskForm = styled.form`
  min-width: 46rem;
  
  input {
    margin: 0 1rem;
    height: 3rem;
    // width: 46rem;
    width: 52vw;
    max-width: 46rem;
    padding: 0 1rem;
    background: var(--gray-3);
    color: var(--gray-9);
    border-radius: 8px;
    border: 0;
  }

  button {
    background: var(--red-9);
    color: var(--gray-1);
    height: 3rem;
    padding: 0 1rem;
    border-radius: 8px;
    border: 0;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  button:hover {
    background: var(--red-10);
    transition: 0.2s all;
  }
`

export const TasksWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  font-size: 14px;
`

export const TasksHeader = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
`

export const CreatedHeader = styled.strong`
  color: var(--red-9);
  padding: 0 0.5rem;
`

export const CountHeader = styled.strong`
  color: var(--gray-11);

  margin-top: 1px;
  background: var(--gray-4);
  border-radius: 99px;
  padding: 0 0.8rem;
`

export const DoneHeader = styled.strong`
 color: var(--green);
 padding: 0 0.5rem;
`

export const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-top: 0.5rem;

  border-top: 2px solid var(--gray-3);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
