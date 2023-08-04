import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TransactionsContext = createContext();

export const TransactionsContextProvider = ({ children }) => {
    const [transactions, setTranactions] = useState([]);

    const [inputs, setInputs] = useState({
        title: '',
        amount: '',
        transactionType: '',
        id: ''
    });

    const clearInputs = () => {
        setInputs({
            title: '',
            amount: '',
            transactionType: '',
            id: ''
        });
    }

    const addTransactionToList = () => {
        setTranactions([...transactions, {
            ...inputs,
            id: uuidv4()
        }]);
    }

    const removeTransactionFromList = (id) => {
        // console.log(id);
        let newTransactions = transactions.filter(item => 
            item.id !== id
        );

        setTranactions(newTransactions);
    }

    const clearTransactions = () => {
        setTranactions([]);
    }

    const contextValue = { inputs, setInputs, clearInputs, transactions, addTransactionToList, removeTransactionFromList, clearTransactions };

    return (
        <TransactionsContext.Provider value={ contextValue }>
            { children }
        </TransactionsContext.Provider>
    )
}
