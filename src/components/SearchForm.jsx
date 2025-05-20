import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';

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
                <Row>
                    <Col className="text-center mt-5">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
                 :
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-4 justify-content-center">
                        <Col sm={4} lg={3}>
                            <Form.Group controlId="formFrom">
                                <Form.Label>From:</Form.Label>
                                <Form.Control type="text" value={from} onChange={(e)=> setFrom(e.target.value)} placeholder="Origin" required={true}/>
                            </Form.Group>
                        </Col>
                        <Col sm={4} lg={3}>
                            <Form.Group controlId="formTo">
                                <Form.Label>To:</Form.Label>
                                <Form.Control type="text" value={to} onChange={(e)=>setTo(e.target.value)} placeholder="Where to?" required={true}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button variant="primary" type="submit">Search Flights</Button>
                        </Col>
                    </Row>
                </Form>
            }
        </>
    );
}