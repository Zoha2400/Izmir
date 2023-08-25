import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';

function ShowDiscuss({classInfo, dataFree, setShowDiscuss}) {
  const [locked, setLocked] = useState(true);
  const [imageFull, setImageFull] = useState(false);
  const [formed, setFormed] = useState(false);

  const toggleLock = () => {
    setLocked(!locked);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDiscount, setSelectedDiscount] = useState(100);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const cost = +(dataFree?.price) * parseFloat(+dataFree?.area.replace(/[^\d.]/g, '')).toFixed(0);

  const selectDiscount = (discount) => {
    setSelectedDiscount(discount);
    setIsOpen(false);
  };

  return (
      <div className={`ShowWindowFlat-wrapper ${classInfo} ${imageFull ? 'showBigWrap' : ''}`}>
        <div className='ShowWindowFlat'>
        <section className='upSect'>
          <h1>{dataFree?.area}</h1>
          <button onClick={toggleLock} className={locked ? 'locked' : 'unlocked'}>
            {locked ?  <FontAwesomeIcon icon={faLock}/> : <FontAwesomeIcon icon={faUnlock}/>}
          </button>
        </section>
        <p className='shortInfo'>
          {dataFree?.room}х ком. {dataFree?.floor}-ЭТАЖ | {dataFree?.block}-БЛОК
        </p>
        <img src={'http://89.38.131.46:1808/' + dataFree?.img} className={imageFull ? 'showBig' : ''} onClick={() => {setImageFull(!imageFull)}}/>

        <div className={imageFull ? 'nonExist': ''}>
        <span>СТОИМОСТЬ</span>
          <p className='cost'><span>{cost}</span> USZ</p>
          <span>8 000 000 UZS за м2</span>
          <hr/>
          <span>Продавец</span>
          <p className='cost'><span>{dataFree?.name}</span></p>
          <span>{dataFree?.time} назад</span>

        </div>

        </div>
        <div className={imageFull ? 'nonExist' : 'btnFormBook'}>
          <button className='CloseBtn' onClick={() => {setFormed(true); setShowDiscuss(false)}}>ЗАКРЫТЬ ОКНО</button>
        </div>
        <div className={imageFull ? 'ClosedBtnFormer' : 'nonExist'}>
            <button onClick={() => {setImageFull(!imageFull)}} className='СloseBtn'>ЗАКРЫТЬ</button>
        </div>
      </div>
  )
}

export default ShowDiscuss