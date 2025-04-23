import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/resource/sidebar-logo.png'
import logonew from '../../assets/images/logo_header.png'
import imgone from '../../assets/images/resource/menu-image-1.jpg'
import imgtwo from '../../assets/images/resource/menu-image-2.jpg'
import Imgthree from '../../assets/images/resource/menu-image-3.jpg'
import Imgfour from '../../assets/images/resource/menu-image-4.jpg'

function Main() {

  const [active, setActive] = useState();
  const [show, setShow] = useState();
  const [menu, setMenu] = useState();
  const [page, setPage] = useState();
  const [drop, setDrop] = useState();
  const [lastscrool, setlastscrool] = useState(0);

  const [scrolled, setScrolled] = useState(false);
  const [Nav, setNav] = useState(true);

  const handleScroll = () => {

    const offset = window.scrollY;
    setlastscrool(offset);

    if (offset > 1000 && offset < lastscrool) {
      setNav(true);
      setScrolled(true);
    }

    else if (offset > 1000) {
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
        <div className="menu-backdrop" style={{ opacity: "1", visibility: "visible" }}></div>
      }
      <section className={`hidden-bar ${active && "visible-sidebar"}`} >
        <div className="inner-box">
          <div className="cross-icon hidden-bar-closer" onClick={() => setActive(false)} ><span className="far fa-close" onClick={() => setActive(false)} > </span></div>
          <div className="main-logo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0px 0' }}>
  <Link to="/" title="OZLER DONER - OUR EYES ON YOUR ESSENCE">
    <img
      src={logo}
      alt="Ozler Doner"
      title="OZLER DONER - OUR EYES ON YOUR ESSENCE"
      style={{
        width: '400px',
        height: '200px',
        objectFit: 'contain'
      }}
    />
  </Link>
</div>

          <div className="side-menu">
            <ul className="navigation  clearfix">
              <li className="current dropdown"><Link to="/" onClick={() => setShow(show === true ? false : true)}>Home<button type="button" className="btn-expander"></button></Link>   {/* <i className="far fa-angle-down"></i> */}
                {/* <ul style={{ display: show ? "block" : "none" }}>
                  <li><Link to="/" onClick={() => setActive(false)}>Home 1 Left Header</Link></li>
                  <li><Link to="/hometwo" onClick={() => setActive(false)}>Home 1 Center Header</Link></li>
                  <li><Link to="/homethree" onClick={() => setActive(false)}>Home 3 Video Hero</Link></li>
                </ul> */}
              </li>
              <li className="dropdown"><Link to="/menu" onClick={() => setMenu(menu === true ? false : true)} >Menus<button type="button" className="btn-expander"></button></Link>  {/* <i className="far fa-angle-down"></i> */}

                {/* <ul style={{ display: menu ? "block" : "none" }}>
                  <li><Link to="/menuone" onClick={() => setActive(false)}>Menu List 1</Link></li>
                  <li><Link to="/menutwo" onClick={() => setActive(false)}>Menu List 2</Link></li>
                  <li><Link to="/menuthree" onClick={() => setActive(false)}>Menu List 3</Link></li>
                  <li><Link to="/menufour" onClick={() => setActive(false)}>Menu List 4</Link></li>
                </ul> */}
              </li>
              <li><Link to="/about" onClick={() => setActive(false)}>About Us</Link></li>
              <li><Link to="/ourchefs" onClick={() => setActive(false)}>Our chefs</Link></li>
              <li className="dropdown"><Link to="/" onClick={() => setPage(page === true ? false : true)}>Pages<button type="button" className="btn-expander"></button></Link>   {/* <i className="far fa-angle-down"></i> */}

                {/* <ul style={{ display: page ? "block" : "none" }}>
                  <li><Link to="/menuone" onClick={() => setActive(false)}>Dropdown Menu 1</Link></li>
                  <li><Link to="/menutwo" onClick={() => setActive(false)}>Dropdown Menu 2</Link></li>
                  <li><Link to="/menuthree" onClick={() => setActive(false)}>Dropdown Menu 3</Link></li>
                  <li className="dropdown">
                    <Link to="#" onClick={() => setDrop(drop === true ? false : true)}>Dropdown Menu 4<button type="button" className="btn-expander">
                      <i className="far fa-angle-down"></i>
                    </button>
                    </Link>
                    <ul style={{ display: drop ? "block" : "none" }}>
                      <li><Link to="#" onClick={() => setActive(false)}>Dropdown Menu level 2</Link></li>
                      <li><Link to="#" onClick={() => setActive(false)}>Dropdown Menu level 2</Link></li>
                      <li><Link to="#" onClick={() => setActive(false)}>Dropdown Menu Level 3</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#" onClick={() => setActive(false)}> Dropdown Lorem 5 </Link></li>
                </ul> */}
              </li>
              <li><Link to="/contact" onClick={() => setActive(false)}> Contact </Link></li>
            </ul>
          </div>
          <div className="booking-info">
            <div className="bk-title">Booking request</div>
            <div className="bk-no">
                          <Link to="tel:+97477111504">+974 7711 1504</Link>
                        </div>
          </div>
          <div className="separator"><span></span></div>
          <h2>Visit Us</h2>
          <ul className="info">
            <li>Al Matar St, Doha Delights, <br /> Near Souq Waqif, Doha 12345, Qatar </li>
            <li>Open: 9.30 am - 2.30pm</li>
            <li><Link to="mailto:ozlerdoner.qa@gmail.com">ozlerdoner.qa@gmail.com</Link></li>
          </ul>
          
          

        </div>
      </section>
      {Nav &&
  <header className={`main-header ${scrolled && "fixed-header"} header-down`} style={{ backgroundColor: '#48101a' }}>
    <div className="header-top" style={{ backgroundColor: '#48101a', color: '#ffffff' }}>
      <div className="auto-container">
        <div className="inner clearfix">
          <div className="top-left clearfix">
            <ul className="top-info clearfix" style={{ color: '#ffffff', listStyle: 'none', margin: 0, padding: 0 }}>
              <li>
                <i className="icon far fa-map-marker-alt" style={{ color: '#ffffff', marginRight: '6px' }}></i>
                Al Matar St, Doha Delights, Near Souq Waqif, Doha 12345, Qatar
              </li>
              <li style={{ marginLeft: '20px' }}>
                <i className="icon far fa-clock" style={{ color: '#ffffff', marginRight: '6px' }}></i>
                Daily : 8.00 am to 10.00 pm
              </li>
            </ul>
          </div>
          <div className="top-right clearfix">
            <ul className="top-info clearfix" style={{ color: '#ffffff', listStyle: 'none', margin: 0, padding: 0 }}>
              <li>
                <Link to="tel:+97477111504" style={{ color: '#ffffff', fontWeight: '600' }}>
                  <i className="icon far fa-phone" style={{ color: '#ffffff', marginRight: '6px' }}></i> +974 7711 1504
                </Link>
              </li>
              <li style={{ marginLeft: '20px' }}>
                <Link to="mailto:ozlerdoner.qa@gmail.com" style={{ color: '#ffffff', fontWeight: '600' }}>
                  <i className="icon far fa-envelope" style={{ color: '#ffffff', marginRight: '6px' }}></i> ozlerdoner.qa@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="header-upper header-fixed" style={{ backgroundColor: '#48101a' }}>
      <div className="auto-container">
        <div className="main-box d-flex justify-content-between align-items-center flex-wrap">

          <div className="links-box clearfix">
            <div className="nav-toggler">
              <button className="hidden-bar-opener">
                <span className="hamburger" onClick={() => setActive(true)}>
                  <span className="top-bun" style={{ backgroundColor: '#ffffff' }}></span>
                  <span className="meat" style={{ backgroundColor: '#ffffff' }}></span>
                  <span className="bottom-bun" style={{ backgroundColor: '#ffffff' }}></span>
                </span>
              </button>
            </div>
          </div>

          <div className="logo-box">
            <div className="logo">
              <Link to="/" title="OZLER DONER - OUR EYES ON YOUR ESSENCE">
                <img src={logonew} alt="Delici-logo" title="OZLER DONER" style={{ maxHeight: '60px' }} />
              </Link>
            </div>
          </div>

          <div className="nav-box clearfix">
            <div className="nav-outer clearfix">
              <nav className="main-menu">
                <ul className="navigation clearfix" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { label: "Home", to: "/" },
                    { label: "Menus", to: "/menu" },
                    { label: "About Us", to: "/about" },
                    { label: "Our chefs", to: "/ourchefs" },
                    { label: "Pages", to: "/" },
                    { label: "Blog", to: "#" },
                    { label: "Contact", to: "/contact" },
                  ].map(({ label, to }, i) => (
                    <li key={i}>
                      <Link to={to} style={{ color: '#ffffff', fontWeight: '600' }}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="link link-btn">
            <Link to="/reservation" className="theme-btn btn-style-one clearfix" style={{
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
                <span className="text-one">find a table</span>
                <span className="text-two">find a table</span>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  </header>
}

    </>
  )
}

export default Main