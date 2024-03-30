import React from 'react';
import '../styles/Dashboard.css'; // Import your CSS file for styling

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="card navigation-card">
        <h2>Navigation</h2>
        {/* Add navigation content here */}
      </div>
      <div className="card leaderboard-card">
        <h2>Leaderboard</h2>
        {/* Add leaderboard content here */}
      </div>
    </div>
  );
}

export default Dashboard;
