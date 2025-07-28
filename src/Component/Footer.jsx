import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Footer() {
    return (
        <footer style={{ background: 'linear-gradient(to left, #b3e2f7ff, #f5eee1ff)', color: '#333', padding: '50px 0' }}>
            <Container>
                <Row>
                    {/* Info Section */}
                    <Col md={6} className="mb-4">
                        <h4 style={{ color: '#ff6600', fontWeight: 'bold' }}>EquipHealth</h4>
                        <p>Your trusted partner for modern medical equipment advertising.</p>

                        <div className="mt-4">
                            <h6 style={{ color: '#ff6600' }}>Contact Us</h6>
                            <p className="mb-1"><strong>Email:</strong> contact@equiphealth.com</p>
                            <p className="mb-1"><strong>Phone:</strong> +91 98765 43210</p>
                            <p><strong>Location:</strong> 123 Health Street, Kochi, India</p>
                        </div>
                    </Col>

                    {/* Feedback Form */}
                    <Col md={6}>
                        <h5 style={{ color: '#ff6600' }}>Send Us Feedback</h5>
                        <Form>
                            

                            <Form.Group className="mb-3" controlId="formFeedback">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Your feedback" />
                            </Form.Group>

                            <Button variant="warning" type="submit" className="text-white" style={{ backgroundColor: '#ff6600', border: 'none' }}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

                <hr style={{ borderColor: '#ccc', marginTop: '40px' }} />
                <p className="text-center mb-0" style={{ color: '#555' }}>
                    &copy; 2025 <span style={{ color: '#ff6600' }}>EquipHealth</span>. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}

export default Footer;
