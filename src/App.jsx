import Header from './header/header';
import Footer from './footer/footer';
import styles from './App.module.css';
import { useState } from 'react';
import MultiInputForm from './input/form';


  

function App() {

  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(prev => !prev); // toggles between true and false
  };


  return (
    <div>
    <div className = {styles.container}>
    <div className= { styles.App}>
      <Header />
      <main className = { styles.title}>
        <p>Welcome to the main content!</p>
      </main>
      <Footer />
    


    </div>


    </div>

<div className={styles.buttonContainer}>
      
      <div className = {styles.clickbuttoncontainer}>
      <button onClick={handleClick}>
        {showMessage ? 'Hide' : 'Show'} Message
      </button>
      </div>

      <div className = {styles.message}>
      <div>
      {showMessage && <p>This is the message!</p>}
    </div>

    <MultiInputForm/>

    </div>
    </div>
    
    </div>
  );
}

export default App;

