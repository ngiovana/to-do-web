import { EmptyContainer, EmptyContainerText } from './styles'

export function Empty() {
  return (
    <EmptyContainer>
      <img src="/clipboard.png" alt="ícone de prancheta" />
      <EmptyContainerText>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </EmptyContainerText>
    </EmptyContainer>
  )
}