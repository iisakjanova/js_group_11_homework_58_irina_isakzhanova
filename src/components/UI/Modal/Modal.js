import {nanoid} from "nanoid";

import React from 'react';
import './Modal.css';

import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = props => {
    return (
        <>
            <Backdrop
                show={props.show}
                onClick={props.onClose}
            />
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}
            >
                <div className="ModalHead">
                    <h4>{props.title}</h4>
                    <button
                        className="btn-close"
                        onClick={props.onClose}
                    />
                </div>
                <div className="ModalBody">
                    {props.children}
                </div>
                <div className="ModalFooter">
                    {props.buttons.map(btn => (
                        <Button
                            key={nanoid()}
                            type={btn.type}
                            onClick={btn.onClick}
                        >
                            {btn.label}
                        </Button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Modal;
