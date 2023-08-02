import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

function Transaction({ transactionTitle, amount, transactionType, id }) {
    const onDelete = () => {
        console.log(id);
    }

    return (
        <div className="transaction">
            <button className="delete-button" onClick={onDelete}>
                <FontAwesomeIcon className='fa-down' icon={faTrash} />
            </button>

            <div className="transaction-text">
                <h1 className="transaction-name">{transactionTitle}</h1>
                <h2 className={`transaction-amount ${transactionType ==='income' ? 'gain' : 'loss'}`}>₹{amount}</h2>
            </div>

            <button className="edit-button">
                <FontAwesomeIcon className='fa-down' icon={faPencil} />
            </button>
        </div>
    );
}

export default Transaction;
