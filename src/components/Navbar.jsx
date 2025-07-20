import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ user, onLogout }) {
    const navigate = useNavigate();
    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    return(
        <nav className="navbar flex-row justify-content-end px-5 py-2 fw-bold">
            <Link to="/" className="nav-link" >Home</Link>
            {!user ?(
                <>
                    <Link to="/login" className="nav-link mx-4">Login</Link>
                    <Link to="/signup" className="nav-link">Signup</Link>
                </>
            ):(
               <>
                   <Link to="/profile" className="nav-link mx-4">Profile</Link>
                   <button onClick={handleLogout} className="nav-button">Logout</button>
               </>
            )}
        </nav>
    );
}