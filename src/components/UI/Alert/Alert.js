import React from 'react';

const Alert = ({type, children, dismiss, clickDismissable}) => {
    return (
        <div
            className={['alert', `alert-${type}`].join(' ')}
            onClick={() => clickDismissable && dismiss ? dismiss(type) : null}
            style={{cursor: clickDismissable && dismiss ? 'pointer' : 'auto'}}
        >
            {children}
            {
                !clickDismissable && dismiss
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
