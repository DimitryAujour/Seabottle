import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import bottleImage from './bottle.png';
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { db } from './config/firebase'; // Update this path accordingly
import { addDoc, collection } from "firebase/firestore";

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
    const [title, setTitle] = useState(''); // For holding the title
    const [message, setMessage] = useState(''); // For holding the message

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleNavigation = async () => {
        try {
            await addDoc(collection(db, "messages"), {
                title: title,
                body: message,
                timestamp: new Date(),
                upvotes: 0
            });
            console.log("Message added successfully.");
            navigate('/ReadBottle');
        } catch (e) {
            console.error("Error adding message: ", e);
        }
    };

    return (
        <StyledContainer>
            <StyledForm>
                <img src={bottleImage}  alt="logo image" />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label><h3>Title of the message</h3> <br/></Form.Label>
                    <Form.Control type="text" placeholder="Enter title here..." value={title} onChange={handleTitleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><h3>Your Message</h3> <br/></Form.Label>
                    <Form.Control as="textarea" rows={3} value={message} onChange={handleMessageChange} />
                </Form.Group>
                <Button type="submit" onClick={handleNavigation}>Send</Button>
                <br/>
                <Link to="/read-bottle">Read a Bottle</Link>
            </StyledForm>
        </StyledContainer>
    );
}

export default MessageInBottle;
