import { useState } from 'react';
import styles from './form.module.css';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js"

   

function Signin() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });


  let user;
  const handleChange = async (e) => {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    })
  )};
  

  const handleSubmit = async (e) => {
    e.preventDefault();

     


    console.log('Submitted:', formData);
    const email = formData.email
    const password = formData.password
    
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return; // stop form submission if password too short
    }

    // Send formData to a server, save to Firestore, etc.
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // ✅ Firebase login successful
      user = userCredential.user;
    } catch (error){

      console.log("error: ", error)
      console.log("user: ", user)

    };
}




    return (
      
        <div className = {styles.inputformatting} >
        <form onSubmit={handleSubmit}>
      
     
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
  

  export default Signin;
