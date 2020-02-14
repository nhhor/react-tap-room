import React from 'react';
import './App.css';



function BioPic(){
  return (
    <div className='BioPicClass'>
      <h2 className='BioPicName'>Gary</h2>

      <div id='bioPic' className='BioPicPicture'>
      </div>

      <style jsx>{`
      .BioPicClass {
        background-color: rgba(166, 250, 118, .3);
        border-radius: 25px;
        overflow: auto;
        animation: div_animation_effect 2s 1;
        background-position: center;

      }

      .BioPicPicture {
        height: 400px;
        width: 400px;
      }

      @keyframes div_animation_effect {
              0%   { opacity: 0;  left:2000px}
              40%   { opacity: 1; left:1%}
              100% { opacity: 1;}
      }

      .BioPicHeader{
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid lightgrey;
      }



      `}</style>





    </div>
  );
}




export default BioPic;
