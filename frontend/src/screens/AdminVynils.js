import React, { useEffect, useState } from "react";
import { Container, Button, Table,ButtonGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

function AdminVynils() {

    const loggedUser = localStorage.getItem('user')
    const foundUser = JSON.parse(loggedUser)
    const [isAdmin , setIsAdmin] = useState(false)

    const [vynils, getVynils] = useState([]);
    const url = '/api/vinyls/';

    useEffect(() => {
        if (foundUser){
            if (foundUser.isAdmin){
                setIsAdmin(true)
            }else{
                setIsAdmin(false)
            }
        }
        
    } , foundUser)
 


    useEffect(() => {
        async function getAllVynils() {
            const { data } = await axios.get(url)
            getVynils(data)
        }
        getAllVynils();
    }, []);



    function handleDelete(vinylId){
       
        const {data} = axios.post(`/api/vinyls/delete-vinyl/${vinylId}/` , {
            "headers": {
                "Authorization" : `Bearer ${foundUser.token}`
            }
        })
        console.log(data)
    }

    function handleEdit(userId) {

    }


    if (isAdmin) {
    return (
        
        <Container  fluid style={{
            paddingTop: "5rem",
            paddingBottom: "5rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            backgroundColor: "#BC2828"
        }}>
            <br/>
            <br/>
            <ButtonGroup aria-label="Basic example" >
                    <LinkContainer style={{textAlign:"center",
                                               fontSize:"15px",
                                              color:"black" }}  to={'/admin/users'}><Button variant="dark" >Users</Button></LinkContainer> 
                    <LinkContainer style={{textAlign:"center",
                                               fontSize:"15px",
                                               color:"black" }}  to={'/admin/vinyls'}><Button variant="danger">Vinyls</Button></LinkContainer>    
                    <LinkContainer to='/admin/vinyls/add' style={{textAlign:"center",
                                                                    fontSize:"15px",}}>
                                    <Button variant="success">Add</Button>
                                </LinkContainer>                  
            </ButtonGroup>
            <br/>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th style={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "arial"
                        }}>Id</th>
                        <th style={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "arial"
                        }}>Title</th>
                        <th style={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "arial"
                        }}>Artist</th>
                        <th style={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "arial"
                        }}>Label</th>
                        <th style={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "arial"
                        }}>Category</th>
                        <th style={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "arial"
                        }}>Description</th>
                        <th style={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "arial"
                        }}>Release Date</th>
                        <th style={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "arial"
                        }}>Rating</th>
                        <th style={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "arial"
                        }}>Reviews</th>
                        <th style={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "arial"
                        }}>Price</th>
                        <th style={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "arial"
                        }}>Stock Count</th>
                        <th style={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "arial"
                        }}>Buttons</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        vynils && vynils.map((vynil) => (

                            <tr key={vynil.id} >
                                <td style={{
                                    textAlign: "center",
                                    fontSize: "10px",
                                    fontFamily: "arial"
                                }}>{vynil.id}</td>
                                <td style={{
                                    textAlign: "center",
                                    fontSize: "10px",
                                    fontFamily: "arial"
                                }}>{vynil.title}</td>
                                <td style={{
                                    textAlign: "center",
                                    fontSize: "10px",
                                    fontFamily: "arial"
                                }}>{vynil.artist}</td>
                                <td style={{
                                    textAlign: "center",
                                    fontSize: "10px",
                                    fontFamily: "arial"
                                }}>{vynil.label}</td>
                                <td style={{
                                    textAlign: "center",
                                    fontSize: "10px",
                                    fontFamily: "arial"
                                }}>{vynil.image}</td>
                                <td style={{
                                    textAlign: "center",
                                    fontSize: "10px",
                                    fontFamily: "arial"
                                }}>{vynil.category}</td>
                                <td style={{
                                    textAlign: "center",
                                    fontSize: "10px",
                                    fontFamily: "arial"
                                }}>{vynil.description}</td>
                                <td style={{
                                    textAlign: "center",
                                    fontSize: "10px",
                                    fontFamily: "arial"
                                }}>{vynil.releaseDate}</td>
                                <td style={{
                                    textAlign: "center",
                                    fontSize: "10px",
                                    fontFamily: "arial"
                                }}>{vynil.rating}</td>
                                <td style={{
                                    textAlign: "center",
                                    fontSize: "10px",
                                    fontFamily: "arial"
                                }}>{vynil.price}</td>
                                <td style={{
                                    textAlign: "center",
                                    fontSize: "10px",
                                    fontFamily: "arial"
                                }}>{vynil.countInStoke}</td>

                                <td><ButtonGroup aria-label="Basic example" >
                                   
                                    <LinkContainer to='/admin/vinyls/edit'>
                                        <Button variant="info" onClick={handleEdit(vynil.id)} >Edit</Button>
                                    </LinkContainer>
                                   
                                        <Button  variant="danger" onClick={handleDelete(vynil.id)}>Delete</Button>
                                  
                                    </ButtonGroup>  
                                </td>
                            </tr>

                        ))}

                </tbody>
            </Table>

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

export default AdminVynils