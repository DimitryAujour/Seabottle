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
  max-width: 450px; 
  margin: 0 auto;
  padding-left: 20px;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: center; // 
  gap: 60px; 
  
  img {
    max-width: 100%; //
    padding: 0 20px; 
  }
`;





function PlaintextExample() {
    let navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/message-in-bottle');
    };
    return (

        <StyledContainer>
            <StyledHeader>
                <img src="./logo.png" alt="logo image" />

            </StyledHeader>
            <StyledForm>

                <h1>Welcome to the sea!</h1>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="email" placeholder="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Password
                    </Form.Label>
                    <Col sm="8">
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
