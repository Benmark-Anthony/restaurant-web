import React from 'react';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
    <img src={images.G} alt="g letter"/>
    </div>

    <div className='app__aboutus-content flex__center '> 
      <div className='app__aboutus-content_about'>
       <h1 className='headtext__cormorant'>About Us</h1>
       <img src={images.spoon} alt="about_spoon" className='spoon__image'/>
       <p className='p__opensans'> our resturant is one of it kind and has a very good record of severing people better in which of those years we also bagged the  best food quality award 2012/13, we didn't also stop here as we also won african best resturant in 2015/16, lets us sever you! </p>
       <button type='button ' className='custom__button'>learn more</button> 
      </div>

      <div className='app__aboutus-content_knife flex__center '>
      <img src={images.knife} alt='about_knife' />

      </div>

      <div className='app__aboutus-content_history'>
      <h1 className='headtext__cormorant'>Our History</h1>
      <img src={images.spoon} alt="about_spoon" className='spoon__image'/>
      <p className='p__opensans'> our resturant was estblished in the year 2011, and has since then have one of the best growing rate in african resturant, that year it rank top 20 best resturant coming 15th and also first as the best growing resturant.....</p>
      <button type='button ' className='custom__button'>learn more</button> 
     </div>
     </div>
    </div>
  )
}

export default AboutUs