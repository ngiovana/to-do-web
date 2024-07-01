import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router';

import styles from './App.module.css';
import './global.css';
import { UserProvider } from './context/userContext';
import { ActivityProvider } from './context/activityContext';

function App() {

  return (
    <div className={styles.background}>
      <BrowserRouter>
        <ActivityProvider>
          <UserProvider>
            <Router />
          </UserProvider>
        </ActivityProvider>
      </BrowserRouter> 
    </div>
  )
}

export default App
