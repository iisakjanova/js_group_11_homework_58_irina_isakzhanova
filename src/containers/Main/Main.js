import React, {useState} from 'react';
import Modal from "../../components/UI/Modal/Modal";

const Main = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button
                className="btn btn-info"
                onClick={handleShowModal}
            >
                show modal
            </button>
            <Modal show={showModal}
                   onClose={handleCloseModal}
                   title="Some kinda modal title"
            >
                <p>This is modal content</p>
            </Modal>
        </div>
    );
};

export default Main;
