import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/PaymentProcessPage.css'

const PaymentProcess = ({ estimatedPrice }) => {
  const [paymentType, setPaymentType] = useState('full');

  const handlePaymentTypeChange = (type) => {
    setPaymentType(type);
  };

  const handlePayment = () => {
    // Implement payment logic here based on paymentType
    alert(`Payment processed for ${paymentType === 'full' ? 'full amount' : '20%'} of $${estimatedPrice}`);
  };

  return (
    <div className="payment-container">
      <h1>Payment Process</h1>
      <p>Estimated Total: ${estimatedPrice}</p>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            value="full"
            checked={paymentType === 'full'}
            onChange={() => handlePaymentTypeChange('full')}
          />
          Full Payment
        </label>
        <label>
          <input
            type="radio"
            value="20%"
            checked={paymentType === '20%'}
            onChange={() => handlePaymentTypeChange('20%')}
          />
          20% Payment
        </label>
      </div>
      <button onClick={handlePayment}>Proceed to Payment</button>
      <Link to="/cart">Back to Cart</Link>
    </div>
  );
};

export default PaymentProcess;
