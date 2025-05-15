
import { useNavigate } from "react-router-dom";

export default function NoResults({ from, to }){
    const navigate = useNavigate();

    const handleClick = ()=> navigate('/');
    return(
        <div>
            <h2>No Results</h2>
            <p>Sorry, we couldn't find any flights from {from} to {to}.</p>
            <button type="button" onClick={handleClick}>Return</button>
        </div>
    )
}