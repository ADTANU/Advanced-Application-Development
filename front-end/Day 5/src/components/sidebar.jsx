import React from 'react';
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> Dashboard
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/events">
            <BsGrid1X2Fill className='icon' /> Events
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/venues">
            <BsFillArchiveFill className='icon' /><Link to="/adminVenue"> Venues</Link>
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/services">
            <BsFillGrid3X3GapFill className='icon' /> Services
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/payment">
           <BsPeopleFill className='icon' />  Payment
          </a>
        </li>
       
      </ul>
    </aside>
  );
}

export default Sidebar;
