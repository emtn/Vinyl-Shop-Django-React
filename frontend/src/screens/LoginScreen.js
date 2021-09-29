import { useState, useEffect } from "react";
import { Container, Form, Button , Row , Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

import image1 from '../images/about2.jpg';



function LoginScreen() {
    
    const [username , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
    const history = useHistory();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    // login the user
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {  username , password };
        
        // send the username,email and password to the server
        
        const response = await axios.post("/api/users/login/", user);
        // set the state of the user

        setUser(response.data);
        


        // store the user in localStorage
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("allEntries", JSON.stringify([]));
        localStorage.setItem("ShippingAddress", JSON.stringify([]));
        localStorage.setItem("paymentMethod", JSON.stringify(''));
        
        history.push("/");
        window.location.reload();
    };


    return (
    
            <Row style={{
                height: "490px",
            }} > 
                <Col md={6} style={{
                    backgroundColor: "DarkCyan",
                }}>
                    <Container>
                        <Container style={{
                            margin: "3%",
                            paddingTop: "2%",
                            marginLeft: "41%",
    
                        }}>
                            <h3 style={{ fontSize: "24px", fontWeight: "900", }}>Log in </h3>
                        </Container>
                        <Form onSubmit={handleSubmit} style = {{color:"black",}}>
                            <Form.Group className="mb-2" controlId="formBasicName" >
                                <Form.Label style={{ fontSize: "18px", }} column="lg"  > Email </Form.Label>
                                <Col xs={9} >
                                    <Form.Control style={{ borderRadius: "5px", fontSize: "15px",}} type="email" placeholder="Name" onChange={({ target }) => setEmail(target.value)}/>
                                </Col> 
                            </Form.Group> 
                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label style={{ fontSize: "18px", }} column="lg"  >Password</Form.Label>
                                <Col xs={12} >
                                    <Form.Control style={{ borderRadius: "5px", fontSize: "15px",}} type="password" placeholder="Password" onChange={({ target }) => setPassword(target.value)}/>
                                </Col>
                            </Form.Group>
                            <Button className="submitButton1" type="submit" style={{
                                                                                    margin: "40px",
                                                                                    marginTop: "20px",
                                                                                    paddding: "15px",
                                                                                    marginLeft: "41%",
                                                                                    width: "120px",
                                                                                    height: "50px",
                                                                                    fontSize: "15px",
                                                                                    borderRadius: "5px",  
                                                                                    }}   
                                variant="primary" type="submit" >
                                Log in
                            </Button>  
                        </Form>
                        <Container style={{
                            fontSize: "20px",
                            paddingTop: "0%",
                        }}>
                            <h3 style = {{paddingLeft: "14rem",}}>You dont have an account? <Link to="/signup" style={{
                                color: "blue",
                                paddingLeft: "1rem",
                            }}>Sign up</Link>
                            </h3>
                        </Container>
                    </Container> 
                </Col>   
                <Col style={{  
                   backgroundImage: `url(${image1})`,   
                }}> 
                </Col>
            </Row>
    

    )
}

 export default LoginScreen