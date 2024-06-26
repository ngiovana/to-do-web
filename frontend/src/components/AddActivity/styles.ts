import styled from 'styled-components'

export const AddItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;

  align-items: center;
  justify-content: start;

  width: 95%;
  padding: 8px 5px;

  z-index: 1;

  border-radius: 0.5rem;

  cursor: pointer;

  p {
    color: var(--gray-9);

    font-size: 1rem;
    // font-weight: bold;
    // letter-spacing: 0.05rem;

    z-index: 2;
  }

  svg {
    color: var(--gray-10);
  }

  &:hover {
    // background-color: var(--red-2-2);
    // box-shadow: 0 0 2px var(--red-4);

    p {
      color: var(--red-9);
    }

    svg {
      color: var(--red-9);
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;

  gap: 0.2rem;

  max-width: 110%;

  border-radius: 0.5rem;

  background-color: var(--gray-1);

  form {
    display: flex;
    flex-direction: row;
  }

  input {
    width: 80%;
    padding: 8px 5px;

    border: none;
    border-bottom: 1px solid var(--red-9);
    border-top-left-radius: 8px;

    background-color: var(--gray-1);

    font-size: 0.8rem;
    color: var(--gray-9);

    outline: none;
  }

  button {
    padding: 8px 5px;

    width: 2rem;

    border: none;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;

    background-color: var(--red-9);

    font-size: 0.8rem;
    color: var(--gray-1);

    cursor: pointer;
  }

  button:hover {
    background: var(--red-10);
    transition: 0.2s all;
  }
`