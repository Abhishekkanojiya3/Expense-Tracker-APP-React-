import React, { useState} from 'react';
import './ExpenseItems.css';
import Card from '../UI/Card';

const ExpenseDetails = (props) => {
      const [title, setTitle] = useState(props.title);
      const [amount, setAmount] = useState(props.amount);
    const changeExpense = () => {
        setAmount('100')
        console.log(amount); 
    }
    const clickHandler = () => {
        setTitle('update');
        console.log(title);
    }
    return ( 
        
    <Card className = 'expense-item__description' >
        <h2 > { title } </h2> 
        <h2 > { props.location } </h2> 
        <div className = 'expense-item__price' > $ { amount } </div>  
        <button onClick={clickHandler}>Change Item</button>
        <button onClick = {changeExpense}>Change Expense</button>
        </Card>
    );
}
export default ExpenseDetails;