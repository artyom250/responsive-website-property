import React from 'react';
import "../styles/Overview.css";
import "../styles/Gallery.css";
import "../styles/Hero.css";
import "../styles/Plan.css";
import "../styles/Features.css";

function Features() {
  return (
    <div className='block' id='features'>
        <div className="headFlex second">
            <p className='blockNumber'>(04)</p>
            <div className='overviewBlock'>
                <div>
                    <p className='headTitle'>Features</p>
                    <p className='headDesc'>Finest Details and Luxurious Amenities</p>
                </div>
                <div className="featGrid">
                    <div>
                        <p>48</p>
                        <p>Maximum suitable people occupancy</p>
                    </div>
                    <div>
                        <p>5 Min</p>
                        <p>Walk to the nearest bus stop</p>
                    </div>
                    <div>
                        <p>0.08</p>
                        <p>Neighborhood crime rate</p>
                    </div>
                </div>
                <div className="featImg">
                    <img src="./features.webp" alt="image" />
                </div>
                <div className='featGrid2'>
                    <p className='featGrid2-h'>Interior Features</p>
                    <div>
                        <div className='gridTwoSmall'>
                            <p>Bar</p>
                            <p>Inside, in the bedroom</p>
                        </div>
                        <div className='gridTwoSmall'>
                            <p>Built-Ins</p>
                            <p>Storage and organization solutions</p>
                        </div>
                        <div className='gridTwoSmall'>
                            <p>High Ceilings</p>
                            <p>9 Feet</p>
                        </div>
                        <div className='gridTwoSmall'>
                            <p>Automation System</p>
                            <p>Pre-installed</p>
                        </div>
                        <div className='gridTwoSmall'>
                            <p>Wet Bar</p>
                            <p>In the basement</p>
                        </div>
                    </div>
                </div>
                <div className='featGrid2'>
                    <p className='featGrid2-h'>Architecture And View</p>
                    <div>
                        <div className='gridTwoSmall'>
                            <p>Architecture Style</p>
                            <p>Modern House</p>
                        </div>
                        <div className='gridTwoSmall'>
                            <p>View</p>
                            <p>Forest, Lake</p>
                        </div>
                    </div>
                </div>
                <div className='featGrid2'>
                    <p className='featGrid2-h'>Other Features</p>
                    <div>
                        <div className='gridTwoSmall'>
                            <p>Gate</p>
                            <p>Automatic</p>
                        </div>
                        <div className='gridTwoSmall'>
                            <p>Yard</p>
                            <p>Back Yard</p>
                        </div>
                        <div className='gridTwoSmall'>
                            <p>Security</p>
                            <p>Exterior Lights</p>
                        </div>
                        <div className='gridTwoSmall'>
                            <p>Detectors</p>
                            <p>Carbon Monoxide, Smoke</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features