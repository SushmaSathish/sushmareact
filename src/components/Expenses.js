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
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredyear} onChangeFilter={filterChangeHandler}/>
  
      {props.items.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
    </Card>
  );
}

export default Expenses;