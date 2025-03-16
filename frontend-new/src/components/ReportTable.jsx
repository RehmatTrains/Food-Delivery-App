// src/components/ReportTable.jsx
import { Table } from 'react-bootstrap';

export default function ReportTable({ reports }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Date</th>
          <th>Food Saved</th>
          <th>CO2 Saved</th>
        </tr>
      </thead>
      <tbody>
        {reports.map(report => (
          <tr key={report.date}>
            <td>{report.date}</td>
            <td>{report.foodSaved} kg</td>
            <td>{report.co2Saved} kg</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
