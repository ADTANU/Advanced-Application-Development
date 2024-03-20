import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/signUpPage';
import Login from './pages/loginPage';
import LandingPage from './pages/landingPage';
import VenuePage from './pages/venuePage';
import Payment from './components/payment';
import AdminPage from './pages/AdminPage';
import VenuesPage from './components/venue';
import HomeUser from './pages/HomeUser';
import { useState } from 'react';
import EventPlanningForm from './pages/EventPlanningForm';
import SelectedItemsPage from './pages/receiptPage';
import CartPage from './pages/receiptPage';
import VenueAdminPage from './pages/venueAdmin';
import EventAdminPage from './pages/EventAdmin';
import ServiceAdminPage from './pages/ServiceAdmin';
import PaymentProcessPage from './pages/PaymentProcessPage';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage isLoggedIn={isLoggedIn}/>}> </Route>
        <Route path='/admin' element={<AdminPage/>}> </Route>
        <Route path='/signup' element={<SignUp/>}> </Route>
        <Route path='/service' element={<EventPlanningForm/>}> </Route>
        <Route path='/cart' element={<CartPage/>}> </Route>
        <Route path='/adminVenue' element={<VenueAdminPage/>}> </Route>
        <Route path='/events' element={<EventAdminPage/>}> </Route>
        <Route path='/services' element={<ServiceAdminPage/>}> </Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/venues' element={<VenuePage isLoggedIn={isLoggedIn}/>}> </Route>
        
        <Route path='/venueadmin' element={<VenuesPage/>}> </Route>
        <Route path='/paymentProcess' element={<PaymentProcessPage/>}> </Route>
        <Route path='/payment' element={<Payment/>}> </Route>
        <Route path='/homeUser' element={<HomeUser/>}> </Route>
      </Routes>
    </Router>
  )
}

export default App