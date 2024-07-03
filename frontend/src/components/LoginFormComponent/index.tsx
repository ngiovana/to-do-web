import { ChangeEvent, useState } from "react";
import { useUser } from "../../context/userContext";
import { InputContainer } from "../InputContainer";
import { CreateAccountSection, DoItem, LoginForm, LoginFormContainer, ToItem, TodoContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { FlashMessage } from "../FlashMessage";

interface LoginFormComponentProps {
  onCreateClick: () => void;
  isActive: boolean;
}

export function LoginFormComponent({ onCreateClick, isActive }: LoginFormComponentProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showMessage, setShowMessage] = useState({show: false, message: '', type: ''})

  const navigate = useNavigate()

  const { loginUser, setUserLogged } = useUser()

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')

    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')

    setPassword(event.target.value)
  }

  const handleLogin = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    try {
      const userId = await loginUser(email, password)

      setUserLogged(userId)
      localStorage.setItem('userLogged', userId)
      navigate('/')
    } catch (error) {
      console.error(error)
      setShowMessage({show: true, message: 'Email ou senha inválidos', type: 'danger'})
    }
  }

  const handleLinkClick = () => {
    onCreateClick()
  }

  return (
    <>
      {showMessage.show && <FlashMessage message={showMessage} setMessage={setShowMessage} />}
      <LoginFormContainer onSubmit={handleLogin} isActive={isActive}>
        <TodoContainer>
          <ToItem>to</ToItem>
          <DoItem>Do</DoItem>
        </TodoContainer>
        <LoginForm>
          <InputContainer title='E-mail' type='email' value={email} onChange={handleEmailChange}/>
          <InputContainer title='Senha' type='password' value={password} onChange={handlePasswordChange}/>
          <a href="#">Esqueci minha senha</a>

          <button type="submit">Entrar</button>
        </LoginForm>

        <CreateAccountSection>
          <p>Não tem uma conta?</p>
          <a href="#" onClick={handleLinkClick}>Crie uma</a>
        </CreateAccountSection>
      </LoginFormContainer>
    </>
  )
}