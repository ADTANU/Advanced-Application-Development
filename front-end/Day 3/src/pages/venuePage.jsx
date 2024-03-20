import React, { useState, useEffect } from 'react';
import '../assets/css/venuePage.css'; // Import your custom CSS file (create one if it doesn't exist)
import backImage from '../assets/images/venue1.jpg'; 
import backImage1 from '../assets/images/venue2.jpg'; 
import backImage2 from '../assets/images/venue3.jpg'; 
import backImage4 from '../assets/images/venue4.jpg'; 
import backImage6 from '../assets/images/venue6.jpg'; 
import backImage3 from '../assets/images/about back1.jpg';
import { Link } from 'react-router-dom';

const VenuePage = ({ isLoggedIn }) => {
  const [venues, setVenues] = useState([
    {
      id: 1,
      name: 'Elegant Hall',
      image: backImage, // Replace with actual image path
      price: '$500',
      description: 'A luxurious venue for weddings and corporate events.',
      location: 'Coimbatore',
      capacity: '200 guests',
      eventType: ['Wedding', 'Corporate Event'],
      availableDates: ['2024-04-01', '2024-04-15', '2024-05-01', '2024-05-15'],
    },
    {
      id: 2,
      name: 'Meeting hall',
      image: backImage1,
      price: '$700',
      description: 'An extravagant venue suitable for large events.',
      location: 'Tirupur',
      capacity: '300 guests',
      eventType: ['Corporate Event', 'Get Together'],
      availableDates: ['2024-04-10', '2024-04-20', '2024-05-05', '2024-05-25'],
    },
    {
      id: 3,
      name: 'Harbor View',
      image: backImage2,
      price: '$400',
      description: 'A scenic venue perfect for intimate gatherings.',
      location: 'Chennai',
      capacity: '100 guests',
      eventType: ['Birthday', 'Get Together'],
      availableDates: ['2024-04-05', '2024-04-10', '2024-05-15', '2024-05-20'],
    },
    {
      id: 4,
      name: 'Rustic Barn',
      image: backImage4,
      price: '$300',
      description: 'A charming venue with a rustic ambiance.',
      location: 'Tirupur',
      capacity: '150 guests',
      eventType: ['Corporate Event', 'Birthday'],
      availableDates: ['2024-04-05', '2024-04-25', '2024-05-10', '2024-05-30'],
    },
    {
      id: 5,
      name: 'Rustic Barn',
      image: backImage4,
      price: '$300',
      description: 'A charming venue with a rustic ambiance.',
      location: 'Coimbatore',
      capacity: '150 guests',
      eventType: ['Wedding', 'Birthday'],
      availableDates: ['2024-04-05', '2024-04-25', '2024-05-10', '2024-05-30'],
    },
    {
      id: 6,
      name: 'Rustic Barn',
      image: backImage6,
      price: '$300',
      description: 'A charming venue with a rustic ambiance.',
      location: 'Coimbatore',
      capacity: '150 guests',
      eventType: ['Wedding', 'Get Together'],
      availableDates: ['2024-04-05', '2024-04-25', '2024-05-10', '2024-05-30'],
    },
    // Add more venues here
  ]);
  const [location, setLocation] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [filteredVenues, setFilteredVenues] = useState([]);

  useEffect(() => {
    // Filter venues based on location
    let filtered = venues.filter((venue) => {
      if (location && !venue.location.toLowerCase().includes(location.toLowerCase())) {
        return false;
      }
      return true;
    });

    // Filter further based on event type
    if (eventType) {
      filtered = filtered.filter((venue) => venue.eventType.includes(eventType));
    }

    // Filter further based on event date
    if (eventDate) {
      filtered = filtered.filter((venue) => venue.availableDates.includes(eventDate));
    }

    setFilteredVenues(filtered);
  }, [location, eventType, eventDate]); // Update whenever input fields change

  return (
    <>
      <div className="venue-page">
        <h2 style={{ fontSize: "30px", color: "black", textAlign: "center", fontFamily: "Share Tech Mono" }}> Book Venues </h2>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Birthday">Birthday</option>
            <option value="Get Together">Get Together</option>
          </select>
          <input
            type="date"
            placeholder="Event Date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div className="venue-cards">
          {filteredVenues.length > 0 ? (
            filteredVenues.map((venue) => (
              <div className="venue-card" key={venue.id}>
                  <img src={venue.image} alt={venue.name} />
                  <h3>{venue.name}</h3>
                  <p>{venue.description}</p>
                  <p>Location: {venue.location}</p>
                  <p>Capacity: {venue.capacity}</p>
                  <p>Price: {venue.price}</p>
                  <p>Event Type: {venue.eventType.join(', ')}</p>
                <Link to="/service">
                  <button style={{backgroundColor:"#D2B48C",width:"100px",height:"40px",border:"none",fontSize:"18px",marginLeft:"19rem",cursor:"pointer"}}>Book</button> {/* Add Book button */}
                </Link>
              </div>
            ))
          ) : (
            <p>No venues found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default VenuePage;
