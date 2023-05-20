import React, { useState } from 'react';
import ExpensesList from './ExpensesList.js';
import ExpensesFilter from  './ExpensesFilter';

import './Expenses.css';
import Card from "./card";
import ExpenseList from './ExpensesList.js';
const  Expenses=(props)=> { 
  const [filteredyear,setFilteredyear] = useState('2020');
  const filterChangeHandler=selectedyear=>{
    setFilteredyear(selectedyear)
  }
  const filteredExpenses= props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredyear  })
   
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredyear} onChangeFilter={filterChangeHandler}/>
      {/*filteredExpenses.length===0 && <p>No expenses found.</p>}
      {filteredExpenses.length>0 &&( filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))*/}
      <ExpenseList items={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;