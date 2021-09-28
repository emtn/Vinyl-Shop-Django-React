import React from 'react'
import { Container, Row, Col, Image , Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import contact_logo from '../about2.jpg';


function ContactScreen() {
    return (
        
            <Container fluid style={{paddingTop:"5rem" ,
                                     paddingBottom:"5rem" ,
                                     paddingLeft:"3rem" ,
                                     paddingRight:"3rem" ,
                                     backgroundColor:"#BC2828"}}>
                <Row>

                    <Col xl={6} sm={12}  >
                      
                        <Card  style={{width:"100%" , height: "100%"}} >
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                       

                    </Col>

                    <Col xl={6} sm={12} >
                        <Container style={{width:"100%" , height: "100%"}}>
                              <Image src = {contact_logo} alt='imagesmth'fluid/>
                        </Container>
                    </Col>
                </Row>

                <Row>
                    {/* <LinkContainer to='/map'>MAP</LinkContainer> */}
                </Row>
            </Container>


      
    )
}

export default ContactScreen