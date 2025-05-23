import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/resource/sidebar-logo.png'
import logonew from '../../assets/images/logo.png'
import imgone from '../../assets/images/resource/menu-image-1.jpg'
import imgtwo from '../../assets/images/resource/menu-image-2.jpg'
import Imgthree from '../../assets/images/resource/menu-image-3.jpg'
import Imgfour from '../../assets/images/resource/menu-image-4.jpg'
import Banner from '../Menhome/Banner'
import Offer from '../Menhome/Offer'
import Story from '../Menhome/Story'
import Specialdish from '../Menhome/Specialdish'
import Menusection from '../Menhome/Menusection'
import Whyus from '../Menhome/Whyus'
import Teem from '../Menhome/Teem'
import Reacntupdate from '../Menhome/Recntupdates'
import Special from '../Menhome/Special'
import Contact from '../Menhome/Contact'
import Videosection from '../Menhome/Videosection'

function Main() {

  const [active, setActive] = useState();
  const [show, setShow] = useState();
  const [menu, setMenu] = useState();
  const [page, setPage] = useState();
  const [drop, setDrop] = useState();

  const [scrolled, setScrolled] = useState(false);
  const [Nav, setNav] = useState(true);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1000) {
      setNav(false)
    }
    else if (offset > 200) {
      setNav(true);
      setScrolled(true);
    }
    else {
      setScrolled(false);
      setNav(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <>
      {active &&
        <div className="menu-backdrop" style={{ opacity: "1", visibility: "visible" }} onClick={() => setActive(false)}></div>}
      <section className={`hidden-bar ${active && "visible-sidebar"}`} onClick={() => setActive(false)} >
        <div className="inner-box">
          <div className="cross-icon hidden-bar-closer" onClick={() => setActive(false)} ><span className="far fa-close"> </span></div>
          <div className="logo-box"><Link to="/" title="OZLER DONER - OUR EYES ON YOUR ESSENCE"><img src={logo} alt="" title="OZLER DONER - OUR EYES ON YOUR ESSENCE" />
          </Link></div>

          <div className="side-menu">
            <ul className="navigation clearfix">
              <li className="current dropdown"><Link to="/" onClick={() => setShow(show === true ? false : true)}>Home<button type="button" className="btn-expander" ><i className="far fa-angle-down"></i></button></Link>
                {/* <ul style={{ display: show ? "block" : "none" }} >
                  <li><Link to="/hometwo">Home 1 Left Header</Link></li>
                  <li><Link to="/">Home 1 Center Header</Link></li>
                  <li><Link to="/homethree">Home 3 Video Hero</Link></li>
                </ul> */}
              </li>
              <li className="dropdown"><Link to="/menu" onClick={() => setMenu(menu === true ? false : true)} >Menus<button type="button" className="btn-expander"><i className="far fa-angle-down"></i></button></Link>
                {/* <ul style={{ display: menu ? "block" : "none" }}>
                  <li><Link to="/menuone">Menu List 1</Link></li>
                  <li><Link to="/menutwo">Menu List 2</Link></li>
                  <li><Link to="/menuthree">Menu List 3</Link></li>
                  <li><Link to="/menufour">Menu List 4</Link></li>
                </ul> */}
              </li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/ourchefs">Our chefs</Link></li>
              <li className="dropdown"><Link to="/" onClick={() => setPage(page === true ? false : true)}>Pages<button type="button" className="btn-expander"><i className="far fa-angle-down"></i></button></Link>
                {/* <ul style={{ display: page ? "block" : "none" }}>
                  <li><Link to="/menuone">Dropdown Menu 1</Link></li>
                  <li><Link to="/menutwo">Dropdown Menu 2</Link></li>
                  <li><Link to="/menuthree">Dropdown Menu 3</Link></li>
                  <li className="dropdown">
                    <Link to="/menufour" onClick={() => setDrop(drop === true ? false : true)}>Dropdown Menu 4<button type="button" className="btn-expander">
                      <i className="far fa-angle-down"></i>
                    </button>
                    </Link>
                    <ul style={{ display: drop ? "block" : "none" }}>
                      <li><Link to="#">Dropdown Menu level 2</Link></li>
                      <li><Link to="#">Dropdown Menu level 2</Link></li>
                      <li><Link to="#">Dropdown Menu Level 3</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#"> Dropdown Lorem 5 </Link></li>
                </ul> */}
              </li>
              <li><Link to="/contact"> Contact </Link></li>
            </ul>
          </div>

          <h2>Visit Us</h2>
          <ul className="info">
            <li>Al Matar St, Doha Delights, <br /> Near Souq Waqif, Doha 12345, Qatar </li>
            <li>Open: 9.30 am - 2.30pm</li>
            <li><Link to="mailto:ozlerdoner.qa@gmail.com">ozlerdoner.qa@gmail.com</Link></li>
          </ul>
          <div className="separator"><span></span></div>
          <div className="booking-info">
            <div className="bk-title">Booking request</div>
             <div className="bk-no">
                          <Link to="tel:+97477111504">+974 7711 1504</Link>
                        </div>
          </div>

        </div>
      </section>

      {Nav &&
        <header className={`main-header ${scrolled && "fixed-header"} header-down`}>
          <div className="header-top">
            <div className="auto-container">
              <div className="inner clearfix">
                <div className="top-left clearfix">
                  <ul className="top-info clearfix">
                    <li><i className="icon far fa-map-marker-alt"></i> Al Matar St, Doha Delights,
                      Near Souq Waqif, Doha 12345, Qatar</li>
                    <li><i className="icon far fa-clock"></i> Daily : 8.00 am to 10.00 pm</li>
                  </ul>
                </div>
                <div className="top-right clearfix">
                  <ul className="top-info clearfix">
                    <li><Link to="tel:+11234567890"><i className="icon far fa-phone"></i> +974 7711 1504</Link></li>
                    <li><Link to="mailto:ozlerdoner.qa@gmail.com"><i className="icon far fa-envelope"></i> ozlerdoner.qa@gmail.com</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="header-upper">
            <div className="auto-container">

              <div className="main-box clearfix">

                <div className="logo-boxtwo">
                  <div className="logo"><Link to="/hometwo" title="OZLER DONER -

“OUR EYES ON YOUR ESSENCE”"><img src={logonew} alt="" title="OZLER DONER" /></Link></div>
                </div>

                <div className="nav-boxtwo clearfix">

                  <div className="nav-outertwo clearfix">
                    <nav className="main-menu">
                      <ul className="navigation clearfix">
                        <li className="current"><Link to="/hometwo">Home</Link>
                        </li>
                        <li className="dropdown has-mega-menu"><Link to="/menu">Menus</Link>
                          {/* <ul>
                            <li>
                              <div className="mega-menu">
                                <div className="menu-inner">
                                  <div className="auto-container">
                                    <div className="row clearfix">
                                      <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                        <div className="image"><Link to="/menuone"><img src={imgone} alt="" /></Link></div>
                                        <div className="title"><Link to="/menuone">Menu list 1</Link></div>
                                      </div>
                                      <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                        <div className="image"><Link to="/menutwo"><img src={imgtwo} alt="" /></Link></div>
                                        <div className="title"><Link to="/menutwo">Menu list 2</Link></div>
                                      </div>
                                      <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                        <div className="image"><Link to="/menuthree"><img src={Imgthree} alt="" /></Link></div>
                                        <div className="title"><Link to="/menuthree">Menu list 3</Link></div>
                                      </div>
                                      <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                        <div className="image"><Link to="/menufour"><img src={Imgfour} alt="" /></Link></div>
                                        <div className="title"><Link to="/menufour">Menu list 4</Link></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul> */}
                        </li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/ourchefs">Our chefs</Link></li>
                        <li className="dropdown"><Link to="#">Pages</Link>
                          {/* <ul>
                            <li><Link to="#">Dropdown Menu 1</Link></li>
                            <li><Link to="#">Dropdown Menu 2</Link></li>
                            <li><Link to="#">Dropdown Menu 3</Link></li>
                            <li className="dropdown"><Link to="#">Dropdown Menu 4</Link>
                              <ul>
                                <li><Link to="#">Dropdown Menu level 2</Link></li>
                                <li><Link to="#">Dropdown Menu level 2</Link></li>
                                <li><Link to="#">Dropdown Menu Level 3</Link></li>
                              </ul>
                            </li>
                            <li><Link to="#">Dropdown Lorem 5</Link></li>
                          </ul> */}
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>

                  <div className="links-boxtwo clearfix">
                    <div className="link link-btn">
                      <Link to="/reservation" className="theme-btn btn-style-one clearfix">
                        <span className="btn-wrap">
                          <span className="text-one">find a table</span>
                          <span className="text-two">find a table</span>
                        </span>
                      </Link>
                    </div>
                    <div className="link info-toggler">
                      <button className="info-btn">
                        <span className="hamburger">
                          <span className="top-bun"></span>
                          <span className="meat"></span>
                          <span className="bottom-bun"></span>
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="nav-togglertwo">
                    <button className="hidden-bar-opener">
                      <span className="hamburger">
                        <span className="top-bun"></span>
                        <span className="meat"></span>
                        <span className="bottom-bun"></span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      }

      <Banner />
      <Offer />
      <Story />
      <Specialdish />
      <Menusection />
      <Special />
      <Contact />
      <Whyus />
      <Teem />
      <Videosection />
      <Reacntupdate />
    </>
  )
}

export default Main