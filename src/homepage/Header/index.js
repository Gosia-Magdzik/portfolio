import { Image, Portfolio, RowStyled, Button} from "./styled";
import picture from "./ja.png";
import portfolio from "./portfolio.png"
import { Tools } from "../Tools";
import { Row, Col, Container } from "react-bootstrap";

function Header() {
    return (
        <Container fluid>
            <RowStyled>
            <Row>
                <Col className="align-items-center text-center justify-content-center">
                
                    <Image  
                        src={picture} 
                        alt="Gosia" 
                    />
                </Col>
                <Col className="align-items-center text-center justify-content-center">
                    <Row sm={3}  
                         className="mt-2 mb-3">
                        <h2>
                            Małgorzata Magdzik
                        </h2>
                    </Row >
                    <Row    sm={3} 
                            className="mb-3"
                    >Front end developer</Row>
                    <Row sm={3} >
                        <Button>
                            Hire Me
                        </Button>
                    </Row>
                </Col>                       
             </Row>
             </RowStyled>
             <RowStyled>
                <Row className="mt-4 align-items-center text-center justify-content-center">                  
                        <h2>Technologies & Tools I use</h2>
                        <Tools/>
                </Row> 
             </RowStyled>
             <RowStyled>
                <Row>
                    <h2> Portfolio 
                    <Portfolio  
                            src={portfolio} 
                            alt="/" 
                    />
                    </h2>  
                </Row> 
            </RowStyled>   
        </Container>
    );
}

export default Header;