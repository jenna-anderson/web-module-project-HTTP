import React from 'react';

const DeleteModal = (props) => {

    const handleCancel = () => {
        props.cancelFunction();
    }

    const handleContinue = () => {
        props.deleteRequest();
    }

    return(
        <div className="delete-modal">
            <h1>Are you sure you want to delete?</h1>
            <button onClick={handleContinue}>Continue</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}

export default DeleteModal;