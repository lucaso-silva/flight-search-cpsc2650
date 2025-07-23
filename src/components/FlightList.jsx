import FlightCard from './FlightCard.jsx';
import { Row, Col } from "react-bootstrap";

export default function FlightList({ flights }){
    return(
        <>
            {flights.map((flight)=> (
                <Row className="mb-2">
                     <Col className="d-flex justify-content-center">
                        <FlightCard key={flight._id} flight={flight} />
                    </Col>
                </Row>
            ))}
        </>
    );
}