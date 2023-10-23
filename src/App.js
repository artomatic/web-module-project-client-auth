import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Login from './Login';
import AddFriend from './AddFriend';

function App() {
  return (
    <div className="App">
      <nav>
        <div className={'title'} style={{display: 'inline'}} >FRIENDS DATABASE</div>
        <span className='navButtons' >
          <Link to={'/login'} >LOGIN.</Link>
          <span>FRIENDLIST.</span>
          <Link to={'/addfriend'} >ADDFRIEND.</Link>
          <span>LOGOUT</span>
        </span>
      </nav>

      <Routes>
        <Route path={'/login'} element={<Login/>} />
        <Route path={'/addfriend'} element={<AddFriend/>} />

      </Routes>

    </div>
  );
}

export default App;
