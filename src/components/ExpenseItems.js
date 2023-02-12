import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItems.css';

function ExpenseItems(props) {
    return ( <
        div className = 'expense-item' >
        <
        ExpenseDate date = { props.date } > < /ExpenseDate> <
        ExpenseDetails title = { props.title }
        location = { props.location }
        amount = { props.amount }
        />

        <
        /div>
    );
}

export default ExpenseItems;