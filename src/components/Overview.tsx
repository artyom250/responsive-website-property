import React from 'react';
import "../styles/Overview.css";

function Overview() {
  return (
    <div className='block' id='overview'>
      <div className="blockFlex">
        <p className='blockNumber'>(01)</p>
        <div className='overviewBlock'>
          <div className='overviewFlex'>
            <div>
              <p>Location</p>
              <p>1936 Redcliff St, Los Angeles, CA 90039, USA</p>
            </div>
            <div>
              <p>Neighborhood</p>
              <p>Silver Lake</p>
            </div>
          </div>
          <div className='overviewGrid'>
            <div className='overviewFlexTwo'>
              <div>
                <p className="overviewDesc">Step into the warmth of Silver Lake living with this inviting residence. Nestled in a prime location, this home offers the perfect blend of comfort and convenience. Embrace the allure of modern living against the backdrop of a vibrant neighborhood.</p>
                <p className="overviewDesc two">Step into the heart of the home, where an open layout effortlessly merges the living, dining, and kitchen spaces. Flooded with natural light, the interior boasts elegant finishes and designer details at every turn.</p>
              </div>
              <div className='overviewPrice'>
                <p>Price</p>
                <p>$1,150,000</p>
              </div>
            </div>
            <div className='overviewTable'>
              <div>
                <p>Category</p>
                <p>Family House</p>
              </div>
              <div>
                <p>Status</p>
                <p>For Sale</p>
              </div>
              <div>
                <p>Year Built</p>
                <p>2018</p>
              </div>
              <div>
                <p>Bedrooms</p>
                <p>6</p>
              </div>
              <div>
                <p>Bathrooms</p>
                <p>2</p>
              </div>
              <div>
                <p>Square Footage</p>
                <p>3,760</p>
              </div>
              <div>
                <p>Car Garage</p>
                <p>3</p>
              </div>
              <div>
                <p>Floors</p>
                <p>2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview