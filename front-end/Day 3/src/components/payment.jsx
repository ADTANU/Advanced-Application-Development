import React from 'react';
import '../assets/css/adminPage.css'; // Import the CSS file
import Sidebar from './sidebar';

function Payment() {
  // Sample payment data, replace with actual data fetched from backend
  const payments = [
    { id: 1, name: 'John Doe', submissionDate: '2024-03-19', description: 'Booking for event', eventType: 'Wedding', eventDate: '2024-04-15', status: 'Verified' },
    // Add more payment data as needed
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Sidebar /> {/* Include the Sidebar component */}
    <div style={{ flex: '1', padding: '20px' }}></div>
    <div className="payment-container">
      <h1 className="payment-heading">Payments</h1>
      <table className="payment-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Name</th>
            <th>Submission Date</th>
            <th>Description</th>
            <th>Event Type</th>
            <th>Event Date</th>
            <th>Booking Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <PaymentRow key={payment.id} payment={payment} />
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

// PaymentRow component for rendering each payment row
function PaymentRow({ payment }) {
  return (
    <tr>
      <td>{payment.id}</td>
      <td>{payment.name}</td>
      <td>{payment.submissionDate}</td>
      <td>{payment.description}</td>
      <td>{payment.eventType}</td>
      <td>{payment.eventDate}</td>
      <td>{payment.status}</td>
      <td>
        <button className="verify-button">Verify</button>
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </td>
    </tr>
  );
}

export default Payment;
