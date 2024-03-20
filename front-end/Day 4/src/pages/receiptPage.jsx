import { Link } from 'react-router-dom';

const CartPage = () => {
  // Retrieve selected services from localStorage
  const selectedServices = JSON.parse(localStorage.getItem('selectedSubCategories')) || [];

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedServices.forEach(service => {
      totalPrice += service.price;
    });
    return totalPrice;
  };

  // Function to handle checkout and send the estimated price to the payment page
  const handleCheckout = () => {
    const totalPrice = calculateTotalPrice();
    const estimatedPrice = totalPrice * 0.2; // 20% of the total price
    window.location.href = `/paymentProcess?estimatedPrice=${estimatedPrice}`;
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '40px', marginBottom: '20px', color: '#D2B48C', fontFamily: 'monospace', textAlign: 'center' }}>Your Selected Services</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {selectedServices.map((service, index) => (
          <div key={index} style={{ flex: '0 0 calc(45% - 10px)', border: '1px solid #ccc', borderRadius: '5px', margin: '5px', padding: '10px', boxSizing: 'border-box', textAlign: 'center' }}>
            <img src={service.image} alt={service.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{service.name}</h3>
            <p style={{ fontSize: '16px', margin: '5px 0' }}>${service.price}</p>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '35px', marginTop: '50px', color: '#FFA500' }}>Estimated Total: ${calculateTotalPrice()}</p>
      <button onClick={handleCheckout} style={{ backgroundColor: '#3f51b5', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', marginTop: '20px' }}>Checkout</button>
    </div>
  );
};

export default CartPage;
