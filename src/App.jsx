import Header from './header/header';
import Footer from './footer/footer';
import styles from './App.module.css';
import { useState } from 'react';
import Signin from './input/form';
import Signup from './Signup/Signup'

  

function App() {

  const [showMessage, setShowMessage] = useState(false);
   const [isSignIn, setIsSignIn] = useState(true);

  const handleClick = () => {
    setShowMessage(prev => !prev); // toggles between true and false
  };


  return (
    <div>
      <Header />
    <div className = {styles.container}>
    <div className= { styles.App}>
      
      

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

    <button onClick={() => setIsSignIn(!isSignIn)}>
      {isSignIn ? 'Log In, press for Sign Up' : 'Sign Up, press for Log In'}
      </button>
    
     {isSignIn ? <Signin /> : <Signup />}
    {/*<Signin/>*/}
   

    </div>
    </div>





    
     <Footer />
    </div>
  );
}

export default App;

