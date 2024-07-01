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
        <ActivityInfoHeader id={currentActivity.id} title={currentActivity.title} status={currentActivity.status || false} description={currentActivity.description || ''} deadline={currentActivity.deadline} />
      :
        <AddFirstActivity />
      }
      
      <ProfileHeader />
    </HeaderContainer>
  );
}