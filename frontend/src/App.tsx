import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router';

import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <div className={styles.background}>
      <BrowserRouter>
        <Router />
      </BrowserRouter> 
    </div>
  )
}

export default App
