import React from 'react';
import Expenseform from './Expenseform';
import './NewExpense.css'

const NewExpense=(props)=>{
    const saveExpenseHandler=(enteredexpensedata)=>{
       const expenseData={ ...enteredexpensedata,
        id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
    }
return (
<div className='new-expense'>
<Expenseform onSaveExpenseData={saveExpenseHandler}/>
</div>)
}
export default NewExpense;