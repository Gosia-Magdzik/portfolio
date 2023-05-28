import TextArea from "./Textarea";
import Header from "./Header";
import { Row, Col, Container } from "react-bootstrap";
import { StyledFooter } from "./footer"
import { Motion } from "./Header/Motion";

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
                Made with 💖 IV-V/2023.
                </StyledFooter>
        </Container>
    );
}

export default Homepage;