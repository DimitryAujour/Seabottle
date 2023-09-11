
import styled from 'styled-components';
import Button from "react-bootstrap/Button";
import bottleImage from './bottle.png';
import Form from "react-bootstrap/Form";
import React from "react"; // assuming you want the same image here too

const StyledContainer = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledMessage = styled.div`
  max-width: 450px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
`;

function ReadBottle() {
    return (
        <StyledContainer>
            <img src={bottleImage} alt="logo image" />
            <h1>Discover a Message</h1>
            <StyledMessage>
                <p>Here's a message from another user...</p>
            </StyledMessage>
            <div>
                <StyledButton variant="primary">Next Message</StyledButton>
                <StyledButton variant="secondary">Previous Message</StyledButton>
                <StyledButton variant="success">Upvote</StyledButton>
            </div>
            <br/>

            <Form.Control as="textarea" rows={3} placeholder={"type here to reply"} />
            <StyledButton variant="success">Send</StyledButton>
        </StyledContainer>
    );
}

export default ReadBottle;
