
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function NoResults({ from, to }){
    const navigate = useNavigate();

    const handleClick = ()=> navigate('/');
    return(
        <div>
            <h2>No Results</h2>
            <p>Sorry, we couldn't find any flights from {from.toUpperCase()} to {to.toUpperCase()}.</p>
            <Button type="button" onClick={handleClick}>Return</Button>
            {/*<button type="button" onClick={handleClick}>Return</button>*/}
        </div>
    )
}