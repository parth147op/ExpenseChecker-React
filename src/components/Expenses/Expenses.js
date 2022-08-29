import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem.js';
import ExpensesFilter from './ExpenseFilter.js';
import './Expenses.css';
import Card from '../UI/Card';
import Chart from '../ExpenseChart/Chart.js';
function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2022');
  const filterChangeHandler = selectedYear=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expenses=>{return(expenses.date.getFullYear().toString()===filteredYear);})
  //console.log(filteredYear);
  return (  
    <Card className="expenses">
      <Chart expenses={filteredExpenses}/>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.length===0?(<p>No expenses found.</p>):(
        filteredExpenses.map((expense)=>
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}>
      </ExpenseItem>)
      )}
      
  
    </Card>
  );
}

export default Expenses;