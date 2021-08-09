import React from 'react';

const Button = ({children, onClick, type}) => (
    <button
        onClick={() => {onClick(type)}}
        className={['btn', `btn-${type}`].join(' ')}
    >
        {children}
    </button>
);

export default Button;
