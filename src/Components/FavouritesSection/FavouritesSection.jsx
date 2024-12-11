import React from 'react';
import './FavouritesSection.css';
import Container from 'react-bootstrap/Container';

function FavouritesSection() {
  return (
    <div className='favourites-section my-4 my-sm-5'>
        <Container>
            <h2 className='text-start text-uppercase mb-4 mb-sm-5 text-green'>Your favourites</h2>
            <div className='row g-4'>
                <div className='col-sm-6 col-lg-3'>
                    <div className='spa-div text-uppercase img-hover d-flex align-items-end justify-content-center rounded'>
                        <h4 className='text-light mb-4 h2'>Spa</h4>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-3'>
                    <div className='pool-div text-uppercase img-hover d-flex align-items-end justify-content-center rounded'>
                        <h4 className='text-light mb-4 h2'>Pool</h4>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-3'>
                    <div className='pet-friendly-div img-hover d-flex align-items-end justify-content-center rounded'>
                        <h4 className='text-light text-uppercase mb-4 h2'>Pet friendly</h4>
                    </div>
                </div>
                <div className='col-sm-6 col-lg-3'>
                    <div className='all-inclusive-div img-hover d-flex align-items-end justify-content-center rounded'>
                        <h4 className='text-light text-uppercase mb-4 h2'>All inclusive</h4>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default FavouritesSection;