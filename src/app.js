import React from 'react'
import Header from './components/header/header'
import Aside from './components/aside/aside'
import styles from './app.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <Header/>
      <Aside/>

    </div>
  )
}

export default App;
