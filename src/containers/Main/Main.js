import {useState} from 'react';

import React from 'react';
import './Main.css';

import Modal from "../../components/UI/Modal/Modal";
import Button from "../../components/UI/Button/Button";
import Alert from "../../components/UI/Alert/Alert";

const Main = () => {
    const [showModal, setShowModal] = useState(false);

    const [showAlerts, setShowAlerts] = useState({
        primary: false,
        success: false,
        warning: false,
        danger: false,
    });

    const [showAlertNoXBtn, setShowAlertNoXBtn] = useState(false)

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleContinueModal = () => {
        alert('You pressed continue!');
    };

    const handleShowAlert = type => {
        setShowAlerts(showAlerts => (
            {
                ...showAlerts,
                [type]: true
            }
        ));
    };

    const handleDismissAlert = type => {
        setShowAlerts(showAlerts => (
            {
                ...showAlerts,
                [type]: false
            }
        ));
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
            <h3>Alert</h3>
            <h5>With X button</h5>
            {Object.keys(showAlerts).map(key => (
                <Button
                    key={`${key}-alert-btn`}
                    onClick={handleShowAlert}
                    type={key}
                >
                    show demo {key} alert
                </Button>
            ))}


            {Object.keys(showAlerts).map(key => (
                showAlerts[key]
                    ?
                    <Alert
                        key={`${key}-alert`}
                        type={key}
                        dismiss={handleDismissAlert}
                    >
                        This is a {key} type alert
                    </Alert>
                    :
                    null
                ))
            }

            <h5>Without X button</h5>
            <Button
                type="primary"
                onClick={() => setShowAlertNoXBtn(true)}
            >
                show demo primary alert
            </Button>
            {showAlertNoXBtn && (
                <Alert
                    type='primary'
                >
                    This is a primary type alert without X-btn
                </Alert>
            )}
        </div>
    );
};

export default Main;
