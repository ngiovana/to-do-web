import { useState } from 'react'
import { LoginFormComponent } from '../../components/LoginFormComponent'
import { ImageContainer, ImageLabelContainer, LoginPageContainer } from './styles'
import { CreateAccountFormComponent } from '../../components/CreateAccountFormComponent'

export function LoginPage() {
  const [isCreateAccount, setIsCreateAccount] = useState(false)

  return(
    <LoginPageContainer>
      <ImageContainer isCreateActive={isCreateAccount}>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/young-business-woman-working-on-todo-list-2644452-2206521.png" alt="" />
        <ImageLabelContainer>
          <h1>Organize sua vida com facilidade</h1>
          <p>Transforme suas tarefas em conquistas com a ToDo</p>
        </ImageLabelContainer>
      </ImageContainer>

      <CreateAccountFormComponent onLoginClick={() => setIsCreateAccount(false)} headerTitle='Bem-vindo ao ToDo' headerSubtitle='Crie sua conta!' isActive={isCreateAccount} />
      <LoginFormComponent onCreateClick={() => setIsCreateAccount(true)} isActive={!isCreateAccount}/>
    </LoginPageContainer>
  )
}