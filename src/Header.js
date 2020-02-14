import React from 'react';
import { Link } from 'react-router-dom';





function Header(){

  let imageArray = ['(99, 99, 88, .25)', '(99, 88, 99, .25)', '(88, 99, 99, .25)', '(99, 99, 99, .25)'];

  let imageNumber = (Math.round(Math.random()*3));

  return (

    <div className="">
      <h1 className="mainH1">An Agency</h1>
      <h3 className="mainH3"><Link to="/">Home</Link> | <Link to="/AboutUs">About Us</Link></h3>
      <div className="mainHeader">

        <style jsx>{`
      .mainHeader {
        z-index: 0;
        background-color: rgba${imageArray[imageNumber]};
        // opacity: 1;
        // transition: opacity 1000ms;
        // border-radius: 25px;
        border-bottom-left-radius:  25%;
        border-bottom-right-radius: 25%;
        height: 15vh;
        background-size: cover;
        margin-top: -7px;
        animation: header_fade_effect 60s infinite;
      }

      @keyframes header_fade_effect {
        0%   { opacity: 0; }
        5%   { opacity: 1; }
        100% { opacity: 1; }
      }

      .mainH1 {
        z-index: 1;
        color: blue;
        position: absolute;
        top: 0px;
        left: 5%;
        width: 90%;
        background: rgba(255, 255, 255, .5);
        padding: 15px;
        border-radius: 25px;
      }
      .mainH3 {
        z-index: 1;
        color: blue;
        position: absolute;
        top: 80px;
        left: 5%;
        width: 45%;
        background: rgba(255, 255, 255, .5);
        padding: 15px;
        border-radius: 25px;
      }

      `}</style>
      </div>
    </div>

  );
}



export default Header;
