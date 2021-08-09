import React from 'react';
import './Button.css';

const Button = ({children, onClick, type}) => (
    <button
        onClick={onClick}
        className={['btn', `btn-${type}`].join(' ')}
    >
        {children}
    </button>
);

export default Button;
