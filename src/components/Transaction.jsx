import React, { useContext } from 'react';
import '../styles/Transaction.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TransactionsContext } from '../context/TransactionsContext';

function Transaction({ transactionTitle, amount, transactionType, id }) {
    const { removeTransactionFromList } = useContext(TransactionsContext);

    const onDelete = () => {
        removeTransactionFromList(id);
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
