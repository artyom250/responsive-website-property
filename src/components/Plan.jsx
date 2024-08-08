import React from 'react';
import "../styles/Overview.css";
import "../styles/Gallery.css";
import "../styles/Hero.css";
import "../styles/Plan.css";

function Plan() {
  return (
    <div className='block' id='plan'>
      <div className="headFlex second">
        <p className='blockNumber'>(03)</p>
        <div>
          <div>
            <p className='headTitle'>Plan</p>
            <p className='headDesc'>Detailed Exploration of Your Dream Home</p>
          </div>
          <img src="./plan.svg" alt="image" className='planImage' />
          <p className="overviewDesc">Discover the essence of home in our interior space. From cozy living areas to inviting bedrooms, each room embodies comfort and style. Explore the artful balance of elegant furnishings and subtle accents, creating a sanctuary that inspires.</p>
          <a href="#" className="hero-link plan-link">Contact Agent</a>

          <div className="planGrid">
            <div className="planBlock">
              <div>
                <p>Kitchen</p>
                <p>Gourmet Kitchen, Remodeled</p>
              </div>
              <div>
                <p>Laundry Room</p>
                <p>Room, Inside</p>
              </div>
              <div>
                <p>Fireplace</p>
                <p>Gas, Living Room</p>
              </div>
              <div>
                <p>Appliances</p>
                <p>Built-In BBQ, Oven</p>
              </div>
            </div>
            <div className="planBlock">
              <div>
                <p>Pool</p>
                <p>In Ground, Heated</p>
              </div>
              <div>
                <p>Heat Type</p>
                <p>Central</p>
              </div>
              <div>
                <p>Air Conditioning</p>
                <p>Central, Multi/Zone</p>
              </div>
              <div>
                <p>Sewer</p>
                <p>In Street Paid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plan