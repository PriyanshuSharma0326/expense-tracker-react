import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TransactionsContext = createContext();

export const TransactionsContextProvider = ({ children }) => {
    const [transactions, setTranactions] = useState([]);

    const addTransactionToList = (inputs) => {
        setTranactions([...transactions, {
            ...inputs,
            id: uuidv4()
        }]);
    }

    const removeTransactionFromList = (id) => {
        let newTransactions = transactions.filter(item => 
            item.id !== id
        );

        setTranactions(newTransactions);
    }

    const clearTransactions = () => {
        setTranactions([]);
    }

    const contextValue = { transactions, addTransactionToList, removeTransactionFromList, clearTransactions };

    return (
        <TransactionsContext.Provider value={ contextValue }>
            { children }
        </TransactionsContext.Provider>
    )
}
