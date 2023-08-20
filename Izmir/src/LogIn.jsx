import {useState, useEffect} from 'react'
import './App.scss';
import izmirImg from './assets/izmir.svg'
import axios from 'axios';


function LogIn() {
    

    const [credentials, setCredentials] = useState({
        role: 'seller',
        username: '',
        password: ''
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials({
          ...credentials,
          [name]: value
        });
      };
    
      const handleSubmit = () => {
        // Отправка данных на сервер
        const data = {
          username: credentials.username,
          password: credentials.password,
          role: credentials.role,

        };


        console.log(data)
            axios.post('http://89.38.131.46:1808/login/', data, {
                withCredentials: true
              })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.error('Ошибка:', error);
            });
          }
    
    
      return (
        <div className='login-wrapper'>
            <div className='login-inside'>
                <img src={izmirImg}/>
                <label>
                    <select className='typeOfAcc' name="role" value={credentials.role} onChange={handleInputChange}>
                    <option value="seller">Продавец</option>
                    <option value="manager">Менеджер</option>
                    <option value="director">Директор</option>
                    </select>
                </label>
                <br />
                <label>
                    <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    placeholder='Логин'
                    onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    <input
                    type="password"
                    name="password"
                    placeholder='Пароль'
                    value={credentials.password}
                    onChange={handleInputChange}
                    />
                </label>
                <br />
                <button className='send' onClick={handleSubmit}>Вход</button>                
            </div>
        </div>
      );
}

export default LogIn