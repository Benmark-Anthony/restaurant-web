import React from 'react';

import { SubHeading }from '../../components';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
    <SubHeading title="Newsletter" />
    <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
    <p className='p__opensans'>And never miss latest Update</p>
    </div>
    <div className="app__newsletter-input flex__center">
    <input type="email" placeholder="Enter your email address" />
    <button type="button" className="custom__button">Subscribe</button>
  </div>
    </div>
  )
}

export default Newsletter;