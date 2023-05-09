import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses =[{title:"car insurance",amount:240, date:new Date(2023,5,9)},{title:"Food",amount:200, date:new Date(2023,5,10)},{title:"petrol",amount:500, date:new Date(2023,5,10)}]
  return (
    <div >
      <h2>Lets get started</h2>
      <ExpenseItem title={expenses[0].title}amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title}amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title}amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}
export default App;
