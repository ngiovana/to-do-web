import { InputContainer } from "../InputContainer";
import { CreateAccountSection, DoItem, LoginForm, LoginFormContainer, ToItem, TodoContainer } from "./styles";

interface LoginFormComponentProps {
  onCreateClick: () => void;
  isActive: boolean;
}

export function LoginFormComponent({ onCreateClick, isActive }: LoginFormComponentProps) {
  const handleLinkClick = () => {
    onCreateClick();
  }

  return (
    <LoginFormContainer isActive={isActive}>
      <TodoContainer>
        <ToItem>to</ToItem>
        <DoItem>Do</DoItem>
      </TodoContainer>
      <LoginForm>
        <InputContainer title='E-mail' type='email' />
        <InputContainer title='Senha' type='password' />
        <a href="#">Esqueci minha senha</a>

        <button type="submit">Entrar</button>
      </LoginForm>

      <CreateAccountSection>
        <p>Não tem uma conta?</p>
        <a href="#" onClick={handleLinkClick}>Crie uma</a>
      </CreateAccountSection>
    </LoginFormContainer>
  )
}