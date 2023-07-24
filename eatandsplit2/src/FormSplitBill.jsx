

import React, { useState } from 'react'
import Button from './Button'

const FormSplitBill = ({newFriend, onSplit}) => {
    const [bill, setBill] = useState(''); 
    const [expense, setExpense] = useState(''); 
    const paidByFriend = bill ? bill - expense : '';
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    function handleSubmit(e){
        e.preventDefault();
        if(!bill || !expense) return; 

       onSplit(whoIsPaying === "user" ? paidByFriend : -expense);

    }
  return (
   <form className='form-split-bill' onSubmit={handleSubmit}>
     <h2> Split bill with {newFriend.name}</h2>
       <label>💰 Bill Value</label>
       <input type="text" value={bill} onChange={(e)=> setBill(Number(e.target.value))}/>
       <label>👩‍💼 Your expense</label>
       <input type="text" value={expense} onChange={(e)=> setExpense(Number(e.target.value))}/>
       <label>👫 {newFriend.name}'s expense</label>
       <input type="text" disabled value={paidByFriend}/>
       <label>🤑 Who is paying the bill</label>
       <select value={whoIsPaying} onChange={(e)=> setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{newFriend.name}</option>
       </select>

       <Button>Split Bill</Button>
   </form>
  )
}

export default FormSplitBill