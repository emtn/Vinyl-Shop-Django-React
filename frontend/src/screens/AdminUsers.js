import React, { useEffect, useState } from "react";
import { Container,Button ,Table,ButtonGroup} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import axios from "axios";

function AdminUsers() {

    
    const [users,getUsers]=useState([]);
    const url='/api/users/';


    
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
    
     useEffect(()=>{
       async function getAllUsers()
           {
               const {data}= await axios.get(url)
               getUsers(data)
           }
        getAllUsers();
     },[]);
    
    
    function handleDelete(userId){
        axios.post(`api/users/delete-user/id/`)

    } 
    function handleEdit(userId){
        
    }
    function handleAdd(userId){
        
    }

    if (isAdmin) {
    return(
        <Container  fluid style={{
                            paddingTop: "5rem",
                            paddingBottom: "5rem",
                            paddingLeft: "3rem",
                            paddingRight: "3rem",
                            backgroundColor: "#BC2828"
        }}>
            <br/>
            <ButtonGroup aria-label="Basic example" >
                    <LinkContainer style={{textAlign:"center",
                                               fontSize:"15px",
                                              color:"black" }}  to={'/admin/users'}><Button variant="dark" >Users</Button></LinkContainer> 
                    <LinkContainer style={{textAlign:"center",
                                               fontSize:"15px",
                                               color:"black" }}  to={'/admin/vinyls'}><Button variant="danger">Vinyls</Button></LinkContainer>                      
            </ButtonGroup>
            <br/>
            <Table striped bordered hover variant="dark" style={{border:"none" ,textAlign:"center"}}>
            <thead>
                <tr>
                    <th style={{textAlign:"center",
                                fontSize:"20px",
                                }}>Id</th>
                    <th style={{textAlign:"center",
                                fontSize:"20px",
                                 }}>First Name</th>
                    <th style={{textAlign:"center",
                                fontSize:"20px",
                                 }}>Username</th>
                    <th style={{textAlign:"center",
                                fontSize:"20px",
                                 }}>Email</th>
                    <th style={{textAlign:"center",
                                fontSize:"20px",
                                 }}>Staff</th>
                    <th style={{textAlign:"center",
                                fontSize:"20px",
                                 }}>Button</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    users && users.map((user)=>(

                    <tr key={user.id}>
                    <td style={{textAlign:"center",
                                fontSize:"15px",
                                fontFamily:"arial" }}>{user.id}</td>
                    <td style={{textAlign:"center",
                                fontSize:"15px",
                                fontFamily:"arial" }}>{user.name}</td>
                    <td style={{textAlign:"center",
                                fontSize:"15px",
                                fontFamily:"arial" }}>{user.username}</td>
                    <td style={{textAlign:"center",
                                fontSize:"15px",
                                fontFamily:"arial" }}>{user.email}</td>
                    <td style={{textAlign:"center",
                                fontSize:"15px",
                                fontFamily:"arial" }}>{String(user.isAdmin?true:false)}</td>
                    <td style={{width:"5%"}}>
                        <ButtonGroup aria-label="Basic example">  
                            <Button variant="info" onClick={handleEdit(user.id)} style={{width:"10rem"}}>  Edit</Button>
                            <Button variant="danger" onClick={handleDelete(user.id)} style={{width:"10rem"}}>Delete</Button>
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

export default AdminUsers