import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {

    const deleteExpenseHandler = (id) => {
        const filteredExpenses = props.expenses.filter(expense => expense.id !== id);
        props.onDeleteExpense(filteredExpenses);
    };
    return ( <
        Card className = "expenses" >

        {
            props.expenses.map(expense => ( <
                ExpenseItems key = { expense.id }
                title = { expense.title }
                amount = { expense.amount }
                date = { expense.date }
                location = { expense.location }
                onDeleteExpense = {
                    () => deleteExpenseHandler(expense.id) }

                />
            ))
        } <
        /Card>
    );
}
export default Expenses;