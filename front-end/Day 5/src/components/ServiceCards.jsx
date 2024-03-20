 // Import your custom CSS file (create one if it doesn't exist)

const ServiceCards = () => {
  return (
    <div className="service-cards-container">
      {/* Catering */}
      <div className="service-card">
        <i className="fas fa-utensils"></i>
        <h3>Catering</h3>
        <p>We provide delicious food for your events.</p>
      </div>

      {/* Decoration */}
      <div className="service-card">
        <i className="fas fa-paint-roller"></i>
        <h3>Decoration</h3>
        <p>Transform your venue with our stunning decorations.</p>
      </div>

      {/* Venues */}
      <div className="service-card">
        <i className="fas fa-building"></i>
        <h3>Venues</h3>
        <p>Choose from a variety of beautiful event spaces.</p>
      </div>

      {/* Photography */}
      <div className="service-card">
        <i className="fas fa-camera"></i>
        <h3>Photography</h3>
        <p>Capture your special moments with our professional photographers.</p>
      </div>
    </div>
  );
};

export default ServiceCards;
