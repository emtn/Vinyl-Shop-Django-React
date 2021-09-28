import React from 'react';
import {Navbar , Nav , Container, ListGroup, Row , Col, Button} from 'react-bootstrap' //Row
import {LinkContainer} from 'react-router-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import logo from '../logo3.jpg';

import Chat from '../components/Chat'



function Header() {
    const history = useHistory();
    const loggedUser = localStorage.getItem('user')
    
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();

    //logout the user
    const handleLogout = () => {
        setUser({});
        setUsername("");
        setEmail("");
        setPassword("");
        localStorage.clear();
        history.push("/");
        window.location.reload(); 
        };

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
        // <Container fluid style={{paddingLeft:"0rem" ,
        //                         paddingRight:"0rem" ,
        //                         }}>
        //     <header>
        //         <div className="top">
                
        //             <div >
        //                 <img src= {logo} alt="alt" height="100" weight="100"/>
        //             </div>
        //             <div id="name">Vynil store</div>
        //         </div>
        //         <Container fluid>
        //             <Row>
        //                 <Navbar className="myNav" collapseOnSelect>
        //                     <Col xl={2}></Col>
        //                     <Col xl={8} className="navcenter">
        //                     <Nav className="m-auto navbar-dark" >
        //                             <LinkContainer to="/" >
        //                                 <Navbar.Brand className="navitems text-capitalize">Home</Navbar.Brand>
        //                             </LinkContainer>
                                    
        //                             <LinkContainer to="/store" className="dropdown">
        //                                 <Navbar.Brand className="navitems text-capitalize">Store</Navbar.Brand>
        //                             </LinkContainer>
        //                             <LinkContainer to="/contact" >
        //                                 <Navbar.Brand className="navitems text-capitalize">Contact</Navbar.Brand>
        //                             </LinkContainer>
        //                         </Nav>
        //                     </Col>
        //                     <Col xl={2} >       
                                
        //                             {loggedUser ?     
                                    
        //                                 <Nav className="m-auto navbar-dark right " > 
        //                                     <LinkContainer to="/profile" >
        //                                     <Navbar.Brand className="navitems text-capitalize">myProfile</Navbar.Brand>
        //                                     </LinkContainer>

        //                                     <LinkContainer to="/cart" >
        //                                         <Navbar.Brand className="navitems text-capitalize"><i className='fas fa-shopping-cart'></i>Cart</Navbar.Brand>
        //                                     </LinkContainer>
                                            
        //                                     <LinkContainer to="#">
        //                                     <Navbar.Brand className="navitems text-capitalize" onClick={handleLogout}>
        //                                     Log out
        //                                     </Navbar.Brand>
        //                                     </LinkContainer>

                                        
        //                                 </Nav>                          
        //                             :

        //                             <Nav className="m-auto navbar-dark right ">
        //                             <LinkContainer to="/signup" >
        //                                 <Navbar.Brand className="navitems text-capitalize ">Sign Up</Navbar.Brand>
        //                             </LinkContainer>

        //                                 <LinkContainer to="/login" >
        //                                         <Navbar.Brand className="navitems text-capitalize "><i className='fas fa-user'></i>Log in</Navbar.Brand>
        //                                 </LinkContainer>         
        //                             </Nav>                     
        //                             }             
        //                     </Col>
        //                 </Navbar>
        //             </Row>
        //         </Container>
            
        //     </header>
            
        // </Container>
        <header>
            <div className="top">
            
                <div id="name">Vynil store</div>
                
            </div>
            <ColoredLine color="red" height= "1px" />
            <ColoredLine color="red" height= "2px"  />
            <ColoredLine color="red" height= "3px" />
            <ColoredLine color="red" height= "5px" />
        
            <Container fluid>
                <Row>
                    <Navbar className="myNav" collapseOnSelect>
                        <Col xl={2}></Col>
                        <Col xl={8} className="navcenter">
                        <Nav className="m-auto navbar-dark" >
                                <LinkContainer to="/" >
                                    <Navbar.Brand className="navitems text-capitalize">Home</Navbar.Brand>
                                </LinkContainer>                         
                                <LinkContainer to="/store" className="dropdown">
                                    <Navbar.Brand className="navitems text-capitalize">Store</Navbar.Brand>
                                </LinkContainer>
                                {/* <LinkContainer to="/Aboutus" >
                                    <Navbar.Brand className="navitems text-capitalize">Chatroom</Navbar.Brand>
                                </LinkContainer> */}
                                <LinkContainer to="/contact" >
                                    <Navbar.Brand className="navitems text-capitalize">Contact</Navbar.Brand>
                                </LinkContainer>
                            </Nav>
                        </Col>
                        <Col xl={2} >                             
                            {loggedUser ?                                    
                                <Nav className="m-auto navbar-dark right " >
                                    <LinkContainer to="/profile" >
                                    <Navbar.Brand className="navitems text-capitalize">myProfile</Navbar.Brand>
                                    </LinkContainer>

                                    <LinkContainer to="/cart" >
                                        <Navbar.Brand className="navitems text-capitalize"><i className='fas fa-shopping-cart'></i>Cart</Navbar.Brand>
                                    </LinkContainer>
                                    
                                    <LinkContainer to="#">
                                    <Navbar.Brand className="navitems text-capitalize" onClick={handleLogout}>
                                    Log out
                                    </Navbar.Brand>
                                    </LinkContainer>                               
                                </Nav>                          
                            :
                            <Nav className="m-auto navbar-dark right ">
                            <LinkContainer to="/signup" >
                                <Navbar.Brand className="navitems text-capitalize ">Sign Up</Navbar.Brand>
                            </LinkContainer>

                                <LinkContainer to="/login" >
                                        <Navbar.Brand className="navitems text-capitalize "><i className='fas fa-user'></i>Log in</Navbar.Brand>
                                </LinkContainer>                       
                            </Nav>                     
                            }                  
                        </Col>
                    </Navbar>
                </Row>
            </Container>
    
        </header>
       
    )
}

export default Header





