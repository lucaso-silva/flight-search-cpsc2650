import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ onAuth, setMessage }){
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:4000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });
        const data = await res.json();
        console.log(data);
        if(res.ok){
            onAuth(data.token);
            setMessage('Signup successful!');
            navigate('/');
        }else {
            alert(data.error);
        }
    };

    return(
        <div className="p-3">
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                <h2 className="mb-3">Sign Up</h2>
                <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="my-2"/>
                <input type="password" placeholder="Password" value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="mt-4">Signup</button>
            </form>
        </div>
    )
}

export default Signup;