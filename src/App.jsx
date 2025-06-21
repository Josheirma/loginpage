import Header from "./header/header";
import Footer from "./footer/footer";
import styles from "./App.module.css";
import React, { useState, useEffect } from "react";
import Signin from "./input/form";
import Signup from "./Signup/Signup";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const handleLogout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out.");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const [user, setUser] = useState(null);

  useEffect(() => {
    signOut(auth); // forces null on every load
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // cleanup listener on unmount
  }, []);

  const handleClick = () => {
    setShowMessage((prev) => !prev); // toggles between true and false
  };

  console.log("user: ", user);

  /////logout with timer

  let logoutTimer;

  function resetTimer() {
    if (user === null) {
      return;
    }
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(logOutUser, 20 * 60 * 1000); // 3 minutes
  }

  function logOutUser() {
    signOut(auth)
      .then(() => {
        console.log("User signed out due to inactivity.");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
    alert("You have been logged out due to inactivity.");
  }

  // Events to detect activity
  ["mousemove", "keydown", "mousedown", "touchstart"].forEach((event) => {
    window.addEventListener(event, resetTimer);
  });

  resetTimer();

  /////

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.App}></div>
      </div>

      <div className={styles.buttonContainer}>
        {user && (
          <div className={styles.clickbuttoncontainer}>
            <div className={styles.hidebutton}>
              <button onClick={handleClick}>
                {showMessage ? "Hide" : "Show"} Message
              </button>
            </div>

            <div className={styles.message1}>
              <div className={styles.message}>
                {showMessage && <p>This is the message!</p>}
              </div>
            </div>
          </div>
        )}

        <div className={styles.thedisconnectbutton}>
          <button onClick={() => handleLogout()}>Disconnect</button>
        </div>
        {!user && (
          <button onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn
              ? "Log In, press for Sign Up"
              : "Sign Up, press for Log In"}
          </button>
        )}

        {/*not signed in, show signed in*/}

        {!user && (isSignIn ? <Signin /> : <Signup />)}

        {/*<Signin/>*/}
      </div>

      <Footer />
    </div>
  );
}

export default App;
