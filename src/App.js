import React from 'react';
import './App.css';
import { Route, Routes, Link, Navigate} from 'react-router-dom';

import Login from './Login';
import AddFriend from './AddFriend';
import FriendsList from './FriendsList';

function App() {
  return (
    <div className="App">
      <nav>
        <div className={'title'} style={{display: 'inline'}} >FRIENDS DATABASE</div>
        <span className='navButtons' >
          <Link to={'/login'} >LOGIN.</Link>
          <Link to={'/friendslist'} >FRIENDLIST.</Link>
          <Link to={'/friends/add'} >ADDFRIEND.</Link>
          <span>LOGOUT</span>
        </span>
      </nav>

      <Routes>
        <Route path={'/'} element={<Login/>} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/friendslist'} element={<FriendsList/>} />
        <Route path={'/friends/add'} element={<AddFriend/>} />
      </Routes>

    </div>
  );
}

export default App;
