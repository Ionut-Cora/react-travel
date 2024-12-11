import React from 'react';
import './CityBreaksSection.css';
import Container from 'react-bootstrap/Container';
import ParisCityBreaksItems from '../../Assets/ParisCityBreaksItems';
import CityBreakCard from './CityBreakCard';

function ParisCityBreaksSection() {
  return (
    <div className='city-break-section my-4 my-sm-5'>
        <Container>
            <h2 className='mb-4 mb-sm-5 text-uppercase'><span className='text-green'>Paris</span> city breaks</h2>
            <div className='row g-4'>
                {
                    ParisCityBreaksItems.map((item) => <CityBreakCard key={item.id} itemImage={item.itemImage} itemTitle={item.itemTitle} itemSubTitle={item.itemSubTitle} itemNights={item.itemNights} itemPrice={item.itemPrice} />)
                }
            </div>
        </Container>
    </div>
  )
}

export default ParisCityBreaksSection;