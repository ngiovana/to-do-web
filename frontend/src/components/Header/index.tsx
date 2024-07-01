import { useActivity } from '../../context/activityContext';
import { ActivityInfoHeader } from '../ActivityInfoHeader/index';
import { AddFirstActivity } from '../AddFirstActivity';
import { ProfileHeader } from '../ProfileHeader';
import { HeaderContainer } from './styles'

export function Header() {
  const { currentActivity, activities, setCurrentActivity } = useActivity()
  
  if (!currentActivity && activities) {
    setCurrentActivity(activities[0])
  }

  return (
    <HeaderContainer>
      {currentActivity ? 
        <ActivityInfoHeader title={currentActivity.title} description={currentActivity.description || ''} data={currentActivity.deadline} />
      :
        <AddFirstActivity />
      }
      
      <ProfileHeader />
    </HeaderContainer>
  );
}