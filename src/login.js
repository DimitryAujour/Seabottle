import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const StyledContainer = styled.div`
  padding-top: 50px;
`;

const StyledForm = styled(Form)`
  max-width: 500px; // Adjust as needed
  margin: 0 auto;
`;


function PlaintextExample() {
    let navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/message-in-bottle');
    };
    return (
        <StyledContainer>
            <StyledForm>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="">  {/* Adjusted grid size */}
                        Email
                    </Form.Label>
                    <Col sm="10"> {/* Adjusted grid size */}
                        <Form.Control type="email" placeholder="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">  {/* Adjusted grid size */}
                        Password
                    </Form.Label>
                    <Col sm="8"> {/* Adjusted grid size */}
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Button type="submit"  onClick={handleNavigation}>Login</Button>
                <br/>
                <a href= "index.html">reset password</a>
            </StyledForm>

        </StyledContainer>
    );
}

export default PlaintextExample;
