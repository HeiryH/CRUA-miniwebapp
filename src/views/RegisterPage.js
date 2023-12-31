import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function register(e) {
        e.preventDefault();
        const response = await fetch('https://crud-miniwebproject-7340dd192120.herokuapp.com/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.status === 200) {
            alert("registration success")
            navigate('/login')

        } else {
            alert('registration failed')
        }
    }
    return (
        <div>
            <p className="text-center text-xl font-semibold">Register Page </p>
            <form onSubmit={register}>
                <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button>Register</button>
            </form>
        </div>

    )
}