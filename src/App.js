import React,{ useState } from 'react';

//CSS
import styles from './App.module.css'

//Components
import NavBar from './Components/NavBarComponents/NavBar';
import Pages from './Components/PagesComponents/Pages';

const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  const openHandler = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.App}>
      <div className={`container ${styles.content}`}>
        <NavBar menuHandler={openHandler} statusMenu={isOpen} />
        <Pages menuHandler={openHandler} />
      </div>
    </div>
  );
};

export default App;