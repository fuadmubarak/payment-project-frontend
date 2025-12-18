import { React, useEffect, useState } from 'react'
import '../../assets/css/dashboard.css';
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import StatCard from "../../components/dashboard/statcard/StatCard";

const Dashboard = () => {
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <>
        <div className="dashboard">
      <Sidebar />

      <div className="dashboard-main">
       
        <div className="content">
          {/* Header */}
          <div className="dashboard-header">
            <div className="header-left">
              <h2>{getGreeting()}, User 👋</h2>
              <span className="header-sub">
                Welcome back, here’s what’s happening today
              </span>
            </div>

            <div className="header-right">
              <span className="date">
                {time.toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="time">
                {time.toLocaleTimeString()}
              </span>
            </div>
          </div>

          <h2>Dashboard</h2>

          <div className="stats-grid">
            <StatCard title="Total Sales" value="$1k" color="pink" />
            <StatCard title="Total Orders" value="300" color="yellow" />
            <StatCard title="Product Sold" value="5" color="green" />
            <StatCard title="New Customers" value="8" color="purple" />
          </div>

          <div className="grid-2">
            <div className="card">📊 Revenue Chart</div>
            <div className="card">📈 Visitor Insights</div>
          </div>

          <div className="grid-3">
            <div className="card">Top Products</div>
            <div className="card">Sales by Country</div>
            <div className="card">Volume vs Service</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard