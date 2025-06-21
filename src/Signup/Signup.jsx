import { useState } from 'react';
import { doc, getDoc, setDoc } from "firebase/firestore";
import styles from './Signup.module.css';
import { auth, db } from "../firebase"; // path to your firebase.js
import { createUserWithEmailAndPassword} from "firebase/auth";



function Signup() {


    

    

     const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
    
      let user
      const handleChange = async (e) => {
        const { name, value } = e.target;
    
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        })
      )};
      

    const handleSignUp = async (e) => {

    // Calling e.preventDefault() stops the browser’s default reload/navigation.  This lets your React function run fully, allowing the async call to Firebase (createUserWithEmailAndPassword) to complete.  
    e.preventDefault();
    
    
        const {name, email, password} = formData;

      // 1. Check if name is already taken in firestore
        const nameRef = doc(db, "usernames", name);
        const nameSnap = await getDoc(nameRef);

        if (nameSnap.exists()) {
            alert("Username is already taken.");
            return;
        }

        
        

        /////


    try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    user = userCredential.user;
    

     await setDoc(nameRef, { uid: user.uid });


     console.log("User created:", user.email);

    } catch (error){

      if (error.code === 'auth/email-already-in-use') {
      console.error('That email is already registered.');
      alert("Email already used.")
      } else {
      console.error('Signup error:', error.message);
  }

    };
    };
    




    return (
        
        <div className = {styles.inputformatting} >
        <form onSubmit={handleSignUp}>
      <label>
        Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </label>
       
      <br />
    

        <div className = {styles.inputformatting} >
      <label>
        Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </label>
      </div>
      <br />

       <div className = {styles.inputformatting} >
      <label>
        Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
        />
      </label>
      </div>


      
      <br />
      <div className = {styles.buttonContainer}>
      <button type="submit">Submit</button>
      </div>
    </form>


        </div>
       

     );


    }

    export default Signup;
    
     

  

  
