import React from 'react';
import Sidebar from './sidebar';

function Venues() {
  // Sample venue data, replace with actual data fetched from backend
  const venues = [
    { id: 1, name: 'Venue 1', location: 'City 1', capacity: 100, description: 'Beautiful venue for weddings and events' },
    { id: 2, name: 'Venue 2', location: 'City 1', capacity: 100, description: 'Beautiful venue for weddings and events' },
    { id: 3, name: 'Venue 3', location: 'City 1', capacity: 100, description: 'Beautiful venue for weddings and events' },
    { id: 4, name: 'Venue 4', location: 'City 1', capacity: 100, description: 'Beautiful venue for weddings and events' },

    // Add more venue data as needed
  ];

  return (
    <>
        <Sidebar/>
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ flexBasis: '100%', fontSize: '24px', marginBottom: '20px' }}>Venues</h1>
      {venues.map(venue => (
        <div key={venue.id} style={{ flex: '1 0 21%', border: '1px solid #ccc', borderRadius: '5px', margin: '5px', padding: '10px' }}>
          <h2 style={{ fontSize: '20px', margin: '0', color: '#333' }}>{venue.name}</h2>
          <p style={{ margin: '5px 0', color: '#666' }}>Location: {venue.location}</p>
          <p style={{ margin: '5px 0', color: '#666' }}>Capacity: {venue.capacity}</p>
          <p style={{ margin: '5px 0', color: '#666' }}>Description: {venue.description}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Venues;
