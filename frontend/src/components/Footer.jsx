import React from 'react';
import './styles/Footer.css'; // Импортируем файл со стилями

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>©{new Date().getFullYear()} За Тридевять Земель</p>
        <p>Адрес: ул. Фантазийная, 13</p>
        <p>Телефон: +7 (XXX) XXX-XX-XX</p>
        <p>Email: info@example.com</p>
      </div>
    </footer>
  );
}

export default Footer;
