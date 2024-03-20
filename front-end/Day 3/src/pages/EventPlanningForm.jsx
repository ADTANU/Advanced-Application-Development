import '../assets/css/serviceFormPage.css';
import { useState } from 'react';

// Importing images
import balloonDecorationsImage from '../assets/images/magic.jpg';

const EventPlanningForm = () => {
  const categories = [
    { 
      name: 'Decoration', 
      subCategories: [
        { name: 'Balloon Decorations', image: balloonDecorationsImage, description: 'Beautiful balloon arrangements for your event.', price: 50 },
        { name: 'Flower Decorations', image: balloonDecorationsImage, description: 'Elegant flower arrangements to enhance your decor.', price: 75 },
        { name: 'Lights Decorations', image: balloonDecorationsImage, description: 'Striking light displays to illuminate your venue.', price: 100 }
      ] 
    },
    { 
      name: 'Entertainment', 
      subCategories: [
        { name: 'DJ', image: balloonDecorationsImage, description: 'Professional DJ services to keep the party going.', price: 200 },
        { name: 'Live Band', image: balloonDecorationsImage, description: 'Live music performances by talented bands.', price: 300 },
        { name: 'Comedian', image: balloonDecorationsImage, description: 'Hilarious stand-up comedy acts for entertainment.', price: 150 }
      ] 
    },
    { 
      name: 'Photography', 
      subCategories: [
        { name: 'Wedding Photography', image: balloonDecorationsImage, description: 'Capture the precious moments of your wedding day.', price: 500 },
        { name: 'Portrait Photography', image: balloonDecorationsImage, description: 'Professional portrait sessions for individuals and families.', price: 100 },
        { name: 'Event Photography', image: balloonDecorationsImage, description: 'Documentary-style photography coverage for events.', price: 250 }
      ] 
    },
    { 
      name: 'Catering', 
      subCategories: [
        { name: 'Buffet', image: balloonDecorationsImage, description: 'Buffet-style dining with a wide variety of dishes.', price: 20 },
        { name: 'Plated', image: balloonDecorationsImage, description: 'Elegant plated meals served by professional servers.', price: 30 },
        { name: 'Cocktail', image: balloonDecorationsImage, description: 'Creative cocktail catering for your event.', price: 15 }
      ] 
    },
    // Add more categories as needed
  ];

  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) =>{
    setSelectedCategory(category);
    setShowPopup(true);
  };

  const handleSubCategoryClick = (subCategory) => {
    const index = selectedSubCategories.indexOf(subCategory);
    if (index === -1) {
      setSelectedSubCategories([...selectedSubCategories, subCategory]);
    } else {
      setSelectedSubCategories(selectedSubCategories.filter((sc) => sc !== subCategory));
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleProceed = () => {
    // Save selected data to local storage
    localStorage.setItem('selectedSubCategories', JSON.stringify(selectedSubCategories));
  
    // Proceed to the cart page
    window.location.href = '/cart';
  };
  

  return (
    <div className="container">
      <h1 className="title">Services can be added to your list</h1>
      <div className="card-container">
        {categories.map((category, index) => (
          <button className="card" key={index} onClick={() => handleCategoryClick(category)}>
            <div className="overlay">
              <div className="text">{category.name}</div>
            </div>
          </button>
        ))}
      </div>
      {selectedSubCategories.length > 0 && (
        <div className="selected-sub-categories-container">
          <div className="selected-sub-categories">
            {selectedSubCategories.map((subCategory, index) => (
              <div className="selected-sub-category" key={index}>{subCategory.name}</div>
            ))}
          </div>
          <button className="remove-selected-sub-categories" onClick={() => setSelectedSubCategories([])}>Remove All</button>
        </div>
      )}
      {showPopup && selectedCategory && (
        <div className="popup-container" onClick={handleClosePopup}>
          <div className="sub-category-container">
            {selectedCategory.subCategories.map((subCategory, index) => (
              <div className="sub-category" key={index} onClick={(e) => {
                e.stopPropagation();
                handleSubCategoryClick(subCategory);
              }}>
                <img src={subCategory.image} alt={subCategory.name} />
                <div>
                  <div className="sub-category-name">{subCategory.name}</div>
                  <div className="sub-category-description">{subCategory.description}</div>
                  <div className="sub-category-price">Price: ${subCategory.price}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="close-popup" onClick={handleClosePopup}>x</button>
        </div>
      )}
      <button className="proceed-button" onClick={handleProceed}>Proceed</button> {/* Proceed button */}
    </div>
  );
};

export default EventPlanningForm;
