import React from 'react';
import bg8 from '../../assets/images/background/bg-8.png';
import bg7 from '../../assets/images/background/bg-7.png';
import whyiconone from '../../assets/images/resource/why-icon-1.png';
import whyicontwo from '../../assets/images/resource/why-icon-2.png';
import whyiconthree from '../../assets/images/resource/why-icon-3.png';
import whyiconfour from '../../assets/images/resource/why-icon-4.png';

function Whyus() {
  const whyData = [
    {
      icon: whyiconone,
      title: 'Hygienic Food',
      text: 'At Ozler Döner, excellence begins with impeccable hygiene. Every ingredient is carefully selected, and every preparation follows the highest standards of cleanliness — ensuring not just a meal, but a refined dining experience you can trust.',
    },
    {
      icon: whyicontwo,
      title: 'Fresh Environment',
      text: 'Indulge in a setting where elegance meets comfort. Our thoughtfully designed interiors offer a serene and sophisticated atmosphere — the perfect backdrop for enjoying gourmet Turkish cuisine in style.',
    },
    {
      icon: whyiconthree,
      title: 'Skilled Chefs',
      text: 'Behind every exquisite dish is a team of masterful chefs. With a deep respect for tradition and an eye for perfection, they blend artistry and expertise to present flavors that are both authentic and extraordinary.',
    },
    {
      icon: whyiconfour,
      title: 'Event & Party',
      text: 'Host your special occasions in an ambiance of tasteful luxury. From intimate gatherings to grand celebrations, Ozler Döner offers bespoke event experiences, curated menus, and flawless service to make your moments unforgettable.',
    },
  ];

  return (
    <>
      <section className="why-us">
        <div className="left-bg">
          <img src={bg8} alt="" title="" />
        </div>
        <div className="right-bg">
          <img src={bg7} alt="" title="" />
        </div>
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">
              <span>why choose us</span>
            </div>
            <div className="pattern-image">
              <img
                src={require('../../assets/images/icons/separator.svg').default}
                alt="mySvgImage"
              />
            </div>

            <h2>Our Strength</h2>
          </div>
          <div className="row clearfix">
            {whyData.map((data, index) => (
              <div key={index} className="why-block col-xl-3 col-lg-6 col-md-6 col-sm-12"
              >
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay={`${index * 300}ms`}
                >
                  <div className="icon-box">
                    <img src={data.icon} alt="" />
                  </div>
                  <h4>{data.title}</h4>
                  <div className="text">{data.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Whyus;
