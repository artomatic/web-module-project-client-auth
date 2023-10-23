import React from 'react';
import './App.css';
import { Route, Routes, Link} from 'react-router-dom';

import Login from './Login';
import AddFriend from './AddFriend';
import FriendsList from './FriendsList';
import Logout from './Logout';

function App() {
  return (
    <div className="App">
      <nav>
        <div className={'title'} style={{display: 'inline'}} >FRIENDS DATABASE</div>
        <span className='navButtons' >
          <Link to={'/login'} >LOGIN.</Link>
          <Link to={'/friendslist'} >FRIENDS LIST.</Link>
          <Link to={'/friends/add'} >ADD FRIEND.</Link>
          <Link to={'/logout'} onClick={Logout}>LOGOUT.</Link>
        </span>
      </nav>
      <Routes>
        <Route path={'/'} element={<Login/>} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/friendslist'} element={<FriendsList/>} />
        <Route path={'/friends/add'} element={<AddFriend/>} />
        <Route path={'/logout'} element={<Logout/>} />

      </Routes>
    </div>
  );
}

export default App;
