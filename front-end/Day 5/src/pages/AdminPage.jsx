
import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/sidebar'
import Home from './Home'
import '../assets/css/adminPage.css'
const AdminPage = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Home />
      </div>
    )
}

export default AdminPage