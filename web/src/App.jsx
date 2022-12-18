import React from 'react';
import { PathRoutes } from './Routes/routes';
// import Login_Page from './pages/Login_Page';
import styles from './styles/global.scss';

function App() {
  return (
    <div className={styles.app}>
      <PathRoutes></PathRoutes>
    </div>
  )
}

export default App
