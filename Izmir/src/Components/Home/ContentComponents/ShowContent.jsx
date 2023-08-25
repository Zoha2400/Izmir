import {useEffect, useState} from 'react'
import './ContentComponents.scss'
import { ReactSVG } from 'react-svg'
import SVG from 'svg.js';


function MainShowContent({ data }) {
  return (
    <div className="main-show-content-wrap">
      <div className='svgContainerS'>
      <img className='svgImgMain' src={data?.img}/>
      <ReactSVG
        src={data?.imgOut}
        className='svgOut'
        beforeInjection={(svg) => {
          // Получите все элементы <polyline>
          const polylines = svg.querySelectorAll('polygon');
        
          // Пройдитесь по каждому элементу и добавьте класс и айди
          polylines.forEach((polyline, index) => {
            const uniqueId = `svgEl-${index + 1}`;
            polyline.setAttribute('class', 'svgEl');
            polyline.setAttribute('id', uniqueId);
        
            // Добавьте обработчик события click
            polyline.addEventListener('click', () => {
              console.log(`Hello World ${uniqueId}`);
            });
          });
        }}
      />
      </div>
    </div>
  );
}
export default MainShowContent;