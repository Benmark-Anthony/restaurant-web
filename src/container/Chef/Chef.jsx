import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
     <div className='app__wrapper_img app__wrapper_img-reverse'>
     <img  src={images.chef} alt='img chef'/>
     </div>
     <div className='app__wrapper_info'>
      <SubHeading  title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>Food Rule's The World </p>
        </div>
        <p className='p__opensans'>We believe that as a chef, That one of the best impact one can provided to the world is a deli meals, which we offer to you, what are you wating for, order now!</p>
      </div>

        <div className='app__chef-sign'>
          <p className=''>luo Willams Kevin</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt='sign-chef'/>
        </div>
     </div>
    </div>
  )
}

export default Chef;