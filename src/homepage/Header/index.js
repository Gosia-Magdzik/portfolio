import { Image, RowStyled, PortfolioStyled} from "./styled";
import picture from "./ja.png";
import { Tools } from "../Tools";
import { Row, Col, Container } from "react-bootstrap";
import { Contact } from "../Contact"
import { ReposCards } from "../RepoCards";

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
                    <Row  className="mt-3 mb-2">
                        <h2>
                            Małgorzata Magdzik
                        </h2>
                    </Row >
                    <Row  className="mb-2"
                    >
                        <p> Front end developer </p>
                    </Row>
                    <Row >
                           <Contact/> 
                    </Row>
                </Col>                       
             </Row>
             </RowStyled>
             <RowStyled>
                <Row className="mt-2 pr-3 mb-0 align-items-center text-center justify-content-center">                  
                        <h2>Technologies & Tools 🎉🏆🪛</h2>
                        <Tools/>
                </Row> 
             </RowStyled>
             <PortfolioStyled>
                <Row className="align-items-center text-center justify-content-center">
                    <h2> Portfolio 🍿</h2>  
                    <ReposCards/>
                </Row> 
            </PortfolioStyled>   
        </Container>
    );
}

export default Header;