import styled from 'styled-components'

export const FirstActivityContainer = styled.div`
  display: flex; 
  flex-direction: column;

  h1 {
    color: var(--red-12);
    font-weight: bold;
    font-size: 2.5rem;
    max-width: 30rem;
    font-family: Archivo Black, sans-serif;
  }

  button {
    background: var(--red-9);
    color: var(--gray-1);
    height: 2rem;
    width: 10rem;
    justify-content: center;
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