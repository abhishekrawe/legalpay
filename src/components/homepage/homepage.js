import React from 'react'
import "./homepage.css"
const Homepage = ({setLoginUser}) => {
  return (
    <div  className='homepage'>
        <h1> Hello Homepage </h1>
        <div class="d-flex justify-content-center">
            <div class="col-md-3 w-50 bg-info ms-5 p-4 rounded">
                <h2>Deposit</h2>
                <p class="fs-3">
                    $ <span id="deposit">0</span>
                </p>
            </div>
            <div class="col-md-3 w-50 bg-success ms-5 p-4 rounded">
                <h2>Withdraw</h2>
                <p class="fs-3">
                    $ <span id="withdraw">0</span>
                </p>
            </div>
            <div class="col-md-3 w-50 bg-primary ms-5 p-4 rounded">
                <h2>Balance</h2>
                <p class="fs-3">
                    $ <span id="balance">1200</span>
                </p>
            </div> 
        </div>
        
        <div id="input-section" class="mt-5 d-flex justify-content-center">
            <div class="col-md-5 w-50 container rounded shadow p-4 me-5">
                <h3>Deposit</h3>
                <input type="number" class="form-control" id="deposit-input" placeholder="Deposit"/>
                <br/>
                <button class="btn btn-success" id="deposit-btn">Deposit</button>
            </div>
            <div class="col-md-5 w-50 container rounded shadow p-4 ms-5">
                <h3>Withdraw</h3>
                <input type="number" class="form-control" id="withdraw-input" placeholder="Withdraw"/>
                <br/>
                <button class="btn btn-success" id="withdraw-btn">Withdraw</button>
            </div>
        </div>
        <div className='button' onClick={() => setLoginUser({})}>EXIT</div>
    </div>
  )
}

export default Homepage