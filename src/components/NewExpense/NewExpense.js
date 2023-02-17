import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
        const [isEditing, setEditing] = useState(false);
        const newExpenseHandler = (enteredExpenseData) => {
            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()
            };
            props.onAddExpense(expenseData);
            setEditing(false);
        }
        const startEditHandler = () => {
            setEditing(true);
        }
        const stopEditHandler = () => {
            setEditing(false);
        }

        return ( <
                div className = "new-expense" > {!isEditing && ( < button onClick = { startEditHandler } > Add New Expense < /button>)} {
                            isEditing && ( < ExpenseForm onSaveData = { newExpenseHandler }
                                onCancel = { stopEditHandler }
                                />)} <
                                /div>
                            );

                        };

                        export default NewExpense;