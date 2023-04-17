import TextArea from "./Textarea";
import Header from "./Header";
import { Row, Col, Container } from "react-bootstrap";

function Homepage() {
    return (
        <Container fluid >
                <Row>
                    <Col xs={8} gap={5} >
                        <Header/> 
                    </Col>
                    <Col xs={4}>
                        <TextArea />
                    </Col>
                </Row>
        </Container>
    );
}

export default Homepage;