import React from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const titleChange = (event) => {
        console.log(event.target.value);
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
        input type = 'number' / >
        <
        /div> <
        div className = 'new-expense__controls' >
        <
        label > Date < /label> <
        input type = 'date' / >
        <
        /div> <
        div className = 'new-expense__controls' >
        <
        label > Loaction < /label> <
        input type = 'text' / >
        <
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