import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');


    const titleChange = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChange = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChange = (event) => {
        setEnteredDate(event.target.value);
    }
    const locationChange = (event) => {
        setEnteredLocation(event.target.value);
    }
    return ( <
        form >
        <
        div className = 'new-expense__controls' >
        <
        div className = 'new-expense__controls' >
        <
        label > Title < /label> <
        input type = 'text'
        onChange = { titleChange }
        /> <
        /div> <
        div className = 'new-expense__controls' >
        <
        label > Amount < /label> <
        input type = 'number'
        onChange = { amountChange }
        /> <
        /div> <
        div className = 'new-expense__controls' >
        <
        label > Date < /label> <
        input type = 'date'
        onChange = { dateChange }
        / > <
        /div> <
        div className = 'new-expense__controls' >
        <
        label > Loaction < /label> <
        input type = 'text'
        onChange = { locationChange }
        /> <
        /div> <
        /div> <
        div className = 'new-expense__actions' >
        <
        button type = 'submit' > Add Expense < /button> <
        /div> <
        /form>
    );
}
export default ExpenseForm;