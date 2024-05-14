import { useState } from 'react';
import '../components/styles/LoginForm.css';
import api from '../api/axiosConfig';
import { useNavigate, NavLink } from 'react-router-dom';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/register', 
      {
        username: username,
        email: email,
        password: password,
        role: "USER" 
      });
      console.log('Успешная регистрация!', response);
      // После успешной регистрации, перенаправляем пользователя на страницу аккаунта
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log(token)
      navigate('/account');
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Регистрация</h2>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Зарегистрироваться</button>
      </form>
      {/* Добавляем ссылку на форму авторизации */}
      <NavLink to="/login" className="registration-link">Уже зарегистрированы? Войти</NavLink>
    </div>
  );
};

export default RegistrationForm;
