import styled from 'styled-components';
import Button from "react-bootstrap/Button";
import bottleImage from './bottle.png';
import Form from "react-bootstrap/Form";
import React from "react";

// Firestore imports
import { db } from './config/firebase';
import { query, getDocs, collection, updateDoc, doc } from "firebase/firestore";

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
    const [message, setMessage] = React.useState(null);

    React.useEffect(() => {
        const fetchRandomMessage = async () => {
            try {
                const messagesSnapshot = await getDocs(collection(db, "messages"));
                const allMessages = messagesSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                const randomMessage = allMessages[Math.floor(Math.random() * allMessages.length)];
                setMessage(randomMessage);
            } catch (error) {
                console.error('Error fetching a random message:', error);
            }
        }
        fetchRandomMessage();
    }, []);

    const handleUpvote = async () => {
        if (message) {
            const messageRef = doc(db, "messages", message.id);
            await updateDoc(messageRef, { upvotes: message.upvotes + 1 });
            setMessage(prevMessage => ({ ...prevMessage, upvotes: prevMessage.upvotes + 1 }));
        }
    }

    return (
        <StyledContainer>
            <img src={bottleImage} alt="logo image" />
            <h1>Discover a Message</h1>
            <StyledMessage>
                <p>{message?.body}</p>
            </StyledMessage>
            <div>
                <StyledButton variant="primary">Next Message</StyledButton>
                <StyledButton variant="secondary">Previous Message</StyledButton>
                <StyledButton variant="success" onClick={handleUpvote}>Upvote</StyledButton>
            </div>

            <br/>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <br/>
                <Form.Control as="textarea" rows={3} placeholder={"Reply here"}/>
            </Form.Group>
            <StyledButton variant="success">Send</StyledButton>
        </StyledContainer>
    );
}

export default ReadBottle;
