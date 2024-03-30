import React, { useState } from 'react';
import '../styles/NameInput.css'; // Import CSS file for styling
import AnimatedButton from './Button';
import { Navigate,useNavigate } from 'react-router-dom';

const NameInput = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(''); 

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = async () => {
    localStorage.setItem("username",JSON.stringify(name))   

    const response = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Assuming JSON data is being sent
        // Add any additional headers if needed
      },
      body: JSON.stringify({ 
        username: name
      }),
    });
    const data = response.json();
    if (!response.ok) {
      alert(data.message)
    }
    navigate("/leaderboard")
  };

  return (
    <div className="center">
      <h1>Welcome!</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={name}
        onChange={handleChange}
        className="name-input"
      />
      <br/>
      <AnimatedButton handleclick={handleSubmit}/>
    </div>
  );
};

export default NameInput;
