import React, { useState } from 'react';
import Sidebar from '../components/sidebar';

const VenueAdminPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [venues, setVenues] = useState([]);
  const [newVenue, setNewVenue] = useState({
    name: '',
    image: '',
    price: '',
    description: '',
    location: '',
    capacity: '',
    eventType: [],
    availableDates: [],
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewVenue({ ...newVenue, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleAddVenue = (e) => {
    e.preventDefault();
    setVenues([...venues, newVenue]);
    setNewVenue({
      name: '',
      image: '',
      price: '',
      description: '',
      location: '',
      capacity: '',
      eventType: [],
      availableDates: [],
    });
    setShowForm(false); // Hide the form after adding the venue
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVenue({ ...newVenue, [name]: value });
  };

  const handleEventTypeChange = (e) => {
    const { options } = e.target;
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setNewVenue({ ...newVenue, eventType: selectedOptions });
  };

  const handleAvailableDatesChange = (e) => {
    const { value } = e.target;
    const dates = value.split(',');
    setNewVenue({ ...newVenue, availableDates: dates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Sidebar /> {/* Include the Sidebar component */}
    <div style={{ flex: '1', padding: '20px' }}>
  
      {!showForm && (
        <button onClick={() => setShowForm(true)} style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
          Add Venue
        </button>
      )}
      {showForm && (
        <div>
          <h2 style={{ fontSize: '24px', color: 'black', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>Add Venue</h2>
          <form onSubmit={handleAddVenue} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
          <input
          type="text"
          name="name"
          placeholder="Venue Name"
          value={newVenue.name}
          onChange={handleInputChange}
          style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newVenue.image}
          onChange={handleInputChange}
          style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newVenue.price}
          onChange={handleInputChange}
          style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newVenue.description}
          onChange={handleInputChange}
          style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        ></textarea>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newVenue.location}
          onChange={handleInputChange}
          style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        />
        <input
          type="text"
          name="capacity"
          placeholder="Capacity"
          value={newVenue.capacity}
          onChange={handleInputChange}
          style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        />
        <select
          name="eventType"
          multiple
          value={newVenue.eventType}
          onChange={handleEventTypeChange}
          style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        >
          <option value="Wedding">Wedding</option>
          <option value="Corporate Event">Corporate Event</option>
          <option value="Birthday">Birthday</option>
          <option value="Get Together">Get Together</option>
        </select>
        <input
          type="text"
          name="availableDates"
          placeholder="Available Dates (comma-separated)"
          value={newVenue.availableDates.join(',')}
          onChange={handleAvailableDatesChange}
          style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        />
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>Add Venue</button>
          </form>
        </div>
      )}
      <div style={{ marginTop: '40px',width :"40%",display:"flex",columnGap:"20px"}}>
        <h2 style={{ fontSize: '24px', color: 'black', textAlign: 'center', fontFamily: 'Arial, sans-serif',display:"block" }}>Existing Venues</h2>
        {/* Display added venues */}
        {venues.map((venue, index) => (
          <div key={index} style={{ backgroundColor: '#f9f9f9', padding: '20px', marginBottom: '10px', borderRadius: '4px' }}>
            <h3>{venue.name}</h3>
            {venue.image && <img src={venue.image} alt={venue.name} style={{ maxWidth: '100%',width:"1000px", height: 'auto', marginBottom: '10px' }} />}
            <p style={{fontSize:"23px"}}>Price: {venue.price}</p>
          <p style={{fontSize:"23px"}}>Description: {venue.description}</p>
          <p style={{fontSize:"23px"}}>Location: {venue.location}</p>
          <p style={{fontSize:"23px"}}>Capacity: {venue.capacity}</p>
          <p style={{fontSize:"23px"}}>Event Type: {venue.eventType.join(', ')}</p>
          <p style={{fontSize:"23px"}}>Available Dates: {venue.availableDates.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default VenueAdminPage;
