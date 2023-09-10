import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

const StyledLabel = styled(Form.Label)`
  color: red;
`;
function PlaintextExample() {
    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <StyledLabel column sm="2">Email</StyledLabel>
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
        </Form>
    );
}

export default PlaintextExample;
