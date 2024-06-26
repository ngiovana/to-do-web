import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  margin: 0.6rem;
  gap: 0.2rem;

  label {
    color: var(--gray-11);
    font-size: 15px;
  }

  input {
    height: 3rem;
    width: 20rem;
    max-width: 46rem;

    padding: 0 1rem;

    background: var(--gray-1);
    color: var(--gray-9);

    box-shadow: 0 0 3px var(--gray-8);
    border-radius: 8px;
    border: 0;
  }

  input:focus {
    box-shadow: 0 0 0 1.3px var(--red-9);
  }
`