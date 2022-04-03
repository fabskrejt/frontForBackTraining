import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

type UsersType = {
    name: string
}
const state: Array<UsersType> | null = null

function App() {
    const [users, setUsers] = useState(state)

    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then(res => setUsers(res.data))
    }, [])

    console.log(users)

    return (
        <div className="App">
            {users && users.map(u => {
                return <span key={u.name}>{u.name} <br/> </span>
            })}
        </div>
    );
}

export default App;
