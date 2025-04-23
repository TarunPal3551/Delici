import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slideone from '../../assets/images/main-slider/slider-1.jpeg';
import Slidetwo from '../../assets/images/main-slider/slider-2.jpeg';
import Slidethree from '../../assets/images/main-slider/slider-3.jpeg';
import bookicon1 from '../../assets/images/resource/book-icon-1.png';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';


SwiperCore.use([Navigation]);

function Banner() {
    return (
        <Swiper
            className="banner-section banner-section-coustm"
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} // Use "navigation" with lowercase, and place it outside the SwiperSlide elements
        >
            <div className="banner-container">
                <div className="banner-slider">
                    <div className="swiper-wrapper">
                    {[Slideone, Slidetwo, Slidethree].map((image, index) => (
  <SwiperSlide key={index} className="swiper-slide slide-item img-fluid" style={{ backgroundImage: `url(${image})` }}>
    <div className="auto-container">
      <div className="content-box">
        <div className="content">
          <div className="clearfix">
            <div className="inner">
              <div className="subtitle">
                <span style={{
                  color: '#fff',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  textShadow: '2px 2px 8px rgba(0, 0, 0, 1)'
                }}>delightful experience</span>
              </div>
              <div className="pattern-image">
                <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
              </div>
              <h1>
                <span style={{
                  color: '#fff',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  padding: '6px 10px',
                  borderRadius: '8px',
                  textShadow: '3px 3px 10px rgba(0, 0, 0, 1)'
                }}>
                  {index === 0 ? 'Flavors Inspired by' : index === 1 ? 'Where every flavor' : 'For the love of'}
                  <br />
                  {index === 0 ? 'the Seasons' : index === 1 ? 'tells a story' : 'delicious food'}
                </span>
              </h1>
              <div className="text" style={{
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '5px 10px',
                borderRadius: '6px',
                textShadow: '2px 2px 6px rgba(0, 0, 0, 1)'
              }}>
                Come with family & feel the joy of mouthwatering food
              </div>
              <div className="links-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                 <div className="link link-btn">
                            <Link to="/menu" className="theme-btn btn-style-one clearfix" style={{
                              backgroundColor: '#ffffff',
                              color: '#48101a',
                              padding: '10px 24px',
                              borderRadius: '6px',
                              fontWeight: '600',
                              textTransform: 'uppercase',
                              letterSpacing: '1px',
                              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}>
                              <span className="btn-wrap">
                                <span className="text-one">View Our Menu</span>
                                <span className="text-two">View Our Menu</span>
                              </span>
                            </Link>
                          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}



                    </div>
                </div>
            </div>
            <div className="swiper-button-prev">
                <span className="fal fa-angle-left"></span>
            </div>
            <div className="swiper-button-next">
                <span className="fal fa-angle-right"></span>
            </div>
            <div className="book-btn">
                <Link to="#" className="theme-btn">
                    <span className="icon">
                        <img src={bookicon1} alt="" title="" />
                    </span>
                    <span className="txt">book a table</span>
                </Link>
            </div>
        </Swiper>
    );
}

export default Banner;
