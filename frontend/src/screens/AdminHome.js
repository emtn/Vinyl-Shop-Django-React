import React, { useEffect, useState } from "react";
import {Col, Container, Button, Table, ButtonGroup ,Row} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

function AdminHome() {


    
    
    const loggedUser = localStorage.getItem('user')
    const foundUser = JSON.parse(loggedUser)
    const [isAdmin , setIsAdmin] = useState(false)

    useEffect(() => {
        if (foundUser){
            if (foundUser.isAdmin){
                setIsAdmin(true)
            }else{
                setIsAdmin(false)
            }
        }
    } , foundUser)


       if (isAdmin) {
    return (
        <Container fluid style={{
            paddingTop: "5rem",
            paddingBottom: "5rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            backgroundColor: "#BC2828"
        }}>
            <br/>
            <br />
            <h2 style={{textAlign:"center",
                        fontSize:"30px",
                        color:"black"
                         }}> Admin Home </h2>
            <br/>
            <br />
            <Container style={{alignItems:"center",
                               paddingTop: "5rem",
                               paddingBottom: "5rem",
                               paddingLeft: "3rem",
                            paddingRight: "3rem",}}> 
            <Row>
            <Col  md={6}></Col>
            <ButtonGroup aria-label="Basic example" size="lg"  >
                    {/* <Col  md={4}></Col> */}
                    <LinkContainer style={{textAlign:"center",
                                              fontSize:"20px",
                                              color:"black" }}  to={'/admin/users'}><Button variant="dark" >Users</Button></LinkContainer> 
                    <LinkContainer style={{textAlign:"center",
                                               fontSize:"20px",
                                               color:"black" }}  to={'/admin/vinyls'}><Button variant="danger">Vinyls</Button></LinkContainer>
            </ButtonGroup>
            </Row>
            <br />
            <br />

            </Container> 

            <br />
            <br />
        </Container>


    )
}else {
    return (
    <Container fluid style={{paddingTop: "5rem",
                            paddingBottom: "13rem",
                            paddingLeft: "3rem",
                            paddingRight: "3rem",
                            fontSize:"150px"
                        
}}>
    <p>ARE YOU LOST?????</p>
    </Container>
    )
}
}

export default AdminHome