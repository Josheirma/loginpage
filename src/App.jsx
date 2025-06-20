import Header from './header/header';
import Footer from './footer/footer';
import styles from './App.module.css';
import React, { useState, useEffect } from 'react';
import Signin from './input/form';
import Signup from './Signup/Signup'
import {auth} from './firebase'
import { onAuthStateChanged } from 'firebase/auth';


  

function App() {

  const [showMessage, setShowMessage] = useState(false);
   const [isSignIn, setIsSignIn] = useState(true);


   const [user, setUser] = useState(null);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // cleanup listener on unmount
  }, []);



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
      
      {user && (
      <div className = {styles.clickbuttoncontainer}>
      
      <button onClick={handleClick}>
        {showMessage ? 'Hide' : 'Show'} Message
      </button>
      

      <div className = {styles.message}>
      <div>
      {showMessage && <p>This is the message!</p>}
      </div>
      </div>
    </div>
      )}

    <button onClick={() => setIsSignIn(!isSignIn)}>
      {isSignIn ? 'Log In, press for Sign Up' : 'Sign Up, press for Log In'}
      </button>
    
     {isSignIn ? <Signin /> : <Signup />}
    {/*<Signin/>*/}
   

    
    </div>





    
     <Footer />
    </div>
  );
}

export default App;

