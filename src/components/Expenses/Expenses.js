import React, { useState } from 'react';

import ExpenseItems from './ExpenseItems'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    let expenseContent = < p > No Expense found! < /p>
    if (filteredExpenses.length > 0) {
        expenseContent =
            filteredExpenses.map((expense) => ( <
                ExpenseItems key = { expense.id }
                title = { expense.title }
                amount = { expense.amount }
                date = { expense.date }
                />
            ))
    }
    if (filteredExpenses.length === 1) {
        expenseContent = < p > Only single Expense here.Please add more... < /p>
    }

    return ( <
        div >
        <
        Card className = 'expenses' >
        <
        ExpensesFilter selected = { filteredYear }
        onChangeFilter = { filterChangeHandler }
        /> <
        ExpenseChart expenses = { filteredExpenses }
        /> { expenseContent } <
        /Card> <
        /div>
    );
};

export default Expenses;