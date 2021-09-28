import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Card , Button , Figure , Form , Table} from 'react-bootstrap'
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


    useEffect(() => {

        
        async function fetchOrders(){
            
            const {data} = await axios.get('/api/orders/myorders/' , {
                'headers': {
                    'Authorization': `Bearer ${foundUser.token}`
                 }
            })
          
            setOrders(data) 
            // console.log(data)
        } 
        fetchOrders()
    } , []) //array at the end to prevent limitless loops

    
   
    if (loggedUser){

    return (
    <>
            <Row  style={{paddingLeft:"3rem"}}>
                <h3>{foundUser.name}</h3>
            </Row>
            <Row style={{paddingTop:"10rem" ,
                        paddingBottom:"10rem" ,
                        paddingLeft:"3rem" ,
                        paddingRight:"3rem" ,
                    }}>
                <Col md={3} xl={6} style={{width:"28%",
                                        marginLeft:"10%",
                                        marginRight:"5%",
                                        border:"1px solid black",
                                        borderRadius:"1rem",
                                        boxShadow:" 0rem 0rem 1rem 0.2rem black",
                                        fontSize:"20px",
                                        padding:"1rem"}}>
                    <h2>User Profile</h2>

                    <Form onSubmit={submitHandler}>

                        <Form.Group controlId='fname'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type='name'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            >
                        </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                required
                                type='email'
                                placeholder='Enter Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control

                                type='password'
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='passwordConfirm'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control

                                type='password'
                                placeholder='Confirm Password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='primary'>
                            Update
                    </Button>

                    </Form>
                </Col>

                <Col md={9} xl={6}  style={{marginRight:"5%",
                                            fontSize:"20px",
                                            padding:"1rem"}}>
                    <h2>My Orders</h2>
                
                        {/* <Message variant='danger'>Error</Message> */}
    
                    <Table striped responsive className='table-sm' >
                        <thead >
                            <tr>
                                <th >ID</th>
                                <th >Date</th>
                                <th >Total</th>
                                <th >Paid</th>
                                <th >Delivered</th>
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