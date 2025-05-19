import SearchForm from "../components/SearchForm.jsx";
import {Col, Container, Row} from "react-bootstrap";

export default function Home(){
    return (
        <Container className="p-4">
            <Row className="mb-4">
                <Col className="text-center">
                    <h1>Welcome to the Flight Search App</h1>
                </Col>
            </Row>
            <SearchForm/>
        </Container>
    );
}