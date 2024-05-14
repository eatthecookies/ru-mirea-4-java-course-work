import React from 'react';
import './styles/Button.css'; // Импортируем файл со стилями

function Button(props) {
    const { onChange, children } = props;
    return (
        <button onClick={onChange} className="button">
            {children}
        </button>
  );
}

export default Button;
