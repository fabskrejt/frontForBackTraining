import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [users, setUsers] = useState([{name: 'usr'}])
    console.log(users)
    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then(res => setUsers(res.data))
    }, [])
    const usr = users.map(u => {
        return <span key={u.name}>{u.name}</span>
    })
    return (
        <div className="App">
            {usr}
        </div>
    );
}

export default App;
