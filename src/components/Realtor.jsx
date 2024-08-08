import React from 'react';
import "../styles/Realtor.css";

function Realtor() {
  return (
    <div className='block' id='realtor'>
      <div className="headFlex second">
        <p className='blockNumber'>(05)</p>
        <div className="overviewBlock">
          <div>
            <p className='headTitle'>Realtor</p>
            <p className='headDesc'>Helping You Discover Your Ideal Home</p>
          </div>
          <div className="overviewBlock">
            <div className="realtorFlex">
              <div className='realtorBlock'>
                <div>
                  <p className="name">Sam Hughes</p>
                  <div className="stats">
                    <p>Licensed Realtor</p>
                    <div className="stat-line"></div>
                    <p>ID: RLT-7894-MB</p>
                  </div>
                </div>
                <div>
                  <p className="desc">Meet Max Williams, your dedicated licensed realtor, passionate about turning your real estate dreams into reality. With expertise in navigating the buying or selling process, Max provides personalized service tailored to your needs. He stays ahead of market trends to ensure informed decisions for first-time buyers, seasoned investors, and sellers alike.</p>
                  <a href="#" className="hero-link">Contact Agent</a>
                </div>
              </div>
              <div className="realtorImg">
                <img src="https://images.pexels.com/photos/8962571/pexels-photo-8962571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Realtor