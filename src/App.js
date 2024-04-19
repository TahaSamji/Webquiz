import logo from './logo.svg';
import './App.css';
import Home from './auth/welcome';
import ShowRecipe from './Recipe/ShowRecipe';
import { useState } from 'react';


function App() {
   const [data,setData] = useState({
    userDetail :"",
    token :"",

   });
  return (
    <div className="App">
    <Home userstate={{data,setData}}/>
    </div>
  );
}

export default App;
