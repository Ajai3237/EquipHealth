import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Footer() {
    return (
        <>
            <footer style={{ backgroundColor: '#ff6600', color: 'white', padding: '40px 0' }}>
                <Container>
                    <Row>
                        {/* Left Side - Info */}
                        <Col md={6} className="mb-4">
                            <h5>EquipHealth</h5>
                            <p>Your trusted partner for modern medical equipment advertising.</p>
                            <h6 className="mt-4">Contact Us</h6>
                            <p>Email: contact@equiphealth.com</p>
                            <p>Phone: +91 98765 43210</p>
                            <p>Location: 123 Health Street, Kochi, India</p>
                        </Col>

                       
                        <Col md={6}>
                            <h6>Send Us Feedback</h6>
                            <Form>
                                <Form.Group className="mb-2" controlId="formName">
                                    <Form.Label className="text-white">Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formEmail">
                                    <Form.Label className="text-white">Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formFeedback">
                                    <Form.Label className="text-white">Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Your feedback" />
                                </Form.Group>

                                <Button variant="light" type="submit" className="mt-2">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>

                    <hr style={{ borderColor: 'rgba(255,255,255,0.3)' }} />
                    <p className="text-center mb-0">&copy; 2025 EquipHealth. All rights reserved.</p>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
