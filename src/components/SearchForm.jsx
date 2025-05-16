import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

export default function SearchForm(){
    const [ from, setFrom ] = useState('');
    const [ to, setTo ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(()=>{
            navigate(`/results?from=${from}&to=${to}`);
        }, 1000)
    }

    return (
        <>
            { isLoading ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> :
                <form onSubmit={handleSubmit}>
                    <label>
                        From:
                        <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} required={true}/>
                    </label>
                    <br/>
                    <label>
                        To:
                        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} required={true}/>
                    </label>
                    <br/>
                    <Button variant="primary" type="submit">Search Flights</Button>
                </form>}
        </>

    );
}