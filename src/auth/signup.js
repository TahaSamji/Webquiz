import React, { useState,useEffect } from 'react';
import axios from 'axios';

const SignupForm = () => {
 
  const [data, setData] = useState({
    email: "",
    password: "",
    fullName: "",
    
  });


  useEffect(() => {
    
    console.log(data);
  }, [data]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const SignupSubmit = async (event) => {
  
    try {
  console.log(data);
  event.preventDefault();
      const res = await axios({
        
        url: "http://localhost:5600/auth/signup",
        method: "post",
        data: data,
      });
     
      if (res.data.msg){


        window.alert(res.data.msg);
      
      return; // Return to prevent further execution
    
    }
      
    } catch (e) {
      window.alert("ERROR");
      console.error(e);
    }
  };

  return (
    <form onSubmit={SignupSubmit}>
      <div>
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          name="fullName"
          value={data.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
