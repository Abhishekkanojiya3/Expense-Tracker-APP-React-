import './ExpenseItems.css';
import Card from '../UI/Card';

function ExpenseDetails(props) {
    console.log(props)
    return ( <
        Card className = 'expense-item__description' >
        <
        h2 > { props.title } < /h2> <
        h2 > { props.location } < /h2> <
        div className = 'expense-item__price' > $ { props.amount } < /div>  < /
        Card >
    );
}
export default ExpenseDetails;