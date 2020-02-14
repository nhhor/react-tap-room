import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){

  let imageArray = ['(48, 38, 38, .75)', '(43, 38, 48, .75)', '(38, 48, 48, .75)', '(43, 48, 38, .75)'];
  let imageNumber = (Math.round(Math.random()*3));

  return (
    <div className="mainFooter">
      <p className="mainFooterH1">FOOTER</p>


      <style jsx>{`
          .mainFooter {
            z-index: 0;
            height: 5vh;
            background-color: rgba${imageArray[imageNumber]};
            border-top-left-radius:  25%;
            border-top-right-radius: 25%;
            position: absolute;
            bottom: 0px;
            width: 98%;
            margin: 0px;
            animation: footer_fade_effect 4s 1;
          }

          .mainFooterH1 {
            margin: 0px;
          }

          @keyframes footer_fade_effect {
            0%   { opacity: 0; width:98%;}
            25%   { width:70%;}
            50%   { width:200%;}
            75%   { width:70%;}
            100% { opacity: 1; width:98%;}
            from {transform: rotateY(0deg);}
            to {transform: rotateY(-359deg);}
          }

          `}</style>
    </div>
  );
}

export default Footer;
