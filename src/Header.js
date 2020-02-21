import React from 'react';
import { Link } from 'react-router-dom';


function Header(){

  let imageArray = ['(48, 38, 38, .75)', '(43, 38, 48, .75)', '(38, 48, 48, .75)', '(43, 48, 38, .75)'];
  let imageNumber = (Math.round(Math.random()*3));

  return (
    <div className="mainHeader">
      <p className="mainHeaderH1">React Tap Room</p>
      <p className="mainHeaderH3"><Link to="/">Keg List</Link> | <Link to="/NewKeg">Add Keg</Link> | <Link to="/EditKeg">Edit Keg</Link></p>

      <style>{`
          .mainHeader {
            height: 10vh;
            z-index: 99;
            background-color: rgba${imageArray[imageNumber]};
            border-bottom-left-radius:  25%;
            border-bottom-right-radius: 25%;
            position: absolute;
            top: 0px;
            width: 98%;
            margin: 0px;
            animation: header_fade_effect 4s 1;
          }

          .mainHeaderH1, .mainHeaderH3 {
            margin: 0px;
          }

          @keyframes header_fade_effect {
            0%   { opacity: 0; width:98%;}
            25%   { width:70%;}
            50%   { width:200%;}
            75%   { width:70%;}
            100% { opacity: 1; width:98%;}
            from {transform: rotateY(0deg);}
            to {transform: rotateY(359deg);}
          }

          `}</style>
    </div>
  );
}

export default Header;
