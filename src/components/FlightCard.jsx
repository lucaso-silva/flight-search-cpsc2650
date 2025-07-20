import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function FlightCard({ flight }){
    return (
        <Card style={{ width:'20rem' }}>
            <Card.Body>
                <Card.Title>{flight.airline}</Card.Title>
                <Card.Text>
                    From: {flight.from} → To: {flight.to}
                </Card.Text>
                <Card.Text>
                    Price: ${flight.price}
                </Card.Text>
                <Link to={{ pathname:`/flights/${flight.id}`}}>View more</Link>
            </Card.Body>
        </Card>
    );
}