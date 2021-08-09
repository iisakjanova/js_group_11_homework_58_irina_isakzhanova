import {useState} from 'react';

import React from 'react';
import './Main.css';

import Modal from "../../components/UI/Modal/Modal";
import Button from "../../components/UI/Button/Button";

const Main = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleContinueModal = () => {
        alert('You pressed continue!');
    };

    return (
        <div className="Main">
            <h3>Modal</h3>
            <Button
                type='info'
                onClick={handleShowModal}
            >
                launch demo modal
            </Button>
            <Modal show={showModal}
                   onClose={handleCloseModal}
                   title="Some kinda modal title"
                   buttons={[
                       {
                           type: 'primary',
                           label: 'Continue',
                           onClick: handleContinueModal,
                       },
                       {
                           type: 'danger',
                           label: 'Close',
                           onClick: handleCloseModal,
                       }
                   ]}
            >
                <p>This is modal content</p>
            </Modal>
        </div>
    );
};

export default Main;
