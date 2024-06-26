import { InputContainer } from "../InputContainer";
import { CreateAccountSection, LoginForm, LoginFormContainer, LoginFormHeader } from "./styles";

interface CreateAccountFormComponentProps {
  onLoginClick?: () => void,
  onConfirm: () => void,
  name?: string,
  email?: string,
  password?: string,
  headerTitle: string,
  headerSubtitle: string,
  isActive: boolean;
}

export function CreateAccountFormComponent({ onLoginClick, onConfirm, headerTitle, headerSubtitle, name, email, password, isActive }: CreateAccountFormComponentProps) {
  const handleLinkClick = () => {
    if (onLoginClick) onLoginClick();
  }

  return (
    <LoginFormContainer isActive={isActive}>
      <LoginFormHeader>
        <h1>{headerTitle}</h1>
        <h2>{headerSubtitle}</h2>
      </LoginFormHeader>
      <LoginForm>
        <InputContainer title='Nome' type='text' value={name} />
        <InputContainer title='E-mail' type='email' value={email} />
        <InputContainer title='Senha' type='password' value={password}/>

        <button type="submit" onClick={onConfirm}>Confirmar</button>
      </LoginForm>
      
      {onLoginClick && 
        <CreateAccountSection>
          <p>Já tem uma conta?</p>
          <a href="#" onClick={handleLinkClick}>Faça o Login</a>
        </CreateAccountSection>
      }
      
    </LoginFormContainer>
  )
}