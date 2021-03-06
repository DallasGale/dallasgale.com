import React from 'react'
import './hero.scss'
// import Video from '../../video/nyc.mp4'

// import PropTypes from 'prop-types';

const Hero = ({children}) => {
  return (
    <section className="hero">
      
      <div className="content  hero__intro">
        <h1 className="hero__intro--tagline">
          { children }
        </h1>
      </div>


      <div className="sun"></div>
      <div className="planets planets__1">
        <div className="planets planets__2"></div>
      </div>
      <div className="stars__container">
        <div className="clouds clouds-left">
          <div className="clouds__cloud clouds__cloud--1"></div>
          <div className="clouds__cloud clouds__cloud--4"></div>
          <div className="clouds__cloud clouds__cloud--2"></div>
          <div className="clouds__cloud clouds__cloud--3"></div>
        </div>
        <div className="clouds clouds-right">
          <div className="clouds__cloud clouds__cloud--5"></div>
          <div className="clouds__cloud clouds__cloud--6"></div>
          <div className="clouds__cloud clouds__cloud--7"></div>
          <div className="clouds__cloud clouds__cloud--8"></div>
        </div>

        <div className="stars__star stars__star--1"></div>
        <div className="stars__star stars__star--2"></div>
        <div className="stars__star stars__star--3"></div>
        <div className="stars__star stars__star--4"></div>
        <div className="stars__star stars__star--5"></div>
        <div className="stars__star stars__star--6"></div>
        <div className="stars__star stars__star--7"></div>
        <div className="stars__star stars__star--8"></div>
        <div className="stars__star stars__star--9"></div>
        <div className="stars__star stars__star--10"></div>
        <div className="stars__star stars__star--11"></div>
        <div className="stars__star stars__star--12"></div>
        <div className="stars__star stars__star--13"></div>
        <div className="stars__star stars__star--14"></div>
        <div className="stars__star stars__star--15"></div>
        <div className="stars__star stars__star--16"></div>
        <div className="stars__star stars__star--17"></div>
        <div className="stars__star stars__star--18"></div>
        <div className="stars__star stars__star--19"></div>
        <div className="stars__star stars__star--20"></div>
        <div className="stars__star stars__star--21"></div>
        <div className="stars__star stars__star--22"></div>
        <div className="stars__star stars__star--23"></div>
        <div className="stars__star stars__star--24"></div>
      </div>


      {/* <div className="hero__photo--right"></div> */}
    </section>
  )
}

// Hero.propTypes = {

// };

export default Hero
