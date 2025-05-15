import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FlightList from '../components/FlightList.jsx'
import NoResults from '../components/NoResults.jsx';

export default function Results(){
    const [ searchParams ] = useSearchParams();
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const navigate = useNavigate();

    const [ flights, setFlights ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const handleClick = ()=> navigate('/');

    useEffect(()=>{
        fetch('/src/data/flights.json')
            .then((res)=>res.json())
            .then((data)=>{
                const results = data.filter(
                    (flight) =>
                        flight.from.toLowerCase() === from.toLowerCase() &&
                        flight.to.toLowerCase() === to.toLowerCase()
                );
                setFlights(results);
                setIsLoading(false);
            });
    }, [from, to]);

    if (isLoading) return <p>Loading flights ...</p>;
    if(flights.length === 0) {
        return <NoResults from={from} to={to} />;
    }

    return (
        <div>
            <h2>Flights from {from} to {to}</h2>
            <FlightList flights={flights}/>
            <button type="button" onClick={handleClick}>New Search</button>
        </div>
    );
}