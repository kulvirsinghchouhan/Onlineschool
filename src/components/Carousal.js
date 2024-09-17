import React from 'react'

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../img/carousel-1.jpg';
import carousel2 from '../img/carousel-2.jpg';
function Carousal() {
  return (
    <div>
      <Carousel>
                <div>
                    <img src={carousel1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={carousel2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
            </Carousel>
    </div>
  )
}

export default Carousal

