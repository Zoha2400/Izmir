import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Home.scss'
import ShowFreeInput from './ContentComponents/ShowFreeInput';

function ShowFree({classInfo, dataFree}) {

  const [locked, setLocked] = useState(false);
  const [imageFull, setImageFull] = useState(false);
  const [formed, setFormed] = useState(true);

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
  
  const cost = dataFree?.cost * dataFree?.area;

  if(dataFree?.status === 'discuss'){
    setLocked(false);
  }

  const [month, setMonth] = useState(12);

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const [buy, setBuy] = useState(false);
  const [buyPage, setBuyPage] = useState(false);

  const [userData, setUserData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    passportSeries: '',
    passportDate: '',
    address: '',
    city: '',
    inn: '',
    phoneNumber: '',
    rentalHistory: '',
  });

  const [formErrors, setFormErrors] = useState({
    lastName: false,
    firstName: false,
    middleName: false,
    passportSeries: false,
    passportDate: false,
    address: false,
    city: false,
    phoneNumber: false,
    rentalHistory: false,
    inn: false,
  });


  
  const [shouldRedo, setShouldRedo] = useState(false);

  const checkRedo = () => {
    if(Object.values(formErrors).some((value) => value === false)){
      setShouldRedo(true)
    }
    setShouldRedo(false)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    // Сбрасываем ошибку для текущего поля
    setFormErrors({
      ...formErrors,
      [name]: false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Проверяем, что все поля заполнены
    const allFieldsFilled = Object.values(userData).every((value) => value.trim() !== '');

    if (!allFieldsFilled) {
      // Если не все поля заполнены, устанавливаем ошибку для соответствующих полей
      const updatedErrors = {};
      for (const field in userData) {
        if (userData[field].trim() === '') {
          updatedErrors[field] = true;
        }
      }
      setFormErrors(updatedErrors);
      return;
    }

    // Если все поля заполнены, отправляем данные
    const payload = { ...userData };
    console.log('Payload:', payload);
  };


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

        <div className={imageFull || buyPage ? 'nonExist infoDiv': 'infoDiv'}>
        <span>СТОИМОСТЬ</span>
          <p className='cost'><span>{cost}</span> USZ</p>
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
            
            {formed && selectedDiscount == 100 ? (
              <div className='listOfCost'>
                <p className='cost'>Общая сумма <br/> <span>{cost- (cost/100 * selectedDiscount/10)}</span>UZS</p>
              </div>
            ) : (
              <div className='listOfCost'>
                <p className='cost'>Сумма оплаты <span className='spanInBl'>{cost/100 * selectedDiscount} - <span>UZS</span></span></p>
                <p className='cost'>Общая сумма <span className='spanInBl'>{cost- (cost/100 * selectedDiscount/10)} - <span>UZS</span></span></p>
                <p className='cost'>Остаток <span className='spanInBl'>{cost- (cost/100 * selectedDiscount/10)-cost/100 * selectedDiscount} - <span>UZS</span></span></p>
                <p className='cost sellectPercent'><span>{((cost- (cost/100 * selectedDiscount/10)-cost/100 * selectedDiscount)/month).toFixed(0)} - <span>USZ</span></span>             
                  <select id="monthSelect" value={month} onChange={handleMonthChange}>
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index} value={String(index + 1)}>
                        {index + 1} мес
                      </option>
                    ))}
                  </select>
                  </p>
              </div>
            )}
         </div>


         <div className={buyPage ? 'buyPage' : 'nonExist'}>
              <ShowFreeInput checkRedo={checkRedo} imageFull={imageFull} shouldRedo={shouldRedo} formErrors={formErrors} userData={userData} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
         </div>

        </div>
        <div className={imageFull ? 'nonExist' : 'btnFormBook'}>
          <button className={buy ? 'nonExist' : 'FormBtn'} onClick={() => {setBuy(true)}}>ОФОРМИТЬ</button>
          <button className={buy ? 'nonExist' : 'BookBtn'}>БРОНИРОВАТЬ</button>
          <button disabled={shouldRedo} className={buy ? 'FormBtn' : 'nonExist'} onClick={() => {setBuyPage(true)}}>КУПИТЬ</button>           
        </div>
        <div className={imageFull ? 'ClosedBtnFormer' : 'nonExist'}>
            <button onClick={() => {setImageFull(!imageFull)}} className='СloseBtn'>ЗАКРЫТЬ</button>
        </div>
      </div>
  )
}

export default ShowFree