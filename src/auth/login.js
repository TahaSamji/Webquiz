import React, { useState,useEffect } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [newdata, setnewData] = useState([]); 
 
  
  const loginSubmit = async (event) => {
    try {
      
    if(data.email === '' || data.password === ''){
      window.alert("Please enter credentials");
    }
  
      event.preventDefault();
      const res = await axios({
        
        url: "http://localhost:5600/auth/login",
        method: "post",
        data: { email: data.email ,password:data.password },
      });
    
   
      if (res.data.msg === "LOGGED IN"){
        window.alert(res.data.msg);

        localStorage.setItem("token",res.data.token);
    
      return; 
    
    }
      
    } catch (e) {
      window.alert("ERROR");
      console.error(e);
    }
  };

  const [data, setData] = useState({
    email: "",
    password: "",
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

 

 

  return (
    <form onSubmit={loginSubmit}>
      <div>
        <label htmlFor="Email">Email:</label>
        <input
          type="text"
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
