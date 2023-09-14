import React from "react";
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

// Importing firebase auth function from within the src directory
import { auth } from './config/firebase';

// To sign up a user
function signUp(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Sign-up successful
            const user = userCredential.user;
            console.log('Successfully created new user:', user.uid);
        })
        .catch((error) => {
            console.error('Error creating new user:', error.message);
        });
}

// To sign in a user
function signIn(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Sign-in successful
            var user = userCredential.user;
        })
        .catch((error) => {
            console.error("Error signing in:", error.message);
        });
}

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
  justify-content: center;
  gap: 60px;
  
  img {
    max-width: 100%;
    padding: 0 20px;
  }
`;

function PlaintextExample() {
    let navigate = useNavigate();

    const handleNavigation = (event) => {
        event.preventDefault();  // prevent the default form submission
        navigate('/message-in-bottle');
    };

    return (
        <StyledContainer>
            <StyledHeader>
                <img src={logo} alt="logo image" />
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
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Button type="submit" onClick={(e) => handleNavigation(e)}>Login</Button>
                <br/>
                <a href= "index.html">reset password</a>
            </StyledForm>
        </StyledContainer>
    );
}

export default PlaintextExample;
