import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItems.css';

function ExpenseItems(props) {
    console.log(props)
    return ( <
        Card className = 'expense-item' >
        <
        ExpenseDate date = { props.date } > < /ExpenseDate> <
        ExpenseDetails title = { props.title }
        location = { props.location }
        amount = { props.amount }
        />    <
        /Card>
    );
}

export default ExpenseItems;