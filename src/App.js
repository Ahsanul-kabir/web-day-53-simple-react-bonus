import React,{useState } from 'react';
import {useEffect} from 'react';
import User from './componets/User/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  },[])

  const addMember = (name) => {
    console.log('Member added',name)
  }
  return (
    <div>
      <h1>Team Builder</h1>
      {
        users.map(user => <User user ={user} addMember ={addMember}></User>)
      }
    </div>
  );
}

export default App;
