import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <nav>
            <div className={'title'} style={{display: 'inline'}} >FRIENDS DATABASE</div>
            <span className='navButtons' >
              <span>LOGIN.</span>
              <span>FRIENDLIST.</span>
              <span>ADDFRIEND.</span>
              <span>LOGOUT</span>
            </span>
          </nav>

          <h1>LOGIN</h1>
          <form>
              <div>
                <label htmlFor='username'>USERNAME</label>
                <input></input>
              </div>
              
              <div>
                <label htmlFor='password'>PASSWORD</label>
                <input></input>
              </div>

              <button type='submit' >SUBMIT</button>


          </form>
    </div>
  );
}

export default App;
