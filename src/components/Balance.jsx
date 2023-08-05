import React from 'react';
import '../styles/Balance.css';

function Balance({ currentBalance, incomeBalance, expenseBalance }) {
    return (
        <>
            <div className="balance-info">
                <h1 className="balance-title">Your balance</h1>
                <h1 className="current-balance" id="current-balance">
                    {currentBalance < 0 ? "-₹" + (-currentBalance) : "₹" + currentBalance}
                </h1>
            </div>

            <div className="statement-container">
                <div className="income">
                    <h1 className="income-title">income</h1>
                    <h1 className="income-amount" id="income-amount">
                        ₹{incomeBalance}
                    </h1>
                </div>
                <div className="expense">
                    <h1 className="expense-title">expense</h1>
                    <h1 className="expense-amount" id="expense-amount">
                        ₹{expenseBalance}
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Balance;
