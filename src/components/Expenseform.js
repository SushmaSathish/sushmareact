import "./Expenseform.css";
const Expenseform = () => {
  return (
    <form>
      <div className=".new-expense__controls">
        <div className=".new-expense__controls">
          <label className="new-expense__control label">title</label>
          <input type={Text}  className="new-expense__control input"/>
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__control label">amount</label>
          <input type='number' className="new-expense__control input" />
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__control label">Date</label>
          <input type='date'  className="new-expense__control input"/>
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit" className="new-expense button">add expense</button>
      </div>
    </form>
  );
};
export default Expenseform;