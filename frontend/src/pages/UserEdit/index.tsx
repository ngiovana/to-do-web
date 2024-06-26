import { useNavigate } from "react-router-dom";
import { CreateAccountFormComponent } from "../../components/CreateAccountFormComponent";
import { EditUserContainer, EdisUserCard } from "./styles";

export function UserEdit({ user_id }) {
  const navigate = useNavigate()
  // buscar usuário
  return (
    <EditUserContainer>
      <EdisUserCard>
        <CreateAccountFormComponent 
          email='giovana_niehues@hotmail.com' 
          name='Giovana Niehues' 
          password='123456'
          headerTitle='Olá Giovana!'
          headerSubtitle='Atualize suas informações'
          onConfirm={() => navigate('/')}
          isActive={true}
        />
      </EdisUserCard>
    </EditUserContainer>
  )
}
