import { useState } from 'react';
import styles from './form.module.css';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

   

function MultiInputForm() {
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
      <label>
        Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
  

  export default MultiInputForm;
