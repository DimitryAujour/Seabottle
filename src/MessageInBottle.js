import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';



const StyledContainer = styled.div`
  padding-top: 50px;
`;

const StyledForm = styled(Form)`
  max-width: 450px;
  margin: 0 auto;
  padding-left: 20px;
`;

function MessageInBottle() {
    return (
        <StyledContainer>

<img src="."/>
            <StyledForm>
                <h1>Leave a bottle?</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </StyledForm>
        </StyledContainer>
    );
}
/* <a href="https://www.flaticon.com/free-icons/message-in-a-bottle" title="message in a bottle icons">
Message in a bottle icons created by Freepik - Flaticon</a>
 LINK FOR ATTRIBUTION*/

export default MessageInBottle;
