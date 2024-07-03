import { ChangeEvent, useState } from "react";
import { useUser } from "../../context/userContext";
import { InputContainer } from "../InputContainer";
import { CreateAccountSection, LoginForm, LoginFormContainer, LoginFormHeader } from "./styles";
import { useNavigate } from "react-router-dom";
import { FlashMessage } from "../FlashMessage";

interface CreateAccountFormComponentProps {
  onLoginClick?: () => void,
  nameProp?: string,
  emailProp?: string,
  passwordProp?: string,
  headerTitle: string,
  headerSubtitle: string,
  isActive: boolean;
}

export function CreateAccountFormComponent({ onLoginClick, headerTitle, headerSubtitle, nameProp, emailProp, passwordProp, isActive }: CreateAccountFormComponentProps) {
  const [name, setName] = useState(nameProp || '')
  const [email, setEmail] = useState(emailProp ||'')
  const [password, setPassword] = useState(passwordProp || '')
  const [showMessage, setShowMessage] = useState({show: false, message: '', type: ''})

  const navigate = useNavigate()

  const { createUser, updateUser, userLogged } = useUser()

  const currentUserId = localStorage.getItem('userLogged') || userLogged

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')

    setName(event.target.value)
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')

    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')

    setPassword(event.target.value)
  }

  const handleCreateAccount = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name || !email || !password) {
      setShowMessage({show: true, message: 'Preencha todos os campos', type: 'danger'})
      return
    }

    try {
      if (onLoginClick) {
        await createUser({name, email, password})
        onLoginClick()
        setShowMessage({show: true, message: 'Conta criada com sucesso', type: 'success'})
      } else {
        await updateUser({id: currentUserId, name, email, password})
        navigate('/')
        setShowMessage({show: true, message: 'Informações atualizadas com sucesso', type: 'success'})
      }
    } catch (error) {
      console.error(error)
      setShowMessage({show: true, message: error.message, type: 'danger'})
    }
  }

  const handleLinkClick = () => {
    if (onLoginClick) onLoginClick();
  }

  return (
    <>
      {showMessage.show && <FlashMessage message={showMessage} setMessage={setShowMessage} />}
      <LoginFormContainer isActive={isActive}>
        <LoginFormHeader>
          <h1>{headerTitle}</h1>
          <h2>{headerSubtitle}</h2>
        </LoginFormHeader>
        <LoginForm onSubmit={handleCreateAccount}>
          <InputContainer title='Nome' type='text' value={name} onChange={handleNameChange}/>
          <InputContainer title='E-mail' type='email' value={email} onChange={handleEmailChange}/>
          <InputContainer title='Senha' type='password' value={password} onChange={handlePasswordChange}/>

          <button type="submit">Confirmar</button>
        </LoginForm>
        
        {onLoginClick && 
          <CreateAccountSection>
            <p>Já tem uma conta?</p>
            <a href="#" onClick={handleLinkClick}>Faça o Login</a>
          </CreateAccountSection>
        }
        
      </LoginFormContainer>
    </>
  )
}