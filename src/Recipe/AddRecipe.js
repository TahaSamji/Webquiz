import React, { useState,useEffect } from 'react';
import axios from 'axios';

const AddRecipe = () => {
 
  const [data, setData] = useState({
  Name:"",
  description:"",
  ingredients:""

    
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
  

  const AddnewRecipe = async (event) => {
  
    try {
  
      const res = await axios({
        
        url: "http://localhost:5600/Recipe/addRecipe",
        method: "post",
        data:data,
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
       plz add your recipe
       <form onSubmit={AddnewRecipe}>
      <div>
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          name="Name"
          value={data.Name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="ingredients">ingredients:</label>
        <input
          type="text"
          name="ingredients"
          value={data.ingredients}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="ingredients">Description:</label>
        <input
          type="text"
          name="description"
          value={data.description}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add</button>
    </form>
    </div>
  );
};

export default AddRecipe;
