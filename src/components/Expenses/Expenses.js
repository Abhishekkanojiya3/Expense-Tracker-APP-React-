import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    console.log(props)
    return ( <
        Card className = "expenses" >

        {
            props.expenses.map(expense => ( <
                ExpenseItems title = { expense.title }
                amount = { expense.amount }
                date = { expense.date }
                location = { expense.location } >
                < /ExpenseItems>
            ))
        } <
        /Card>
    );
}
export default Expenses;