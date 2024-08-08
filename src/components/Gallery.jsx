import React from 'react';
import "../styles/Gallery.css";
import "../styles/Overview.css";

function Gallery() {
  return (
    <div className='block' id='gallery'>
      <div className="blockFlex">
        <div>
          <div className="headFlex">
            <p className='blockNumber'>(02)</p>
            <div>
              <p className='headTitle'>Gallery</p>
              <p className='headDesc'>Discover Stylish Spaces and Inspiring Details</p>
            </div>
          </div>
          <div className="Gallery">
            <img src="./gallery/1.webp" alt="image" />
            <img src="./gallery/2.webp" alt="image" />
            <img src="./gallery/3.webp" alt="image" />
            <img src="./gallery/4.webp" alt="image" />
            <img src="./gallery/5.webp" alt="image" />
            <img src="./gallery/6.webp" alt="image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery