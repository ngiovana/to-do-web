import styled from 'styled-components'

interface LoginFormContainerProps {
  isActive: boolean;
}

export const LoginFormContainer = styled.div<LoginFormContainerProps>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 50vw;

  gap: 1rem;

  visibility: ${props => props.isActive ? 'visible' : 'hidden'};

  a {
    text-decoration: none;
    font-size: 14px;
    color: var(--red-9);
    align-self: flex-end;
  }

  a:hover {
    color: var(--red-7);
    transition: 0.2s all;
  }
`

export const LoginFormHeader = styled.header`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 0.2rem;

  h2 {
    font-size: 1.5rem;
    color: var(--red-10);
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  button {
    background: var(--red-9);
    color: var(--gray-1);

    height: 3rem;
    width: 15rem;

    margin-top: 1.5rem;

    padding: 0 1rem;

    border-radius: 8px;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  button:hover {
    background: var(--red-10);
    transition: 0.2s all;
  }
`

export const CreateAccountSection = styled.section`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;

  align-items: center;
  justify-content: center;

  a {
    font-size: 1rem;
  }
`