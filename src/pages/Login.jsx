import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onAuth, setMessage }){
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const res = await fetch('http://localhost:4000/api/auth/login', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        console.log("data: ", data);
        if(res.ok){
            onAuth(data.user);
            setMessage('Login successful!');
            navigate('/');
        }else{
            alert(data.error);
        }
    };

    return(
        <div className="p-3">
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                <h2 className="auth-heading">Login</h2>
                <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="my-3"/>
                <input type="password" placeholder="Password" value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="mt-4">Login</button>
            </form>
        </div>
    )
}

export default Login;