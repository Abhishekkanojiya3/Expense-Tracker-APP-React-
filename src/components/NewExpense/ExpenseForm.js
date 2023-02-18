import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
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
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            location: enteredLocation,
            date: new Date(enteredDate)
        };
        props.onSaveData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredLocation('');
    }

    return ( <
        form onSubmit = { submitHandler } >
        <
        div className = 'new-expense__controls' >
        <
        div className = 'new-expense__controls' >
        <
        label > Title < /label> <
        input type = 'text'
        value = { enteredTitle }
        onChange = { titleChange }
        /> <
        /div> <
        div className = 'new-expense__controls' >
        <
        label > Amount < /label> <
        input type = 'number'
        value = { enteredAmount }
        onChange = { amountChange }
        /> <
        /div> <
        div className = 'new-expense__controls' >
        <
        label > Date < /label> <
        input type = 'date'
        value = { enteredDate }
        onChange = { dateChange }
        / > <
        /div> <
        div className = 'new-expense__controls' >
        <
        label > Location < /label> <
        input type = 'text'
        value = { enteredLocation }
        onChange = { locationChange }
        /> <
        /div> <
        /div> <
        div className = 'new-expense__actions' >
        <
        button type = "button"
        onClick = { props.onCancel } > Cancel < /button> <
        button type = 'submit' > Add Expense < /button> <
        /div> <
        /form>
    );
}
export default ExpenseForm;