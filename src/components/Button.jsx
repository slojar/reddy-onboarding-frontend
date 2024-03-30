import React from 'react';
import '../styles/Button.css'; // Import your CSS file for styling
import { Navigate,useNavigate } from 'react-router-dom';

function AnimatedButton({title,handleclick}) {
    const navigate = useNavigate();
  return (
    <button className="animated-button" onClick={handleclick}>{title ? title : "Submit"}</button>
  );
}

export default AnimatedButton;
