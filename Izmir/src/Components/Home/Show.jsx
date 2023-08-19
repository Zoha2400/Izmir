import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Home.scss'

function Show({classInfo, dataFree}) {

  const [locked, setLocked] = useState(true);
  const [imageFull, setImageFull] = useState(false);

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

  const discounts = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  

  return (
  
          <>
  
        {imageFull ? (
          <>
            <div className={`ShowWindowFlat-wrapper showBigWrap ${classInfo}`}>
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
              <img src={dataFree?.img} className='showBig'/>
              </div>

              <div className='ClosedBtnFormer'>
                <button onClick={() => {setImageFull(!imageFull)}} className='СloseBtn'>ЗАКРЫТЬ</button>
              </div>
            </div> 
        
          </>) : (
            <>
            <div className={`ShowWindowFlat-wrapper ${classInfo}`}>
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
              <img src={dataFree?.img} onClick={() => {setImageFull(!imageFull)}}/>

              <span>СТОИМОСТЬ</span>
                <p className='cost'><span>{dataFree?.cost}</span> USZ</p>
                <span>8 000 000 UZS за м2</span>
                <hr/>
                <span>Скидки при оплате</span>

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

                <p className='cost'><span>{dataFree?.cost - (dataFree?.cost/100 * selectedDiscount/10)}</span> USZ</p>
                {/* <span>Скидка {selectedDiscount/10}%</span> */}
              </div>
              <div className='btnFormBook'>
                <button className='FormBtn'>ОФОРМИТЬ</button>
                <button className='BookBtn'>БРОНИРОВАТЬ</button>
              </div>
            </div>
        
            </>
        )}
    </>
  )
}

export default Show