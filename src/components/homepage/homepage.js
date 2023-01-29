import React , {useState} from 'react'
import "./homepage.css"
const Homepage = ({setLoginUser}) => {
  
    const [deposit , setDeposit] = useState(0);

    const [withdraw, setWithdraw] = useState(0);

    const [balance, setBalance] = useState(1200);

    const [depositInput , setDepositInput] = useState(0);
    const [withdrawInput , setWithdrawInput] = useState(0);

    const handleDeposit = (val) =>  {
        setDeposit(deposit+parseInt(val))
        setBalance(balance+parseInt(val))
    }

    const handleWithdraw = (val) =>  {
        setWithdraw(withdraw+parseInt(val))
        setBalance(balance-parseInt(val))
    }


  return (
    <div  className='homepage'>
        <h1> Welcome to Banking system </h1>
        <div className="d-flex justify-content-center">
            <div className="col-md-3 w-50 bg-info ms-5 p-4 rounded">
                <h2>Deposit</h2>
                <p className="fs-3">
                    $ <span>{deposit}</span>
                </p>
            </div>
            <div className="col-md-3 w-50 bg-success ms-5 p-4 rounded">
                <h2>Withdraw</h2>
                <p className="fs-3">
                    $ <span>{withdraw}</span>
                </p>
            </div>
            <div className="col-md-3 w-50 bg-primary ms-5 p-4 rounded">
                <h2>Balance</h2>
                <p className="fs-3">
                    $ <span>{balance}</span>
                </p>
            </div> 
        </div>
    
        <div className="mt-5 d-flex justify-content-center">
            <div className="col-md-5 w-75 container rounded shadow p-4 me-5">
                <h3>Deposit Money</h3>
                <input type="number" value={depositInput} onChange = {(e) => setDepositInput(e.target.value)} className="form-control" id="deposit-input" placeholder="Deposit"/>
                <br/>
                <button onClick={(e) => handleDeposit(depositInput)} className="btn btn-dark" id="deposit-btn">Deposit</button>
            </div>
            <div className="col-md-5 w-75 container rounded shadow p-4 ms-5">
                <h3>Withdraw Money</h3>
                <input type="number" value={withdrawInput} onChange = {(e) => setWithdrawInput(e.target.value)} className="form-control" id="withdraw-input" placeholder="Withdraw"/>
                <br/>
                <button onClick={(e) => handleWithdraw(withdrawInput)} className="btn btn-dark" id="withdraw-btn">Withdraw</button>
            </div>
        </div>
        <div className='button' onClick={() => setLoginUser({})}>Quit</div>
    </div>
  )
}

export default Homepage