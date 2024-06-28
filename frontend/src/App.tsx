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
        <UserProvider>
          <ActivityProvider>
            <Router />
          </ActivityProvider>
        </UserProvider>
      </BrowserRouter> 
    </div>
  )
}

export default App
