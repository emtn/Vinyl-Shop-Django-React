import React from 'react'
import { Container, Row, Col, Image ,Card , Button} from 'react-bootstrap'
import {LinkContainer}  from 'react-router-bootstrap'
import about from '../images/about3.jpg';

function AboutUs() {

//

    return (
            <Row style = {{ backgroundColor: "brown", paddingTop : "4rem", }}>
            <Col  xs={6} md={4} xl={6} lg={6} style = {{ paddingTop : "3rem", }}>
                <Card style={{width : '85%' ,
                              height :'44rem' ,
                              textAlign:"center",  
                              marginLeft:"12%",
                              paddingTop: "3rem",
                              backgroundColor : "black",
                              color : "white",
                              borderRadius:"1%",
                            }}>
                    <Card.Body>
                        <Card.Title><p style={{fontSize:"33px",paddingTop: "3rem",}}>
                            About Us</p>
                        </Card.Title>
                        <Card.Text style = {{ fontSize : "160%", textAlign: "center", paddingTop: "3rem", fontFamily: "Trebuchet MS",}}>
                            <p>Get to know vinyl store, a top Online Record Store launched in 2021.<p></p>
                            Our company was founded by PythonTeam thanks to a fundamental love and passion for coding.
                            As the music industry embraces mp3s and a more digital strategy, vinyl store is proving to be a force to be reckoned with.
                            Whatever sort of music you need, we’ve got you covered. Call us today to learn more about us.</p>
                        </Card.Text>
                        <Col >
                            <LinkContainer to='/contact' style={{position:"absolute" ,
                                                                right:"43%",
                                                                bottom:"5rem",
                                                                padding:"17px",
                                                                borderRadius:"5%",
                                                                backgroundColor: "CadetBlue",
                                                                fontSize: "90%",
                                                                fontFamily : "Helvetica  ",
                                                                color: "white",
                                                                }}>
                                <Button>Contact</Button>
                            </LinkContainer> 
                        </Col>
                    </Card.Body>
                </Card>
            </Col>
            <Col  xs={6} md={4} xl={6} lg={6}>
                <Container fluid>
                    <Image src={about}fluid Link to='/store' style={{height:"50rem" ,
                                                                    width : '87%' ,
                                                                    marginRight:"10%",
                                                                    borderRadius:"1%",}}/>
                </Container>
            </Col>
        </Row>
    )
}

 export default AboutUs