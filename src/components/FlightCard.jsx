import { Card } from 'react-bootstrap';

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
            </Card.Body>
        </Card>
    );
}