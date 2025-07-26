import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import "../css/Content.css";



function Content() {
    const features = [
        {
            icon: 'fa-truck-fast',
            title: 'Free Shipping',
            description: 'Free shipping on all orders or orders above ₹2000',
        },
        {
            icon: 'fa-headset',
            title: 'Support 24/7',
            description: 'Contact us 24 hours a day, 7 days a week',
        },
        {
            icon: 'fa-rotate-left',
            title: '30 Days Return',
            description: 'Return within 30 days for an exchange',
        },
        {
            icon: 'fa-shield-halved',
            title: '100% Payment Secure',
            description: 'We ensure secure payment with PCI',
        },
    ];

    const services = [
        {
            title: "Equipment Rental",
            image: "/1738910966.jpg", 
            description: "Rent essential medical devices for home and hospital use.",
        },
        {
            title: "Warranty & Support",
            image: "/blog-warranty.webp",
            description: "Enjoy post-purchase warranty, maintenance, and customer support.",
        },
        {
            title: "Bulk Order Facility",
            image: "/Bulk-Order-Form-For-WooCommerce.png",
            description: "Special pricing and order management for hospitals and clinics.",
        },
        {
            title: "Installation Service",
            image: "/8280c6b4bc162bae0c296736508a06c0.webp",
            description: "We offer trained technician visits for large equipment setup.",
        },
    ];
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="/ai.png"
                            style={{ height: '700px', objectFit: '', objectPosition: 'center cneter' }}
                            className="d-block w-100"
                            alt="Slide 1"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/pexels-karolina-grabowska-8539512.jpg"
                            style={{ height: '700px', objectFit: 'cover', objectPosition: 'center center' }}
                            className="d-block w-100"
                            alt="Slide 2"
                        />

                    </div>
                    <div className="carousel-item">
                        <img
                            src="/pexels-mix-and-match-studio-2662809-4227112.jpg"
                            style={{ height: '700px', objectFit: 'cover', objectPosition: 'center center' }}
                            className="d-block w-100"
                            alt="Slide 3"
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* services that we providing */}

            <Container className="my-5">
                <h2 className="text-center mb-4 fw-bold text-primary" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
                    Our Services
                </h2>
                <Row className="g-4">
                    {services.map((service, index) => (
                        <Col key={index} md={6} lg={3}>
                            <Card className="h-100 shadow border-0 text-center service-card">
                                <Card.Img variant="top" src={service.image} style={{ height: '180px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title className="fw-bold fs-6">{service.title}</Card.Title>
                                    <Card.Text style={{ fontSize: '0.85rem', color: '#555' }}>
                                        {service.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>




            <section
                className="d-flex flex-wrap justify-content-center align-items-center gap-3  py-5"
                style={{ borderRadius: '12px' }}
            >
                <div
                    className="px-4 py-2 fw-bold shadow-lg"
                    style={{ backgroundColor: '#d0eaff', borderRadius: '30px' }} >
                    Most Popular
                </div>
                <div
                    className="px-4 py-2 fw-bold shadow-lg"
                    style={{ backgroundColor: '#d0eaff', borderRadius: '30px' }} >
                    Deal of the day
                </div>
            </section>

            {/* cards */}

            <Container className="my-4 d-flex justify-content-space-between flex-wrap gap-5">
                {/* card 1 */}

                <Card style={{ width: '18rem' }} className="shadow-lg  border-0">
                    <Card.Img
                        variant="top"
                        src="/dpipestetho1-550x550.jpg"
                        alt="Stethoscope"
                        style={{ height: '25vh', objectFit: 'cover' }}
                    />
                    <Card.Body className="p-2">
                        <Card.Title className="fw-bold text-primary fs-6 mb-1">Stethoscope</Card.Title>
                        <div className="mb-1" style={{ color: '#ffc107', fontSize: '0.9rem' }}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <FaRegStar />
                        </div>

                        <h6 className="text-success mb-2">₹1,999</h6>

                        <Card.Text className="mb-2 text-muted" style={{
                            fontSize: '0.85rem',
                            lineHeight: '1.2rem',
                            height: '2.4rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            High-quality acoustic stethoscope ideal for clinical use.
                        </Card.Text>

                        <div className="d-grid">
                            <Button variant="primary" size="sm">Buy Now</Button>
                        </div>
                    </Card.Body>
                </Card>
                {/* card 2 */}

                <Card style={{ width: '18rem' }} className="shadow-lg  border-0">
                    <Card.Img
                        variant="top"
                        src="/heartrate-monitor.jpg"
                        alt="Stethoscope"
                        style={{ height: '25vh', objectFit: 'cover' }}
                    />
                    <Card.Body className="p-2">
                        <Card.Title className="fw-bold text-primary fs-6 mb-1"> Digital Blood Pressure Monitor </Card.Title>
                        <div className="mb-1" style={{ color: '#ffc107', fontSize: '0.9rem' }}>
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <FaRegStar />
                            <FaRegStar />
                        </div>

                        <h6 className="text-success mb-2">₹3,999</h6>

                        <Card.Text className="mb-2 text-muted" style={{
                            fontSize: '0.85rem',
                            lineHeight: '1.2rem',
                            height: '2.4rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            Fully Automatic Digital Blood Pressure Monitor with IntelliSense Technology
                        </Card.Text>

                        <div className="d-grid">
                            <Button variant="primary" size="sm">Buy Now</Button>
                        </div>
                    </Card.Body>
                </Card>

                {/* card 3 */}

                <Card style={{ width: '18rem' }} className="shadow-lg  border-0">
                    <Card.Img
                        variant="top"
                        src="/medical_shop_8.webp"
                        alt="Stethoscope"
                        style={{ height: '25vh', objectFit: 'cover' }}
                    />
                    <Card.Body className="p-2">
                        <Card.Title className="fw-bold text-primary fs-6 mb-1">Forehead Thermometer</Card.Title>
                        <div className="mb-1" style={{ color: '#ffc107', fontSize: '0.9rem' }}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>

                        <h6 className="text-success mb-2">₹899</h6>

                        <Card.Text className="mb-2 text-muted" style={{
                            fontSize: '0.85rem',
                            lineHeight: '1.2rem',
                            height: '2.4rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            measuring temperature without physical contact, offering a hygienic and convenient way to check body temperature
                        </Card.Text>

                        <div className="d-grid">
                            <Button variant="primary" size="sm">Buy Now</Button>
                        </div>
                    </Card.Body>
                </Card>

                {/* card 4 */}

                <Card style={{ width: '18rem' }} className="shadow-lg  border-0">
                    <Card.Img
                        variant="top"
                        src="/medical_shop_11.jpg"
                        alt="Stethoscope"
                        style={{ height: '25vh', objectFit: 'cover' }}
                    />
                    <Card.Body className="p-2">
                        <Card.Title className="fw-bold text-primary fs-6 mb-1"> Digital thermometer</Card.Title>
                        <div className="mb-1" style={{ color: '#ffc107', fontSize: '0.9rem' }}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <FaRegStar />
                        </div>

                        <h6 className="text-success mb-2">₹399</h6>

                        <Card.Text className="mb-2 text-muted" style={{
                            fontSize: '0.85rem',
                            lineHeight: '1.2rem',
                            height: '2.4rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            Digital thermometer for measuring body temperature.
                        </Card.Text>

                        <div className="d-grid">
                            <Button variant="primary" size="sm">Buy Now</Button>
                        </div>
                    </Card.Body>
                </Card>

                {/* card 5 */}

                <Card style={{ width: '18rem' }} className="shadow-lg  border-0">
                    <Card.Img
                        variant="top"
                        src="/medical-mercury-thermometer-diagnostic-temperature-instrument-human-body-vector-illustration-medical-mercury-thermometer-113075440.webp"
                        alt="Stethoscope"
                        style={{ height: '25vh', objectFit: 'cover' }}
                    />
                    <Card.Body className="p-2">
                        <Card.Title className="fw-bold text-primary fs-6 mb-1">Mercury Thermometer</Card.Title>
                        <div className="mb-1" style={{ color: '#ffc107', fontSize: '0.9rem' }}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <FaRegStar />
                        </div>

                        <h6 className="text-success mb-2">₹999</h6>

                        <Card.Text className="mb-2 text-muted" style={{
                            fontSize: '0.85rem',
                            lineHeight: '1.2rem',
                            height: '2.4rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            Designed for precise body temperature measurement in both clinical and home settings.
                        </Card.Text>

                        <div className="d-grid">
                            <Button variant="primary" size="sm">Buy Now</Button>
                        </div>
                    </Card.Body>
                </Card>

                {/* card 6  */}
                <Card style={{ width: '18rem' }} className="shadow-lg  border-0">
                    <Card.Img
                        variant="top"
                        src="/welch-allyn-braun-thermoscan-pro-6000-ear-thermometer.jpg"
                        alt="Stethoscope"
                        style={{ height: '25vh', objectFit: 'cover' }}
                    />
                    <Card.Body className="p-2">
                        <Card.Title className="fw-bold text-primary fs-6 mb-1"> ThermoScan Ear Thermometer</Card.Title>
                        <div className="mb-1" style={{ color: '#ffc107', fontSize: '0.9rem' }}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <FaRegStar />
                        </div>

                        <h6 className="text-success mb-2">₹6,999</h6>

                        <Card.Text className="mb-2 text-muted" style={{
                            fontSize: '0.85rem',
                            lineHeight: '1.2rem',
                            height: '2.4rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            Braun ThermoScan PRO 6000 Ear Thermometer.
                        </Card.Text>

                        <div className="d-grid">
                            <Button variant="primary" size="sm">Buy Now</Button>
                        </div>
                    </Card.Body>
                </Card>

                {/* card 7  */}

                <Card style={{ width: '18rem' }} className="shadow-lg  border-0">
                    <Card.Img
                        variant="top"
                        src="/self-check-manual-bp-machine-500x500.jpg"
                        alt="Stethoscope"
                        style={{ height: '25vh', objectFit: 'cover' }}
                    />
                    <Card.Body className="p-2">
                        <Card.Title className="fw-bold text-primary fs-6 mb-1">Manual  Blood Pressure Monitor</Card.Title>
                        <div className="mb-1" style={{ color: '#ffc107', fontSize: '0.9rem' }}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                        </div>

                        <h6 className="text-success mb-2">₹1,999</h6>

                        <Card.Text className="mb-2 text-muted" style={{
                            fontSize: '0.85rem',
                            lineHeight: '1.2rem',
                            height: '2.4rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            Designed for self-measurement, featuring a stethoscope integrated into the cuff for convenience.
                        </Card.Text>

                        <div className="d-grid">
                            <Button variant="primary" size="sm">Buy Now</Button>
                        </div>
                    </Card.Body>
                </Card>

                {/* card 8 */}

                <Card style={{ width: '18rem' }} className="shadow-lg  border-0">
                    <Card.Img
                        variant="top"
                        src="/515TFsCuklL._UF350,350_QL80_.jpg"
                        alt="Stethoscope"
                        style={{ height: '25vh', objectFit: 'cover' }}
                    />
                    <Card.Body className="p-2">
                        <Card.Title className="fw-bold text-primary fs-6 mb-1">ECG Monitor</Card.Title>
                        <div className="mb-1" style={{ color: '#ffc107', fontSize: '0.9rem' }}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <FaRegStar />
                        </div>

                        <h6 className="text-success mb-2">₹6,999</h6>

                        <Card.Text className="mb-2 text-muted" style={{
                            fontSize: '0.85rem',
                            lineHeight: '1.2rem',
                            height: '2.4rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            monitoring heart rate and rhythm, and identifying signs of heart attacks or other cardiac issues.
                        </Card.Text>

                        <div className="d-grid">
                            <Button variant="primary" size="sm">Buy Now</Button>
                        </div>
                    </Card.Body>
                </Card>
                {/*  */}


                <h2 style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)' }} className="text-center mb-4 fw-bold"> OUR MEDICAL EQUIPMENTS </h2>
                <Row>

                    <Col md={7}>

                        <Row className="mb-3">
                            <Col xs={6}>
                                <div style={{ position: 'relative' }}>
                                    <img
                                        style={{ height: '100%' }}
                                        src="/wheelchair-positioning-seating-modification-1.jpg"
                                        alt="Wheelchair"
                                        className="img-fluid rounded shadow-lg"
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            left: '10px',
                                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                            color: 'white',
                                            padding: '6px 12px',
                                            borderRadius: '5px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Wheelchairs
                                    </div>
                                </div>
                            </Col>

                            <Col xs={6}>
                                <div style={{ position: 'relative' }}>
                                    <img
                                        src="/surgical-instruments-800x534-1.jpg"
                                        alt="Surgery Equipment"
                                        className="img-fluid rounded shadow-lg"
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            left: '10px',
                                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                            color: 'white',
                                            padding: '6px 12px',
                                            borderRadius: '5px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Surgery Equipment
                                    </div>
                                </div>
                            </Col>
                        </Row>



                        <Row>
                            <Col className="position-relative">
                                <img
                                    src="/pexels-pavel-danilyuk-7108425.jpg"
                                    alt="Lab Equipment"
                                    className="img-fluid rounded shadow-lg"
                                />
                                <h3 className="position-absolute top-50 start-50 translate-middle text-white bg-dark bg-opacity-50 px-2 py-2 rounded">
                                    EKG Monitor
                                </h3>
                            </Col>
                        </Row>
                    </Col>


                    <Col md={5} className="position-relative">
                        <img
                            src="/pexels-mubariz-mammadli-269811889-12801029.jpg"
                            alt="Modern Equipment"
                            className="img-fluid rounded shadow-lg"
                        />
                        <h3 className="position-absolute top-50 start-50 translate-middle text-white bg-dark bg-opacity-50 px-2 py-2 rounded">
                            Modern Equipment
                        </h3>
                    </Col>
                </Row>



                {/* RECENTLY ADDED  */}

                <h2 style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)' }} className="text-center mb-4 fw-bold  "> RECENTLY ADDED </h2>

                <div style={{ marginTop: '70px' }} className="d-flex justify-content-between  gap-4">
                    {/* Card 1 */}
                    <Card style={{ width: '18rem' }} className="shadow-lg border-0">
                        <Card.Img
                            variant="top"
                            src="/64-Slice-GE-Optima-CT660-CT-Scan-Machine.jpg"
                            alt="Stethoscope"
                            style={{ height: '25vh', objectFit: 'cover' }}
                        />
                        <Card.Body className="p-2">
                            <Card.Title className="fw-bold text-primary fs-6 mb-1">MRI Scanning</Card.Title>
                            <div className="mb-1" style={{ color: '#ffc107', fontSize: '0.9rem' }}>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <h6 className="text-success mb-2">₹31,999</h6>
                            <Card.Text
                                className="mb-2 text-muted"
                                style={{
                                    fontSize: '0.85rem',
                                    lineHeight: '1.2rem',
                                    height: '2.4rem',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                MRI scans based on their inherent properties and how they react to magnetic fields and radiofrequency pulses
                            </Card.Text>
                            <div className="d-grid">
                                <Button style={{ backgroundColor: '#ff6600', color: '#fff' }} variant="" size="sm">
                                    Buy Now
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Card 2 */}
                    <Card style={{ width: '18rem' }} className="shadow-lg border-0">
                        <Card.Img
                            variant="top"
                            src="/Respiratory_Health_Monitor_Measurement_Chart_2_480x480.webp"
                            alt="Blood Pressure Monitor"
                            style={{ height: '25vh', objectFit: 'cover' }}
                        />
                        <Card.Body className="p-2">
                            <Card.Title className="fw-bold text-primary fs-6 mb-1">
                                Finger Pulse Oximeter
                            </Card.Title>
                            <div className="mb-1" style={{ color: '#ffc107', fontSize: '0.9rem' }}>
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <h6 className="text-success mb-2">₹2,599</h6>
                            <Card.Text
                                className="mb-2 text-muted"
                                style={{
                                    fontSize: '0.85rem',
                                    lineHeight: '1.2rem',
                                    height: '2.4rem',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                monitoring pulse oxygen saturation (SpO2), pulse rate (PR), and perfusion index (PI).
                            </Card.Text>
                            <div className="d-grid">
                                <Button style={{ backgroundColor: '#ff6600', color: '#fff' }} variant="" size="sm">
                                    Buy Now
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>


                {/* others */}
                <div style={{ marginLeft: '70px' }} className="">
                    <Row className="text-center  mt-5 mb-3">
                        {features.map((feature, index) => (
                            <Col key={index} md={3} sm={6}>
                                <div>
                                    <div
                                        className="mx-auto mb-3 d-flex justify-content-center align-items-center rounded-circle shadow-sm"
                                        style={{ width: '70px', height: '70px', backgroundColor: '#e9ecef' }}
                                    >
                                        <i className={`fa-solid ${feature.icon}`} style={{ fontSize: '24px' }}></i>
                                    </div>
                                    <h6 className="fw-bold text-uppercase">{feature.title}</h6>
                                    <p className="small text-muted">{feature.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>







            </Container>



        </>
    );
}

export default Content;
