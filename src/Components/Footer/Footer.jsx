import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [newDate, setNewDate] = useState('');
  useEffect(() => {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    setNewDate([todayYear])
  }, []);

  return (
    <div className='py-3'>
        <p className='mb-0'>copyright &copy; made by <Link to='https://www.ionutcora.com/' style={{textDecoration: 'none', color: '#000000'}} target="_blank">Ionut Cora</Link> / 2024-{newDate}</p>
    </div>
  )
}

export default Footer;