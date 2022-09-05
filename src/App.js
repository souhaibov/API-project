
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  const [user, setuser] = useState([])
  
    useEffect(() => {
      axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setuser(res.data))
    .catch((err) => console.log(err));
  
  }, [])
  
  return (
    <div className="App">
      

        <UserList user={user}/>
      
    </div>
  );
}

export default App;
