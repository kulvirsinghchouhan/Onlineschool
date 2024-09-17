import React from 'react';


import carousel1 from '../img/carousel-1.jpg'; 
import carousel2 from '../img/carousel-2.jpg';


export default function Homeslider() {
  
  const script = document.createElement("script");
  script.src = "../../lib/wow/wow.min.js";
  script.async = true;
  document.body.appendChild(script);
  const script2 = document.createElement("script");
  script2.src = "../../lib/easing/easing.min.js";
  script2.async = true;
  document.body.appendChild(script2);

  const script3 = document.createElement("script");
  script2.src = "../../lib/waypoints/waypoints.min.js";
  script3.async = true;
  document.body.appendChild(script3);
  
  const script4 = document.createElement("script");
  script4.src = "../../lib/owlcarousel/owl.carousel.min.js";
  script4.async = true;
  script4.defer = true;
  document.body.appendChild(script4);

  const script5 = document.createElement("script");
  script5.src = "../../js/main.js";
  script5.async = true;
  script5.defer = true;
  document.body.appendChild(script5);

  

  return (
    <div className="container-fluid p-0 mb-5">
      <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative">
      
        <img className="img-fluid" src={carousel1} alt="Carousel Slide 2" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(0, 0, 0, 0.2)' }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown mb-4">
                    The Best Kindergarten School For Your Child
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
                    Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                  </p>
                  <a
                    href="/learn-more"
                    className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                  >
                    Learn More
                  </a>
                  <a
                    href="/our-classes"
                    className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                  >
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src={carousel2} alt="Carousel Slide 2" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(0, 0, 0, 0.2)' }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown mb-4">
                    Make A Brighter Future For Your Child
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
                    Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                  </p>
                  <a
                    href="/learn-more"
                    className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                  >
                    Learn More
                  </a>
                  <a
                    href="/our-classes"
                    className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                  >
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}