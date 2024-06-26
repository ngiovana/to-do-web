import { ActivityInfoHeader } from '../ActivityInfoHeader/index';
import { ProfileHeader } from '../ProfileHeader';
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <ActivityInfoHeader title='Item 1' description='Testando descrição' data='02/10/2024' />
      <ProfileHeader />
    </HeaderContainer>
  );
}