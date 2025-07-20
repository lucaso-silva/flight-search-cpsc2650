import {Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home.jsx';
import Results from './pages/Results.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Navbar from './components/Navbar.jsx';
import FlightDetail from './components/FlightDetail.jsx';
import {useEffect, useState} from "react";

function App() {
    // const [ token, setToken ] = useState(localStorage.getItem('token') || '');
    const [ user, setUser ] = useState(null);
    const [ message, setMessage ] = useState('');
    const api = import.meta.env.VITE_API_URL;

    useEffect(() => {
        console.log("app.jsx")
        fetch(`${api}api/auth/me`, {
            credentials: 'include'
        })
            .then(res=> res.ok ? res.json() : null)
            .then(data=>setUser(data))
    }, []);

    const handleLogin = (user) => {
        setUser(user);
        setMessage('Logged in successfully.');
    }

    const handleLogout = async () => {
        await fetch(`${api}api/auth/logout`, {
            method: 'POST',
            credentials: 'include'
        });
        setUser(null);
        setMessage('Logged out');
    }

    return (
        <>
            <Navbar user={user} onLogout={handleLogout}/>
            {message && (
                <div>
                    {message}
                </div>
            )}
            <Routes>
                <Route path="/signup" element={<Signup onAuth={handleLogin} setMessage={setMessage} />} />
                <Route path="/login" element={<Login onAuth={handleLogin} setMessage={setMessage} />} />
                <Route path="/" element={ <Home /> } />
                <Route path="/results" element={ <Results /> } />
                <Route path="/flights/:id"
                       element={user ? <FlightDetail user={user} /> : <Navigate to="/login" />}
                />
                <Route path="/profile"
                       element={user ? <Profile user={user} /> : <Navigate to="/login" />}/>
            </Routes>
        </>
    );
}

export default App
