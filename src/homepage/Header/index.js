import { Image, RowStyled, PortfolioStyled, SpecialFont, Svg, Wrapper} from "./styled";
import picture from "./Images/ja.png";
import { Tools } from "../Tools";
import { Row, Col, Container } from "react-bootstrap";
import { Contact } from "../Contact"
import { ReposCards } from "../RepoCards";
import compass from "./Images/compass.svg";
import tools from "./Images/tools.svg";
import wand from "./Images/wand.svg";
import popcorn from "./Images/popcorn.svg";


function Header() {
    return (
        <Container fluid>
            <RowStyled>
            <Row xs={12}>
                <Col 
                        xs={11}
                        sm={10}
                        md={8}
                        lg={5}
                className="align-items-center text-center justify-content-center">
                        <Image  
                            src={picture} 
                            alt="Gosia" 
                        />
                </Col>
                <Col className="align-items-center text-center justify-content-center">
                    <Row  className="mt-3">
                        <SpecialFont>                       
                                Małgorzata Magdzik 
                        </SpecialFont>
                    </Row >
                    <Row
                    className="align-items-center text-center justify-content-center"
                    xs="auto" >
                           <Contact/> 
                    </Row>
                </Col>                       
             </Row>
             </RowStyled>
             <RowStyled>
                <Row className="mt-2 pr-3 mb-0 align-items-center text-center justify-content-center">                  
                            <Wrapper
                            className="align-items-center text-center justify-content-center"
                            >
                                <h2>Technologies & Tools</h2>
                                &nbsp;  
                                &nbsp;
                                <Svg src={compass}/>   
                            </Wrapper>
                        < Tools />
                </Row> 
             </RowStyled>
             <PortfolioStyled>
                <Row className="align-items-center text-center justify-content-center">
                    <Wrapper
                        className="align-items-center text-center justify-content-center"
                    >
                        <h2> Portfolio</h2>
                        &nbsp;&nbsp;
                        <Svg src={popcorn}/>  
                    </Wrapper>
                    <ReposCards/>
                </Row> 
            </PortfolioStyled>   
        </Container>
    );
}

export default Header;