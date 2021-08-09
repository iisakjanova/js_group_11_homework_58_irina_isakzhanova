import React from 'react';

const Alert = ({type, children, dismiss}) => {
    return (
        <div
            className={['alert', `alert-${type}`].join(' ')}
        >
            {children}
            {
                dismiss
                ?
                <button
                    className="btn-close"
                    onClick={() => dismiss(type)}
                />
                :
                null
            }
        </div>
    );
};

export default Alert;
