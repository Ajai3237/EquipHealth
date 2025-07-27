import React from 'react'
import { Navbar, Container, Form, Button, FormControl } from 'react-bootstrap';

function Header() {

    return (
        <>
            <Navbar style={{  background: 'linear-gradient(to right, #b3e2f7ff, #ffffff)'}}  expand="lg" variant="light" className="shadow-sm" sticky="top">
                <Container >
                    <Navbar.Brand href="/" className="fw-bold text-primary fs-3">
                        Equip<span style={{ color: '#ff6600' }}>Health</span>
                    </Navbar.Brand>

                    <Form className="d-flex mx-auto" style={{ width: '40%' }}>
                        <FormControl
                            style={{ borderRadius: '20px' }}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button style={{ borderRadius: '20px' }} variant="outline-primary">
                            Search
                        </Button>
                    </Form>

                    <div className="">
                        <h5 style={{fontWeight:'bold' , fontSize:'15px' , marginTop:'10px',color:'#454342ff'}}><i  class="fa-regular fa-user fa-lg "></i>  LOGIN</h5>

                    </div>
                    <div className="ms-5">
                        <i style={{color:'#454342ff'}} class="fa-solid fa-cart-shopping"></i>
                    </div>
                </Container>
            </Navbar>




        </>
    )
}

export default Header