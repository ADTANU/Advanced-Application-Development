import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Home() {
  const data = [
    { name: 'January', sales: 4000, visits: 2400 },
    { name: 'February', sales: 3000, visits: 1398 },
    { name: 'March', sales: 2000, visits: 9800 },
    { name: 'April', sales: 2780, visits: 3908 },
    { name: 'May', sales: 1890, visits: 4800 },
    { name: 'June', sales: 2390, visits: 3800 },
    { name: 'July', sales: 3490, visits: 4300 }
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Dashboard</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Customers</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>1200</h1> {/* Replace with actual number of customers */}
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Venues</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>50</h1> {/* Replace with actual number of venues */}
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>No of Bookings</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>200</h1> {/* Replace with actual number of bookings */}
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Alerts</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>10</h1> {/* Replace with actual number of alerts */}
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="visits" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="visits" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
