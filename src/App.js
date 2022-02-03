import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.esm.min'
import Datepicker from './components/Datepicker/Datepicker';
import React, { useState } from 'react';

function App() {
  const [selectedRadio, setSelectedRadio] = useState("oneway");

  const HandleChangeValue = (e) => {
    setSelectedRadio(e.target.value);
  };
  const return1=()=>{
     return <Datepicker/>
  }

  return (
    <div className='App'>
      <div className='header'>
        <h1 className='head'>Flight deals with Virgin Atlantic</h1>
      </div>
      <div className='radioGrp'>
        <div className="radio">
          <input
            id="oneway"
            name="radioButton"
            type="radio"
            value={"oneway"}
            defaultChecked
            onChange={HandleChangeValue}
          />
          <label htmlFor="oneway">One way</label>
        </div>
        <div className="radio">
          <input
            name="radioButton"
            type="radio"
            onChange={HandleChangeValue}
          />
          <label htmlFor="roundtrip">Round trip</label>
        </div>
      </div>

      <div>
        <div className='row'>
          <div className='col-8'>
            <div className='inptGrp'>
              <div className='col-6 from'>
                From
                <br />
                <input type="text" class="form-control" placeholder="Select Departure" aria-label="Username" />
              </div>
              <div className='col-6 to'>
                To
                <br />
                <input type="text" class="form-control" placeholder="Select Destination" aria-label="Server" />
              </div>

            </div>
          </div>

          <div className='col-4 datepicker'>
            <div className='col-6 dep'>
              Departure
              <Datepicker />

            </div>
            <div className='col-6 retn'>
              Return
              <input type="text" disabled={selectedRadio === "oneway"} className='form-control'/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='row'>
          <div className='col-4'>

          </div>
          <div className='col-4'>
            <div >
              <div className='event'>
                Voucher or event code
                <br />
                <input type="text" className='form-control' placeholder="Select Destination" aria-label="Server" />
              </div>
            </div>
          </div>

          <div className='col-4'>
            <button type="button" class="btn btn-danger bttn">Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
