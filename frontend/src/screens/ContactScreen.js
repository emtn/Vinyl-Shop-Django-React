import React from 'react'
import { Container, Row, Col, Image , Card } from 'react-bootstrap'
import contact_logo from '../images/contact3.jpg';
import SimpleMap, { MapComponent } from '../components/Googlemaps';






function ContactScreen() {

    const ColoredLine = ({ color, height }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: height
            }}
        />
    );  
    return (
            <Container fluid style={{paddingTop:"5rem" ,
                                     paddingBottom:"5rem" ,
                                     paddingLeft:"3rem" ,
                                     paddingRight:"3rem" ,
                                     backgroundColor:"DarkSlateGrey"}}>
                <Row>
                    <Col >                    
                        <Card  style={{width:"86%" ,
                                       height: "100%",
                                       marginLeft: "11%",
                                       backgroundColor : "black",
                                       color : "white",
                                       borderRadius:"1%",
                                       }} >
                                <Card.Body>
                                    <Card.Title style = {{ 
                                                           textAlign: "center",
                                                            paddingTop: "7%",
                                                            fontSize : "42px", }}>Contact Us</Card.Title>
                                    <Card.Text style = {{ textAlign: "center", fontSize : "15px", paddingTop: "3rem", fontFamily : "verdana",}}>
                                                39 Panepistimiou street, 10564 , Athens.
                                    </Card.Text>
                                    <Card.Text style = {{ textAlign: "center", fontSize : "15px", paddingTop: "1rem",}}>
                                                vinylstoreathens@gmail.com  
                                    </Card.Text>
                                    <Card.Text style = {{ textAlign: "center", fontSize : "15px", paddingTop: "1rem",}}>
                                            +30 210 3729100
                                    </Card.Text>
                                    <Card.Text style = {{ textAlign: "center", fontSize : "15px", paddingTop: "4rem",}}>
                                            PTeam : Aggelos,Christos,Dimitris,Giorgos,Semeli
                                    </Card.Text>
                                    <ColoredLine color="white" height= "1px" />
                                </Card.Body>
                            </Card>
                    </Col>
                    <Col >
                                <Container style = {{ marginRight : "3rem",
                                                      marginLeft : "0rem", }}>
                              <Image src = {contact_logo} alt='imagesmth' style={{ height:"40rem" ,
                                                                                        width : '92%' ,
                                                                                        marginRight:"10%",
                                                                                        paddingRight : "0rem",
                                                                                        marginRight : "0rem",
                                                                                        marginLeft : "0rem",
                                                                                        borderRadius:"1%",}}/>
                        </Container>
                    </Col>
                </Row>
                <Row>                   
                    <Container style={{width:"50%" , height: "50%", paddingTop : "2rem", marginLeft: "14%",}}>
                                       <SimpleMap/>
                    </Container>
                </Row>
            </Container>
    )
}

export default ContactScreen