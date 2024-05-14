import React from 'react';
import './styles/Header.css'
// Стили для хедера
import {NavLink} from "react-router-dom"
import RequireAuthButton from '../hoc/RequireAuthButton';
function Header() {
    return (
        <header className='header'>
          {/* Логотип */}
          <div className="logo">За Тридевять Земель</div>
          
          {/* Навигационное меню */}
          
            <nav className="navbar">
                <NavLink to="/" className="item"> Главная</NavLink>
                <NavLink to="/catalog" className="item">Каталог туров</NavLink>
                <NavLink to="/about" className="item">О нас</NavLink>
                <NavLink to="/contact" className="item">Контакты</NavLink>
            </nav>
            <RequireAuthButton>
              <NavLink to="/login" className="item"> Войти</NavLink>
            </RequireAuthButton>
            
      </header>
    );
  }
  
  export default Header;