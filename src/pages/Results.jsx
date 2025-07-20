import { useNavigate } from "react-router-dom";
import FlightList from '../components/FlightList.jsx'
import NoResults from '../components/NoResults.jsx';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';

const GET_FLIGHTS = gql`
    query GetFlights($from: String, $to: String){
        flights(from: $from, to: $to){
            id
            from
            to
            price
            airline
            departureTime
        }
    }
`;

export default function Results(){
    const navigate = useNavigate();

    const handleClick = ()=> navigate('/');

    function useQueryParams(){
        return new URLSearchParams(useLocation().search);
    }

    const query = useQueryParams();
    const from = query.get('from').toUpperCase();
    const to = query.get('to').toUpperCase();

    const { loading, error, data } = useQuery(GET_FLIGHTS, {
        variables: {from, to},
    });

    if(!from || !to){
        return <p>Waiting for search parameters...</p>;
    }

    if (loading) return <p>Loading flights ...</p>;
    if(error) return <p>Error loading flights</p>;

    const flights = data?.flights || [];

    if(flights.length === 0) {
        return <NoResults from={from} to={to} />;
    }

    return (
        <Container className="py-4">
            <Row className="mb-2">
                <Col className="text-center"><h2 >Flights from {from.toUpperCase()} to {to.toUpperCase()}</h2></Col>
            </Row>
            <Row className="mb-3">
                <Col><FlightList flights={flights}/></Col>
            </Row>
            <Row>
                <Col className="text-center"><Button type="button" onClick={handleClick}>New Search</Button></Col>
            </Row>
        </Container>
    );
}