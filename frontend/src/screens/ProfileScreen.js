import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Card , Button , Figure , Form , Table,} from 'react-bootstrap'
import axios from 'axios'
import {LinkContainer} from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom';


function ProfileScreen() {

    const history = useHistory();
   
    var loggedUser = localStorage.getItem('user')
    var foundUser = JSON.parse(loggedUser);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [orders , setOrders] = useState([])
    console.log(orders)
    const [user , setUser] = useState()

    const submitHandler = async (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            alert("Password does not match")
        } else {
           
            const response = await axios.post("/api/users/profile/update/", {   
                 "name" : name,
                 "email": email,
                 "password" : password
            },{
                 "headers": {
                    "Authorization" : `Bearer ${foundUser.token}`
                   },
            
                
            });
            setUser(response.data);
            
            
            localStorage.setItem("user", JSON.stringify(response.data)); 
            
            window.location.reload();  
        }      
    }


    const ColoredLine = ({ color, height }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: height
            }}
        />
    );  

    useEffect(() => {

        
        async function fetchOrders(){
            
            const {data} = await axios.get('/api/orders/myorders/' , {
                'headers': {
                    'Authorization': `Bearer ${foundUser.token}`
                 }
            })
          
            setOrders(data) 
            console.log(data)
        } 
        fetchOrders()
    } , []) //array at the end to prevent limitless loops

    
   
    if (loggedUser){

    return (
    <>
            
        
            
            <Row  style = {{ backgroundColor: "DarkSeaGreen", }}>
                
                <Container style={{marginTop:"5rem", paddingLeft:"1%", paddingTop: "1%", borderBottom:"0px solid brown",}}>
                    
                    <h3 style= {{ fontSize: "25px", marginLeft: "9%", color: "black",  textAlign : "left",}}>Hello, {foundUser.name} !</h3>
                    
                    <ColoredLine color="black" height= "2px" />
                    <ColoredLine color="black" height= "2px" />
                
                </Container>
            </Row>
            
            <Row style={{paddingTop:"5rem" ,
                        paddingBottom:"10rem" ,
                        paddingLeft:"10%" ,
                        paddingRight:"3rem" ,
                        backgroundColor: "DarkSeaGreen",
                    }}>
                <Col  style={{          width:"40%",
                                        height : "530px",
                                        marginLeft:"0%",
                                        marginRight:"10%",
                                        border:"1px solid black",
                                        borderRadius:"1rem",
                                        boxShadow:" 0rem 0rem 1rem 0.2rem black",
                                        fontSize:"20px",
                                        padding:"1rem",
                                        backgroundColor: "white",
                                        }}>





                    <h2 style = {{ textAlign: "center" , paddingTop: "4%", color: "Brown",}}>Change Personal Info</h2>

                    <Form onSubmit={submitHandler} style = {{ padding : "4%", }}>

                        <Form.Group controlId='fname' style = {{ paddingTop : "2%", }}>
                            <Form.Label >Name</Form.Label>
                            <Form.Control style = {{ fontSize: "15px", }}
                                required
                                type='name'
                                placeholder={foundUser.name}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            >
                        </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email' style = {{ paddingTop : "4%", }}>
                            <Form.Label >Email Address</Form.Label>
                            <Form.Control style = {{ fontSize: "15px", }}
                                required
                                type='email'
                                placeholder={foundUser.email}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password' style = {{ paddingTop : "4%", }}>
                            <Form.Label >Password</Form.Label>
                            <Form.Control style = {{ fontSize: "15px", }}

                                type='password'
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='passwordConfirm' style = {{ paddingTop : "4%", }}>
                            <Form.Label >Confirm Password</Form.Label>
                            <Form.Control style = {{ fontSize: "15px", }}

                                type='password'
                                placeholder='Confirm Password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Button className="submitButton3" type="submit" style={{
                                                                            margin: "40px",
                                                                            marginTop: "30px",
                                                                            paddding: "15px",
                                                                            marginLeft: "35%",
                                                                            width: "120px",
                                                                            height: "50px",
                                                                            fontSize: "15px",
                                                                            borderRadius: "5px",                                                                       }}
                        variant="primary" type="submit" >
                        Update
                    </Button>
                    </Form>
                </Col>
                <Col md={9} xl={6}  style={{marginRight:"5%",
                                            fontSize:"27px",
                                            padding:"1rem",
                                            paddingTop : "3%",
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                                            color: "black",
                                            borderRadius : "1%",
                                            border:"1px solid black"}}>
                    <h2 style = {{ fontSize: "19px", paddingTop: "2rem", color: "white", }} >{foundUser.name}'s Orders</h2>            
                        {/* <Message variant='danger'>Error</Message> */}
                    <Table responsive className='table-sm' style = {{ color: "black", textAlign:"center" ,border:"none"}}>
                        <thead >
                            <tr >
                                <th style={{fontSize:"20px"}}>ID</th>
                                <th style={{fontSize:"20px"}}>Date</th>
                                <th style={{fontSize:"20px"}}>Total</th>
                                <th style={{fontSize:"20px"}}>Paid</th>
                                <th style={{fontSize:"20px"}}>Delivered</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>
                                        <i className='fas fa-times'></i>
                                    </td>
                                    <td>
                                        <LinkContainer to="#">
                                            <Button className='btn-sm'>Details</Button>
                                        </LinkContainer>
                                    </td>
                                </tr>
                            ))} 
                        </tbody>
                    </Table>                      
                </Col>           
            </Row>                            
        </>

    )
}
}
export default ProfileScreen