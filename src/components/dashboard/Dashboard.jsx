import { useState } from 'react';
import './Dashboard.css';
import img from '/img.jpg'

import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

function Dashboard() {
  const [active, setActive] = useState('Home');
  const [collapsed, setCollapsed] = useState(false);
  const menuItems = ['Home', 'Projects', 'Messages', 'Tasks', 'Settings'];

  

  return (
    <div className="dashboard-layout">
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h2>{collapsed ? 'Dash' : 'Dashboard'}</h2>
          <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? '→' : '←'}
          </button>
        </div>
        <nav className="menu">
          {menuItems.map(item => (
            <div
              key={item}
              className={`menu-item ${active === item ? 'active' : ''}`}
              onClick={() => setActive(item)}
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="topbar">
          <div className="greeting">
            <h1 className="dashboard-title">{active}</h1>
            <p className="dashboard-subtitle">Welcome to your {active.toLowerCase()} panel 👋</p>
          </div>
          <div className="profile-avatar">
            <img src={img} alt="Profile" />
          </div>
        </div>

        <div className="dashboard-cards">
          <div className="card card-1">
            <h3>Projects</h3>
            <p>5 active</p>
          </div>
          <div className="card card-2">
            <h3>Messages</h3>
            <p>2 new</p>
          </div>
          <div className="card card-3">
            <h3>Tasks</h3>
            <p>8 pending</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
