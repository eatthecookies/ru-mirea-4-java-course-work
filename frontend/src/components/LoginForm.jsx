import { useState } from 'react';
import '../components/styles/LoginForm.css';
import api from '../api/axiosConfig'
import { useNavigate, NavLink } from 'react-router-dom'; // Импортируем NavLink

const LoginForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const navigateFunc = () => navigate('/account');
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', {
        username: username,
        password: password
      });
      console.log('Успешный вход!', response);
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigateFunc();
    } catch (error) {
    }
  };

  return (
    <div className="form-container">
      <h2>Авторизация</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
      {/* Добавляем ссылку на форму регистрации */}
      <NavLink to="/registration" className="registration-link">Зарегистрироваться</NavLink>
    </div>
  );
};

export default LoginForm;
