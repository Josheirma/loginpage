import { useState } from 'react';
import styles from './form.module.css';

   

function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Send formData to a server, save to Firestore, etc.
  };




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


      
      <br />
      <div className = {styles.buttonContainer}>
      <button type="submit">Submit</button>
      </div>
    </form>

        </div>
       

     );
}

export default MultiInputForm;