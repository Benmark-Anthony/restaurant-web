import React from 'react';

import {images} from '../../constants';
import './Header.css'
import { SubHeading } from '../../components';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour"/>
        <h1 className='app__header-h1'>The Key to Find Dining</h1>
        <p className="p__opensans" style={{margin:'2rem 0'}}>open your heart to the goodness of our golden receipt, let us fill your watering mouth with the riches of our delicious dishes, get all your favourite dishes now avaliable!</p>
        <button type="button" className='custom__button'>Explore Menu</button>
      </div> 

      <div className='app__wrapper_img'>
         <img src={images.welcome} alt='header img'/>
       </div>
    </div>
  )
}

export default Header