import React from 'react'
import { Link } from 'react-router-dom'
import bg3 from '../../assets/images/background/bg-3.png'
import badge1 from '../../assets/images/resource/badge-1.png'
import img1 from '../../assets/images/resource/image-1.jpg'
import img2 from '../../assets/images/resource/image-2.jpg'

function Story() {
    return (
        <>
            <section className="story-section">
                <div className="left-bg">
                    <img src={bg3} alt="" title="" />
                </div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="text-col col-xl-5 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="title-box centered">
                                    <div className="subtitle">
                                        <span> Our story </span>
                                    </div>
                                    <div className="pattern-image">
                                        <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                    </div>
                                    <h2>Every Flavor Tells a Story</h2>
                    <div className="text">Ozler Döner brings you bold and authentic tastes of Turkish cuisine crafted with passion and care. Each bite tells the story of timeless tradition, seasoned recipes, and rich culture passed down through generations. Our dishes reflect not only flavors, but also the warmth of Turkish hospitality and love for food.</div>
                                </div>
                                <div className="booking-info">
                                    <div className="bk-title">Book Through Call</div>
                                    <div className="bk-no">
                                                 <Link to="tel:+97477111504">+974 7711 1504</Link>
                                               </div>
                                    <div className="link-box">
                                        <Link to="/about" className="theme-btn btn-style-two clearfix">
                                            <span className="btn-wrap">
                                                <span className="text-one">Read More</span>
                                                <span className="text-two">Read More</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="image-col col-xl-7 col-lg-7 col-md-12 col-sm-12">
                            <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="round-stamp"><img src={badge1} alt="" /></div>
                                <div className="images parallax-scene-1">
                                    <div className="image" data-depth="0.15"><img src={img1} alt="" /></div>
                                    <div className="image" data-depth="0.30"><img src={img2} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Story