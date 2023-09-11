import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import bottleImage from './bottle.png';
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";


const StyledContainer = styled.div`
  padding-top: 50px;
`;

const StyledForm = styled(Form)`
  max-width: 450px;
  margin: 0 auto;
  padding-left: 20px;
`;

function MessageInBottle() {
    let navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/ReadBottle');
    };

    return (
        <StyledContainer>


            <StyledForm>
                <img src={bottleImage}  alt="logo image" />
                <h1>Leave a bottle?</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label><h3>Title</h3> <br/></Form.Label>
                    <Form.Control type="text" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><h3>Your Message</h3> <br/></Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" onClick={handleNavigation}>Send</Button>
                <br/>
                <a href="/read-bottle">Read a Bottle</a> {/* Link to the new component */}
            </StyledForm>
        </StyledContainer>
    );
}
/* <a href="https://www.flaticon.com/free-icons/message-in-a-bottle" title="message in a bottle icons">
Message in a bottle icons created by Freepik - Flaticon</a>
 LINK FOR ATTRIBUTION*/

export default MessageInBottle;
