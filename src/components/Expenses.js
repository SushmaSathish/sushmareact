import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from  './ExpensesFilter';

import './Expenses.css';
import Card from "./card";
const  Expenses=(props)=> { 
  const [filteredyear,setFilteredyear] = useState('2020');
  const filterChangeHandler=selectedyear=>{
    setFilteredyear(selectedyear)
  }
  const filteredExpenses= props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredyear  })
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredyear} onChangeFilter={filterChangeHandler}/>
  
      {filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
    </Card>
  );
}

export default Expenses;