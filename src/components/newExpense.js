import React, {useState} from 'react';
import Expenseform from './Expenseform';
import './NewExpense.css'

const NewExpense=(props)=>{
    const [isEditing, setIsEditing]= useState(false);
    const saveExpenseHandler=(enteredexpensedata)=>{
       const expenseData={...enteredexpensedata,
        id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
    }
    const startEditingHandler=()=>{
        setIsEditing(true);
    };
    const stopEditingHandler=()=>{
        setIsEditing(false);
    };
return (
<div className='new-expense'>
   {!isEditing &&<button onClick={startEditingHandler}>Add new expense</button>}
   {isEditing &&<Expenseform onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler}/>}

</div>)
}
export default NewExpense;