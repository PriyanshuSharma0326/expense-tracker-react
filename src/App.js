import React, { useContext, useState } from "react";

import Transaction from "./components/Transaction";
import Balance from "./components/Balance";
import { TransactionsContext } from "./context/TransactionsContext";
import { BalanceContext } from "./context/BalanceContext";

export default function App() {
    const { transactions, addTransactionToList } = useContext(TransactionsContext);
    const { amounts } = useContext(BalanceContext);

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

    const inputHandler = (e) => {
        console.log(e.target.value);
        setInputs({
            ...inputs, 
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransactionToList(inputs);
        refreshForm();
    }

    const refreshForm = () => {
        clearInputs();
    }

    return (
        <div className="App">
            <h1 className="title">Expense Tracker</h1>

            <Balance 
                currentBalance={amounts.currentBalance} 
                incomeBalance={amounts.incomeBalance} 
                expenseBalance={amounts.expenseBalance}
            />

            <div className="transaction-history">
                <h3 className="history-title">History</h3>

                <div className="transactions-container" id="transactions-container">
                    {transactions.map(transaction => {
                        return (
                            <Transaction 
                                id = {transaction.id} 
                                key = {transaction.id} 
                                transactionTitle = {transaction.title} 
                                amount = {transaction.amount} 
                                transactionType = {transaction.transactionType} 
                            />
                        );
                    })}
                </div>
            </div>

            <div className="transaction-input-form">
                <h3 className="transaction-form-title">Add New Transaction</h3>

                <form onSubmit={handleSubmit} className="input-form">
                    <div className="transaction-name-input-box">
                        <label htmlFor="transaction-name-input">Title</label>

                        <input 
                            onChange={inputHandler} 
                            value={inputs.title} 
                            name="title" 
                            type="text" 
                            className="transaction-name-input" 
                            id="transaction-name-input" 
                            required 
                        />
                    </div>

                    <div className="transaction-amount-input-box">
                        <label htmlFor="transaction-amount-input">Amount</label>

                        <input 
                            onChange={inputHandler} 
                            value={inputs.amount} 
                            name="amount" 
                            type="number" 
                            className="transaction-amount-input" 
                            id="transaction-amount-input" 
                            required 
                        />
                    </div>

                    <div className="transaction-type-box">
                        <div className="radio-input">
                            <input 
                                type="radio"
                                name="transactionType"
                                id="transaction-type-income"
                                value="income"
                                checked={inputs.transactionType === 'income'}
                                onChange={inputHandler}
                                required
                            />

                            <label htmlFor="transaction-type-income">Income</label>
                        </div>
                        
                        <div className="radio-input">
                            <input 
                                type="radio"
                                name="transactionType"
                                id="transaction-type-expense"
                                value="expense"
                                checked={inputs.transactionType === 'expense'}
                                onChange={inputHandler}
                                required
                            />

                            <label htmlFor="transaction-type-expense">Expense</label>
                        </div>
                    </div>

                    <button type="submit" className="submit-button" id="submit-button">Add Transaction</button>
                </form>
            </div>
        </div>
    );
}
