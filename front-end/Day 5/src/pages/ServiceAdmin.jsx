import React, { useState } from 'react';
import Sidebar from '../components/sidebar';

const ServiceAdminPage = () => {
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
          Add Service
        </button>
      )}
      {showForm && (
        <div>
          <h2 style={{ fontSize: '24px', color: 'black', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>Add Services</h2>
          <form onSubmit={handleAddVenue} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
          <input
          type="text"
          name="name"
          placeholder="Service Name"
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
        
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>Add Services</button>
          </form>
        </div>
      )}
      <div style={{ marginTop: '40px',width :"40%",display:"flex",columnGap:"20px"}}>
        <h2 style={{ fontSize: '24px', color: 'black', textAlign: 'center', fontFamily: 'Arial, sans-serif',display:"block" }}>Existing Servies</h2>
        {/* Display added venues */}
        {venues.map((venue, index) => (
          <div key={index} style={{ backgroundColor: '#f9f9f9', padding: '20px', marginBottom: '10px', borderRadius: '4px' }}>
            <h3 style={{fontSize:"30px",textAlign:"center"}}>{venue.name}</h3>
            {venue.image && <img src={venue.image} alt={venue.name} style={{ maxWidth: '100%',width:"1000px", height: 'auto', marginBottom: '10px' }} />}
            
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ServiceAdminPage;
