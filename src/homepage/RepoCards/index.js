import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { fetchRepos, selectRepos, selectReposStatus } from "./fetchRepos/reposSlice";
import { StyledButton, StyledCard } from "./styled"
import { Error } from "./Error";
import { Loader } from "./Loader";

export const ReposCards = () => {
    const dispatch = useDispatch();
    const repos = useSelector(selectRepos);
    const status = useSelector(selectReposStatus);

    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch])

    return(
			<>
			{	status === "loading" ? <Loader /> :
				status === "error" ? <Error /> :
        <Row
            xs={1}
            md={2}
            lg={3}
        >
            {repos.map(repo => (
                repo.homepage &&
                <Col
                  key={nanoid()}
                >
                  <Card as={StyledCard}>
                    <Card.Body>
                      <Card.Title>{repo.name}</Card.Title>
                      <Card.Text
											  style={{
													overflow: "auto",
													height: "100px"
												}}
											>
                        {repo.description}
                      </Card.Text>
											<Row>
												<Col>
													<StyledButton mb-1
														href={repo.homepage}
													>
														Demo
													</StyledButton>											
												</Col>
												<Col>
													<StyledButton
														href={repo.html_url}
													>
														Code
													</StyledButton>											
												</Col>         												
											</Row>            
                    </Card.Body>
                  </Card>
                </Col>
            ))}
        </Row>
			}
			</>
    );
};