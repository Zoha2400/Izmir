import {useEffect, useState} from 'react'
import './ContentComponents.scss'
import { ReactSVG } from 'react-svg'

function ShowFloor({ data }) {

  return (
    <div className="main-show-content-wrap">
      <div className='svgContainerF'>
      <img className='svgImgMain' src={data?.img}/>
      <ReactSVG
        src={data?.imgOut}
        onError={(error) => console.error('Ошибка загрузки SVG:', error)}
        className='svgOut'
        beforeInjection={(svg) => {
          // Получите все элементы <polyline>
          const polylines = svg.querySelectorAll('polyline');
        
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
export default ShowFloor;