// src/components/DashboardMetrics.jsx
import React from 'react';

const DashboardMetrics = ({ metrics }) => {
  if (!Array.isArray(metrics)) {
    return <div>No metrics available</div>;
  }

  return (
    <div className="dashboard-metrics d-flex justify-content-between">
      {metrics.map((metric, index) => (
        <div key={index} className="metric-card">
          <h5>{metric.title}</h5>
          <p>{metric.value}</p>
        </div>
      ))}
    </div>
  );
};

DashboardMetrics.defaultProps = {
  metrics: [],
};

export default DashboardMetrics;
