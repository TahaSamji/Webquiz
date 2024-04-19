import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './signup'; // Import your SignupForm component here
import LoginForm from './login';
import ShowRecipe from '../Recipe/ShowRecipe';
import AddRecipe from '../Recipe/AddRecipe';
import AddIngred from '../Recipe/adding';
const Home = (props) => {
  const { loggedIn, email } = props;
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false); 

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignupForm(false); 
  };

  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm); 
    setShowLoginForm(false); 
  };

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome</div>
      </div>
      <div>This is the home page.</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          value={loggedIn ? 'Log out' : 'Log in'}
          onClick={toggleLoginForm}
        />
        <input
          className={'inputButton'}
          type="button"
          value="Sign up"
          onClick={toggleSignupForm} // Add onClick handler for the signup button
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
      {/* Conditionally render the LoginForm component based on the state */}
      {showLoginForm && <LoginForm />}
      {/* Conditionally render the SignupForm component based on the state */}
      {showSignupForm && <SignupForm />}
      <div>
      {loggedIn ? <ShowRecipe userstate={props}/>: <ShowRecipe/>}
      {loggedIn ? <AddRecipe userstate={props}/>: <AddRecipe/>}
      {loggedIn ? <AddIngred  userstate={props}/>: <AddIngred/>}
    </div>
    </div>
    
  );
};

export default Home;
