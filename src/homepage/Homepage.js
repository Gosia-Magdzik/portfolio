import TextArea from "./Textarea";
import Header from "./Header";
import { Row, Col, Container } from "react-bootstrap";
import { StyledFooter } from "./footer"

function Homepage() {
    return (
        <Container  >
                <Row className="text-md-start"
                >
                    <Col        
                        xs={12}
                        sm={8}
                        md={8}
                        lg={8}
                        className="px-0"
                    >
                        <Header/> 
                    </Col>
                    <Col 
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                    >
                        <TextArea />
                    </Col>
                </Row>
                <StyledFooter >
                © 4/2023 M. 💖
                </StyledFooter>
        </Container>
    );
}

export default Homepage;