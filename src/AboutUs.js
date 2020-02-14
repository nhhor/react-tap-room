import React from 'react';
import './App.css';

import Gary from './gary.jpg';
import Muggy from './muggy.jpg';
import Uncanny from './uncanny.jpg';


function AboutUs(){



  function mouseIn0() {
    let idOfThing = document.getElementById('0');
    idOfThing.style.color = 'red';
    idOfThing.classList.add('hoverClass');

    let test = document.querySelector('.bioPic');
    test.style.backgroundImage = `url(${Gary})`;
  }

  function mouseOut0() {
    let idOfThing = document.getElementById('0');
    idOfThing.classList.remove('hoverClass');

    idOfThing.style.color = 'blue';
  }


  function mouseIn1() {
    let idOfThing = document.getElementById('1');
    idOfThing.style.color = 'red';
    idOfThing.classList.add('hoverClass');

    let test = document.querySelector('.bioPic');
    test.style.backgroundImage = `url(${Muggy})`;
  }

  function mouseOut1() {
    let idOfThing = document.getElementById('1');
    idOfThing.style.color = 'blue';
    idOfThing.classList.remove('hoverClass');
  }

  function mouseIn2() {
    let idOfThing = document.getElementById('2');
    idOfThing.style.color = 'red';
    idOfThing.classList.add('hoverClass');

    let test = document.querySelector('.bioPic');
    test.style.backgroundImage = `url(${Uncanny})`;
  }

  function mouseOut2() {
    let idOfThing = document.getElementById('2');
    idOfThing.style.color = 'blue';
    idOfThing.classList.remove('hoverClass');
  }




  return (

    <div className='aboutClass'>
      <h1 className='aboutHeader'>About Us</h1>
      <h3 className='aboutText'>Who are we? Well, we seek out the finest natural and organic foods available, maintain the strictest quality standards in the industry, and have an unshakeable commitment to sustainable agriculture. Add to that the excitement and fun we bring to shopping for groceries, and you start to get a sense of what we’re all about. Oh yeah, we’re a mission-driven company too.</h3>
      <hr/>
      <h1 className='aboutHeader'>Our Team</h1>
      <div className='bioLinks'>
        <ul>
          <li className='bioLI' id='0' onMouseEnter={mouseIn0} onMouseLeave={mouseOut0}><h1>Gary</h1></li>
          <li className='bioLI' id='1' onMouseEnter={mouseIn1} onMouseLeave={mouseOut1}><h1>Muggy</h1></li>
          <li className='bioLI' id='2' onMouseEnter={mouseIn2} onMouseLeave={mouseOut2}><h1>Uncanny</h1></li>



        </ul>
      </div>
      <div className='bioPic'>
      </div>

      <style jsx>{`

      .bioLinks {
        float: right;
      }

      .bioLI {
        text-align: right;
        padding-right: 200px;
        list-style: none;
        color: blue;
        text-decoration: underline;


      }

      .aboutClass {
        background-color: rgba(166, 250, 118, .1);
        border-radius: 25px;
        overflow: auto;
        animation: div_animation_effect 2s 1;
      }

      .bioPic {
        width: 50%;
        border-radius: 100%;
        overflow: hidden;
        height: 60%;
        background-position: center;
        background-size: cover;
      }

      @keyframes div_animation_effect {
        0%   { opacity: 0;  left:2000px}
        40%   { opacity: 1; left:1%}
        100% { opacity: 1;}
      }


      .hoverClass {
        background-color: rgba(166, 250, 218, .1);
        animation: div_hover_effect 1s 1;
      }

      @keyframes div_hover_effect {
        from {transform: rotateY(0deg);}
        to {transform: rotateY(270deg);}
      }

      .aboutHeader{
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid lightgrey;
        background: rgba(255, 255, 255, .5);
        padding: 15px;
        border-radius: 25px;
      }

      .aboutText{
        text-align: center;
        color: white;
        padding: 20px;

      }

      `}</style>





    </div>
  );
}




export default AboutUs;
