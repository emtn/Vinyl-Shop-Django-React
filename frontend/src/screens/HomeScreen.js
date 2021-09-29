import React from 'react'
import { Container, Row, Col, Image, Button, Card , Carousel } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import  ControlledCarousel from '../components/ControlledCarousel';  
import AboutUs from '../components/AboutUs'; 

import home3 from '../images/home3.jpg';







function HomeScreen() {//an baloume ta product se carousel alla auto e allh selida   



    return (
        // <Container fluid style={{paddingTop:"5rem" ,
        //                          paddingBottom:"5rem" ,
        //                          paddingLeft:"0rem" ,
        //                          backgroundImage : `url(${parallax})`,                            
        //                          minHeight : "180rem",                       
        //                          backgroundAttachment: "fixed",
        //                          backgroundPosition: "center",
        //                          backgroundRepeat: "no-repeat",
        //                          backgroundSize: "cover" ,
        //                          position:"relative",
                                
        //                         }}>
        //     <Col xl={6} style={{fontSize:"80px",
        //                         fontFamily:"'Sail', cursive",
        //                         color:"white", 
        //                         textAlign:"center",
        //                         }}>
        //         <p>Welcome</p>
        //         <p>to</p>
        //         <p>Vinyl Store</p>
        //         <LinkContainer to='/store' style={{ padding:"2rem",
        //                                             fontSize:"13px",
        //                                             borderRadius:"10%",
        //                                             fontFamily:"-moz-initial"}}>
        //             <Button>Store</Button>
        //         </LinkContainer> 

        //     </Col>

        //     <Container  fluid style={{backgroundColor:"rgb(10, 10, 10)" ,
        //                               position:"absolute" ,
        //                               bottom:"60rem",
        //                               paddingRight:"3rem" ,
        //                               height:"60rem"
        //                               }}>

        //         <Row >
        //             < ControlledCarousel/>

        //         </Row>
        //     </Container>

        //     <Container fluid style={{ backgroundColor:"#E1EFF2",
        //                               position:"absolute" ,
        //                               bottom:"0",
        //                               height:"60rem",
        //                               paddingTop:"5rem"
        //                               }}>
        //       <AboutUs/>

        //     </Container>



        // </Container>
            <Container fluid style={{paddingTop:"5rem" ,
                                     paddingBottom:"5rem" ,
                                     paddingLeft:"0rem" ,
                                     backgroundImage : `url(${home3})`,                            
                                     minHeight : "180rem",                       
                                     backgroundAttachment: "fixed",
                                     backgroundPosition: "center",
                                     backgroundRepeat: "no-repeat",
                                     backgroundSize: "cover" ,
                                     position:"relative",
                                      }}>
                <Col xl={6} style={{fontSize:"80px",
                                    fontFamily:"Trebuchet  ",
                                    color:"white", 
                                    textAlign:"center",
                                }}>
                    <Col style = {{  backgroundColor: "rgba(0, 0, 0, 0.28)",
                            borderRadius: "0%",
                            marginRight: "6rem",
                            marginLeft :"14rem",
                            width: "70%",
                            }}>
                        <p>Welcome</p>
                        <p>to</p>
                        <p>Vinyl Store</p>
                        <LinkContainer to='/store' style={{ padding:"2rem",
                                                            fontSize:"13px",
                                                            borderRadius:"10%",
                                                            fontFamily:"-moz-initial"
                                                          }}>
                        <Button>Store</Button>
                        </LinkContainer> 
        
                    </Col>

                </Col>

                <Container  fluid style={{backgroundColor:"rgb(10, 10, 10)" ,
                            position:"absolute" ,
                            bottom:"60rem",
                            paddingRight:"3rem" ,
                            height:"60rem"
                                        }}>
                    <Row >
                        < ControlledCarousel/>
                    </Row>
                </Container>
                <Container fluid style={{ backgroundColor:"brown",
                            position:"absolute" ,
                            bottom:"0",
                            height:"60rem",
                            paddingTop:"1rem"
                            }}>
                <AboutUs/>
                </Container>
            </Container>                      
    )
}
export default HomeScreen