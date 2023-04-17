import TextArea from "./Textarea";
import Header from "./Header";
import { Row, Col, Container } from "react-bootstrap";
import { StyledFooter } from "./footer"

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
                <StyledFooter >
                © 4/2023 by M. 💖
                </StyledFooter>
        </Container>
    );
}

export default Homepage;