import FlightCard from './FlightCard.jsx';

export default function FlightList({ flights }){
    return(
        <div>
            {flights.map((flight)=> (
                <FlightCard key={flight.id} flight={{flight}}/>
            ))}
        </div>
    );
}