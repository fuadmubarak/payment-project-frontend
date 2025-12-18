import React from 'react'

const StatCard = ({ title, value, color }) => {
  return (
    <div className={`stat-card ${color}`}>
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  )
}

export default StatCard