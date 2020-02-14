import React from 'react';
import './App.css';



function Home(){
  return (
    <div className='HomeClass'>

      <h1 className='HomeHeader'>Home</h1>
      <h3 className='HomeText'>Lorem ipsum dolor amet mumblecore aesthetic occupy etsy, 8-bit +1 pitchfork celiac gluten-free XOXO. Pitchfork bicycle rights retro, knausgaard vice neutra hella ugh etsy truffaut viral. Letterpress chicharrones offal, next level woke sustainable mlkshk. Snackwave copper mug leggings, sustainable food truck semiotics polaroid schlitz irony austin tilde shaman next level. Distillery etsy thundercats banh mi tattooed unicorn hell of put a bird on it lumbersexual meggings 90's kinfolk. Crucifix wayfarers hot chicken, umami waistcoat art party activated charcoal squid cred tofu gluten-free pabst gastropub. Marfa hella lyft cred quinoa leggings synth.</h3>
      <style jsx>{`
      .HomeClass {
        background-color: rgba(166, 250, 118, .1);
        border-radius: 25px;
        overflow: auto;
        animation: div_animation_effect 2s 1;
      }

      @keyframes div_animation_effect {
              0%   { opacity: 0;  left:2000px}
              40%   { opacity: 1; left:1%}
              100% { opacity: 1;}
      }

      .HomeHeader{
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid lightgrey;
        background: rgba(255, 255, 255, .5);
        padding: 15px;
        border-radius: 25px;
      }

      .HomeText{
        text-align: center;
        color: #ab3333;
        padding: 20px;
        color: white;

      }

      `}</style>





    </div>
  );
}




export default Home;
