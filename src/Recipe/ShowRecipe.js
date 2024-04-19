import React, { useState,useEffect } from 'react';
import axios from 'axios';

const ShowRecipe = () => {
 
  const [data, setData] = useState({
  Recipe:[]
    
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
  

  const ShowRecipe = async (event) => {
  
    try {
  const token = localStorage.getItem("token");
  console.log(token);
      const res = await axios({
        
        url: "http://localhost:5600/Recipe/ShowRecipe",
        method: "get",
        headers: {
            Authorization: `Bearer ${token}` // Send token in the Authorization header
          }
      });
     
      if (res.data){
       


        window.alert(res.data.msg);
      
      return; // Return to prevent further execution
    
    }
      
    } catch (e) {
      window.alert("ERROR");
      console.error(e);
    }
  };

  return (
    <div>
        These are recipes 
        <button onClick={ShowRecipe}>ShowRecipe</button>
        {data.Recipe}
    </div>
  );
};

export default ShowRecipe;
