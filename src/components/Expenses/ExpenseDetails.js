import './ExpenseItems.css';
import Card from '../UI/Card';

const ExpenseDetails = (props) => {
    const deleteExpense = () => {
        console.log(typeof props.onDeleteExpense); // add this line to check the type of onDeleteExpense prop
        props.onDeleteExpense(props.id);
    }
    return (

        <
        Card className = 'expense-item__description' >
        <
        h2 > { props.title } < /h2>  <
        h2 > { props.location } < /h2>  <
        div className = 'expense-item__price' > $ { props.amount } < /div>   <
        button > Change Item < /button> <
        button onClick = { deleteExpense } > Delete Expense < /button> <
        /Card>
    );
}
export default ExpenseDetails;