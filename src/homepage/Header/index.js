import { Image, RowStyled, PortfolioStyled} from "./styled";
import picture from "./ja.png";
import { Tools } from "../Tools";
import { Row, Col, Container } from "react-bootstrap";
import { Contact } from "../Contact"

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
                    <Row sm={4}  
                         className="mt-1 mb-2">
                        <h2>
                            Małgorzata Magdzik
                        </h2>
                    </Row >
                    <Row    sm={3} 
                            className="mb-2"
                    >
                        <p> Front end developer </p>
                    </Row>
                    <br/>
                    <Row sm={3} >
                        <Contact/>
                    </Row>
                    <Row sm={3}>

                    </Row>
                </Col>                       
             </Row>
             </RowStyled>
             <RowStyled>
                <Row className="mt-4 align-items-center text-center justify-content-center">                  
                        <h2>Technologies & Tools 🎉🏆🪛</h2>
                        <Tools/>
                </Row> 
             </RowStyled>
             <PortfolioStyled>
                <Row className="align-items-center text-center justify-content-center">
                    <h2> Portfolio 🍿
                    </h2>  
                </Row> 
            </PortfolioStyled>   
        </Container>
    );
}

export default Header;