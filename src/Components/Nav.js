
import '../Css/Nav.css'
import React, { useState, useEffect } from 'react';
import {BiFace} from 'react-icons/bi'
function Nav() {

  const [ scrollPosition, setScrollPosition ] = useState(0);

    const [show, handleshow] = useState(false)
    useEffect(
      () => {
          window.addEventListener('scroll', handleScroll, { passive: true });
          check();

          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
      },
      [ scrollPosition ]
  );
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  
  const check = () => {
      if (scrollPosition > 100) {
          handleshow(true);
      }
      else {
          handleshow(false);
      }
  };
 

  return (
    <div className={`nav ${show && "nav_black"}`}>
            <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        
        <input type="text" className="contact name" placeholder="Search" ></input>
        <div className='profile'>
        <img
          className="nav_avatar profile-logo"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="Netflix Logo"
        />
            {/* <BiFace className='profile-logo'/> */}
        </div>
        
       

    </div>
  )

  }
export default Nav