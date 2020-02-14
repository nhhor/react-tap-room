import React from 'react';
import { Link } from 'react-router-dom';





function Header(){

  let imageArray = ['(99, 99, 88, .75)', '(99, 88, 99, .75)', '(88, 99, 99, .75)', '(99, 99, 99, .75)'];

  let imageNumber = (Math.round(Math.random()*3));

  return (

    <div className="mainHeader">
      <p className="mainHeaderH1">React Tap Room</p>
      <p className="mainHeaderH3"><Link to="/">Home</Link> | <Link to="/AboutUs">About Us</Link></p>

        <style jsx>{`
      .mainHeader {
        z-index: 0;
        background-color: rgba${imageArray[imageNumber]};
        border-bottom-left-radius:  25%;
        border-bottom-right-radius: 25%;
        width: 90%;
        margin: 0px;
        animation: header_fade_effect 4s 1;
      }

.mainHeaderH1, .mainHeaderH3 {
  margin: 0px;
}


      @keyframes header_fade_effect {
        0%   { opacity: 0; width:90%;}
        25%   { width:70%;}
        50%   { width:200%;}
        75%   { width:70%;}
        100% { opacity: 1; width:90%;}
        from {transform: rotateY(0deg);}
        to {transform: rotateY(359deg);}
      }



      `}</style>
      </div>

  );
}



export default Header;
