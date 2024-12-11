import React from 'react';
import './CityBreaksSection.css';
import Container from 'react-bootstrap/Container';
import LondonCityBreaksItems from '../../Assets/LondonCityBreaksItems';
import CityBreakCard from './CityBreakCard';

function LondonCityBreaksSection() {
  return (
    <div className='city-break-section my-4 my-sm-5'>
        <Container>
            <h2 className='mb-4 mb-sm-5 text-uppercase'><span className='text-green'>London</span> city breaks</h2>
            <div className='row g-4'>
                {
                    LondonCityBreaksItems.map((item) => <CityBreakCard key={item.id} itemImage={item.itemImage} itemTitle={item.itemTitle} itemSubTitle={item.itemSubTitle} itemNights={item.itemNights} itemPrice={item.itemPrice} />)
                }
            </div>
        </Container>
    </div>
  )
}

export default LondonCityBreaksSection;