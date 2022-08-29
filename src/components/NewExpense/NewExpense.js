import React, { useState } from 'react';
import './NewExpense.css';
import Card from '../UI/Card';
import NewExpenseForm from './NewExpenseForm';
export const NewExpense = (props) => {
  const [isEditing,setIsEditing]=useState(false);
  const saveExpenseHandler = (formdata)=>{
    const expenseData = {
        ...formdata,
        id:Math.random().toString()
    }
    props.addnewExpense(expenseData);
  }
  const showForm = ()=>{
    setIsEditing(true);
  }
  const cancelFormHandler = ()=>{
    setIsEditing(false);
  }
  return (
    <Card className='new-expense'>
        {!isEditing && <button onClick={showForm}>Add New Expenses</button>}
        {isEditing && <NewExpenseForm saveExpense={saveExpenseHandler} cancelForm={cancelFormHandler}/>}
    </Card>
  )
}
