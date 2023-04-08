import React from 'react'
import './Spendings.css'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import { GlobalProvider } from './GlobalState'
function Spendings() {
  return (
    <GlobalProvider>
   <div className='spendings'>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
    </div>
    </GlobalProvider>
   
  )
}

export default Spendings