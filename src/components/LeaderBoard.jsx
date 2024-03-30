import React, { useState, useEffect } from 'react';
import '../styles/Leaderboard.css';
import '../styles/Select.css';
import Background from '../Bubbles/Background';
import AnimatedButton from './Button';

const Leaderboard = () => {
  // Sample leaderboard data
  const [leaderboardData, setLeaderboardData] = useState([
    { name: 'John', score: 100 },
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 80 },
    { name: 'Emily', score: 70 },
    { name: 'David', score: 60 },
  ]);
  const [Select, SetSelect] = useState("")
  const [act, SetAct] = useState([{id:1,name:"test"},{id:1,name:"test2"}])
  const [user, SetUser] = useState(JSON.parse(localStorage.getItem("username")))
  console.log("🚀 ~ Leaderboard ~ leaderboardData:", leaderboardData)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:8000/activites", {
  //         method: "GET",
  //         headers: {
  //           // Optional headers
  //           // Add headers if needed
  //         },
  //       });
    
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
    
  //       const data = await response.json();
  //       // set data from backend to the state leaderboardData
  //       SetAct(data)
        
  //       // Parse the response body as JSON
    
  //       // Handle the data as needed
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
    
  //   fetchData();
  // },[])
  // use this to get all scores
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/leadersboard", {
          method: "GET",
          headers: {
            // Optional headers
            // Add headers if needed
          },
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
    
        const data = await response.json();
        // set data from backend to the state leaderboardData
        setLeaderboardData(data?.data)
        
        // Parse the response body as JSON
    
        // Handle the data as needed
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  },[])

  useEffect(() => {
    // Simulate data update every 5 seconds
    const interval = setInterval(() => {
      // Update scores randomly
      const updatedData = leaderboardData.map(item => ({
        ...item,
        score: Math.floor(Math.random() * 100) + 1
      }));
      setLeaderboardData(updatedData);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [leaderboardData]);


  const doTraining = async () => {
    // if it post request
    const response = await fetch("http://127.0.0.1:8000/perform-traning", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Assuming JSON data is being sent
        // Add any additional headers if needed
      },
      body: JSON.stringify({ 
       activity_id:Select,
       username:user
      }),
    });
    const data = response.json();
    if (!data.status) {
      alert(data.message)
    }


   

  }
  const getActivities = (e) => {
    SetSelect(e.target.value)
  }

  // Define an array of background colors
  const colors = ['#c5c2c2', '#24292d', '#616961', '#828254', '#99d1e4'];

  return (
    <div style={{width:"100%"}}>
      <Background />
      <h1>Welcome to the Leaderboard!</h1>
      <div className="leaderboard-container">
        <div className="welcome-header">
          <p >Hi {user}</p>
          <div>
          <select value={Select} onChange={getActivities} id="mySelect">
            <option>{"select activities"}</option>
 
  {
    act?.map(d => {
      return (
        <option key={d?.id} value={d?.id}>{d?.name}</option>
      )
    })
  }
</select>

          </div>
          {
            Select.toString().length > 0  ? <AnimatedButton title="Do training" handleclick={doTraining}/> : ""
          }
     
        </div>
        <div className="leaderboard">
          {leaderboardData.map((user, index) => (
            <div
              key={index}
              className="leaderboard-card"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <div className="user-info">
                <span className="rank">{index + 1}</span>
                <span className="name">{user.name}</span>
              </div>
              <div className="score">{user.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
