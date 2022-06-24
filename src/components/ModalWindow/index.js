import React from 'react';
import Modal from 'react-modal';
import './index.css';


export default function ModalDialog({ children, onSubmit, text }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    const submitModal = () => {
        onSubmit();
        setIsOpen(false);
    };
    return (
        <div>
            <div onClick={openModal}>{children}</div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        position: 'relative',
                        background: '#292a2f',
                        width: 300,
                        height: 200,
                        overflow: 'auto',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '20px',
                        boxShadow: '4px 4px 4px #111111',
                        border: '0px',
                        inset:'0px'
                    },
                    overlay: {
                        display: 'flex',
                        backgroundColor: 'rgba(0, 0, 0, 0.40)',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 999,
                    },
                }}
                contentLabel="Example Modal"
            >
                <h2 className={"textColorYellow"}>Attention</h2>
                <div className={"textColorWhite"}>Are you sure you want to delete the note {text}?</div>
                <div className={"buttonStyle"}>
                    <button className="grayButton"  onClick={closeModal}>
                        ABORT
                    </button>
                    <button className="redButton" onClick={submitModal}>
                        YES
                    </button>
                </div>
            </Modal>
        </div>
    );
}
