import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';

function ShowBooked({classInfo, dataFree}) {
  const [locked, setLocked] = useState(false);
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

  const selectDiscount = (discount) => {
    setSelectedDiscount(discount);
    setIsOpen(false);
  };

  if(dataFree?.status === 'discuss'){
    setLocked(false);
  }

  const discounts = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


  return (
      <div className={`ShowWindowFlat-wrapper ${classInfo} ${imageFull ? 'showBigWrap' : ''}`}>
        <div className='ShowWindowFlat'>
        <section className='upSect'>
          <h1>{dataFree?.area}A</h1>
          <button onClick={toggleLock} className={locked ? 'locked' : 'unlocked'}>
            {locked ?  <FontAwesomeIcon icon={faLock}/> : <FontAwesomeIcon icon={faUnlock}/>}
          </button>
        </section>
        <p className='shortInfo'>
          {dataFree?.room}х ком. {dataFree?.floor}-ЭТАЖ | {dataFree?.block}-БЛОК
        </p>
        <img src={dataFree?.img} className={imageFull ? 'showBig' : ''} onClick={() => {setImageFull(!imageFull)}}/>

        <div className={imageFull ? 'nonExist': ''}>
        <span>СТОИМОСТЬ</span>
          <p className='cost'><span>{dataFree?.cost * dataFree?.area}</span> USZ</p>
          <span>8 000 000 UZS за м2</span>
          <hr/>
          <span>Продавец</span>
          <div className="dropdown-container">
            <button onClick={toggleDropdown} className="discount-button">
              {`${selectedDiscount}%`}
              <FontAwesomeIcon icon={faChevronDown}/>
            </button>
            {isOpen && <div className='coloring'></div>}
            {isOpen && (
              <div className="dropdown">
                {discounts.map((discount) => (
                  <div
                    key={discount}
                    className="discount-option"
                    onClick={() => selectDiscount(discount)}
                  >
                    {discount}%
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>



        </div>
        <div className={imageFull ? 'nonExist' : 'btnFormBook'}>
          <button className='FormBtn' onClick={() => {setFormed(true)}}>ОФОРМИТЬ</button>
        </div>
        <div className={imageFull ? 'ClosedBtnFormer' : 'nonExist'}>
            <button onClick={() => {setImageFull(!imageFull)}} className='СloseBtn'>ЗАКРЫТЬ</button>
        </div>
      </div>
  )
}

export default ShowBooked