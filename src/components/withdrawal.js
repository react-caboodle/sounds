import React from 'react';

export const Withdrawal = (props) => {

  let amount=0;

  const onWithdraw = (e)=> {
    e.preventDefault();
    props.onWithdraw(amount);
  }

  const handleChange = (e)=>{
    e.preventDefault();
    amount = e.target.value;
  }


  return (
    <div>
    <h1>Available Balance is : {props.currentBalance}</h1>
    <form>
      <input type='text' placeholder='Enter amount' onChange={handleChange}/>
      <button onClick={(e)=>onWithdraw(e)}>Submit</button>
    </form>
    </div>
  )
}