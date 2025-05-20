import { useNavigate } from "react-router-dom";
import { Button, Container, Col, Row } from 'react-bootstrap';

export default function NoResults({ from, to }){
    const navigate = useNavigate();

    const handleClick = ()=> navigate('/');
    return(
        <Container className="py-4 text-center">
            <Row className="mb-4">
                <Col><h2>No Results</h2></Col>
            </Row>
            <Row className="mb-3">
                <Col><p>Sorry, we couldn't find any flights from {from.toUpperCase()} to {to.toUpperCase()}.</p></Col>
            </Row>
            <Row>
                <Col><Button type="button" onClick={handleClick}>Return</Button></Col>
            </Row>
        </Container>
    )
}