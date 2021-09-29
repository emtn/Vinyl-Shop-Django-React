import { useState, useEffect } from "react";
import axios from "axios";

import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import image from "../images/about1.jpg";

function SignUpScreen() {
    // const [first_name, setFirst_name] = useState("");
    const history = useHistory();

    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();

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
        const user = {name,email,password};

        // send the username,email and password to the server
        const response = await axios.post("/api/users/register/", user);
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

  
    <Row style={{height: "610px"}} >
        <Col md={6} style={{
            backgroundColor: "orange",
        }}>
            <Container>
                <Container style={{
                    margin: "3%",
                    paddingTop: "4%",
                    marginLeft: "41%",

                }}>
                    <h3 style={{ paddingTop: "0rem", fontSize: "24px", fontWeight: "900", }}>Sign up </h3>
                </Container>
                <Form onSubmit={handleSubmit} style = {{ paddingTop: "0rem", color:"black", }}>
                    <Form.Group className="mb-2" controlId="formBasicName" >
                        <Form.Label style={{ fontSize: "18px", }} column="lg"  > Name </Form.Label>
                        <Col xs={10} >
                            <Form.Control style={{ borderRadius: "5px", fontSize: "15px",}} type="name" placeholder="Name" 
                            value={name}
                            onChange={({ target }) => setUsername(target.value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label style={{ fontSize: "18px", }} column="lg" >Email address</Form.Label>
                        <Col xs={8} >
                            <Form.Control style={{ borderRadius: "5px", fontSize: "15px",}} type="email" placeholder="Enter email" value={email}
                        onChange={({ target }) => setEmail(target.value)}/>
                        </Col>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: "18px", }} column="lg"  >Password</Form.Label>
                        <Col xs={12} >
                            <Form.Control style={{ borderRadius: "5px", fontSize: "15px",}} type="password" placeholder="Password" value= {password}
                        onChange={({ target }) => setPassword(target.value)}/>
                        </Col>
                    </Form.Group>
                    <Button className="submitButton" type="submit" style={{
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
                        Sign up
                    </Button>
                </Form>
                <Container style={{
                    fontSize: "20px",
                }}>
                    <h3 style = {{paddingLeft: "19rem",}}>Already Register? <Link to="/login" style={{
                        color: "blue",
                        paddingLeft: "1rem",
                    }}>Log in</Link>
                    </h3>
                </Container>
            </Container>
        </Col>
        <Col style={{

         backgroundImage: `url(${image})`,
        }}>
        </Col>
    </Row>

    );
}

export default SignUpScreen;
