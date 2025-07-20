import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function FlightDetail({ user }){
    const { id } = useParams();
    const [ flight, setFlight ] = useState(null);
    const api = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchFlight = async () =>{
            const res = await fetch(`${api}/flights/${id}`, {
                // headers: {
                //     Authorization: `Bearer ${token}`,
                // },
                credentials: 'include'
            });
            console.log(res);
            if(res.ok){
                const data = await res.json();
                setFlight(data);

            }else{
                alert('Unauthorized or flight not found');
            }
        };
        fetchFlight();

    }, [id, user]);

    if(!flight) return <p>Loading flight details...</p>;

    return(
        <Card style={{ width: '30rem'}} className="mx-auto">
            <Card.Body>
                <Card.Title className="text-center">{flight.name || 'Flight Detail'}</Card.Title>
                <Card.Text><strong>From:</strong> {flight.from}</Card.Text>
                <Card.Text><strong>To:</strong> {flight.to}</Card.Text>
                <Card.Text><strong>Price:</strong> ${flight.price}</Card.Text>
                <Card.Text><strong>Airline: </strong> {flight.airline}</Card.Text>
                <Card.Text><strong>Departure Time: </strong> {flight.departureTime}</Card.Text>
            </Card.Body>
        </Card>
    );
}