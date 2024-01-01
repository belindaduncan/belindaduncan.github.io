
const ATMDeposit = ({onChange, isDeposit}) => {
  const choice = ["Deposit","Cash Back"];
  return (
    <label className="label huge">
      <h3>{choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit"></input>
    </label>
    );
  };

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0); // Account total at Bank
  const [isDeposit,setIsDeposit] = React.useState(true);

  let status = `Account Balance $ ${totalState}`;

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    if (!isDeposit && totalState < deposit) {
      alert('Insufficient funds for cash back');
      return; 
    }

    setTotalState(newTotal);

    };




  return (
    <form onSubmit={handleSubmit}>
      <h2 id= 'total'>Account Balance {status}</h2>
      <button onClick={()=> setIsDeposit(true)}>Deposit</button>
      <button onClick={()=> setIsDeposit(false)}>Cash Back</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));