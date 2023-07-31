import React from "react";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { IncomeExpenses } from "./Components/IncomeExpenses";
import { TransactionList } from "./Components/TransactionList";
import { AddTransaction } from "./Components/AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";


import "./App.css";

function App() {
  return (
    <div className="app-container">
    <GlobalProvider>
      <Header />
      <div>
      <Balance/>
      <IncomeExpenses/> 
      <TransactionList />
      <AddTransaction />
      </div>
    </GlobalProvider>
    </div>
  );
}

export default App;
