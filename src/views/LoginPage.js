import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext';

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState('')
    const {setUserInfo } = useContext(UserContext); 
    const navigate = useNavigate()
    async function login(e) {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            })
            if (response.status===200) {
                response.json().then(userInfo => {
                    setUserInfo(userInfo);
                    setRedirect(true);
                })
            }else{
                alert('wrong credential')
            }

        }catch(err){
            alert ("error, refresh page")
        }
    }

    if(redirect){
        return <Navigate to={'/'}/>
    }
    return (
        <div>
            <p className="text-center text-xl font-semibold">Login Page </p>
            <form onSubmit={login}>
                <input type="text" placeholder="username" value={username} required='required' onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="password" value={password} required='required' onChange={e => setPassword(e.target.value)} />
                <button>Login</button>
            </form>
        </div>
    )
}