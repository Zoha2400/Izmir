import React from 'react'
import './ContentComponents.scss'

function ShowFreeInput({checkRedo, imageFull, shouldRedo, formErrors ,userData, handleInputChange, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit} className={imageFull ? 'nonExist' : 'formSend'}>
    <div>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={userData.lastName}
        onChange={handleInputChange}
        className={formErrors.lastName ? 'error' : ''}
        placeholder='Фамилия'
      />
    </div>
    <div>
      <input
        placeholder='Исм'
        type="text"
        id="firstName"
        name="firstName"
        value={userData.firstName}
        onChange={handleInputChange}
        className={formErrors.firstName ? 'error' : ''}
      />
    </div>
    <div>
      <input
        type="text"
        id="middleName"
        name="middleName"
        value={userData.middleName}
        onChange={handleInputChange}
        className={formErrors.middleName ? 'error' : ''}
        placeholder='Отасининг исм'
      />
    </div>
    <div>
      <input
        type="text"
        id="passportSeries"
        name="passportSeries"
        value={userData.passportSeries}
        onChange={handleInputChange}
        className={formErrors.passportSeries ? 'error' : ''}
        placeholder='AA 1234567'
      />
    </div>
    <div className='split'>
        <div>
        <input
            type="text"
            id="city"
            name="city"
            value={userData.city}
            onChange={handleInputChange}
            className={formErrors.city ? 'error' : ''}
            placeholder='Тошкент ш'
        />
        </div>
        <div>
        <input
            type="date"
            id="passportDate"
            name="passportDate"
            value={userData.passportDate}
            onChange={handleInputChange}
            className={formErrors.passportDate ? 'error' : ''}
        />
        </div>
    </div>
    <div>
      <input
        type="text"
        id="address"
        name="address"
        value={userData.address}
        onChange={handleInputChange}
        className={formErrors.address ? 'error' : ''}
        placeholder='Яшащ манзили'
      />
    </div>
    <div>
        <input
          type="text"
          id="inn"
          name="inn"
          value={userData.inn}
          onChange={handleInputChange}
          className={formErrors.inn ? 'error' : ''}
          placeholder='СТИР'
        />
      </div>
    <div>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        value={userData.phoneNumber}
        onChange={handleInputChange}
        className={formErrors.phoneNumber ? 'error' : ''}
        placeholder='99 00 00 0000'
      />
    </div>
    <div>
      <input
        id="rentalHistory"
        name="rentalHistory"
        value={userData.rentalHistory}
        onChange={handleInputChange}
        className={formErrors.rentalHistory ? 'error' : ''}
        placeholder='Топшириш Муддати'
      />
    </div>
    <button onClick={checkRedo} className='submit' type="submit">Собрать данные</button>
    {shouldRedo ?<p className='fillAll'>Хаммасини толдиринг!</p> : ''}
  </form>
  )
}

export default ShowFreeInput