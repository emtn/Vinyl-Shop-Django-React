import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card , Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import {PayPalButton} from 'react-paypal-button-v2' //npm install

function PlaceOrderScreen() {


    const history = useHistory();

    const loggedUser =  JSON.parse(localStorage.getItem('user'))
    const entries =  JSON.parse(localStorage.getItem('allEntries'))
    const shippingAddress =  JSON.parse(localStorage.getItem('ShippingAddress'))
    const paymentMethod =  JSON.parse(localStorage.getItem('paymentMethod'))
    
    const [sdkReady , setSdkReady] = useState(true)


    const successPaymentHandler = (paymentResult) => {

    }
 
    function totalPrice() {
        var conc_price = 0
        for ( var entry in entries){
          var entry_price = (entries[entry].price)
          var entry_qty = (entries[entry].qty) 
          conc_price = conc_price + (entry_price * entry_qty)
        }    
        return conc_price
      }
    
    const placeOrder =  async (e) =>{
        // e.preventDefault()
        const response = await axios.post("/api/orders/add/", {   
            "orderItems" : entries,
            "totalPrice" : totalPrice() ,
            "address": shippingAddress.address,
            "city" : shippingAddress.city,
            "country": shippingAddress.country,
            "postalCode" : shippingAddress.postalCode,
            "paymentMethod" : paymentMethod
       },{
            "headers": {
               "Authorization" : `Bearer ${loggedUser.token}`
              },    
       });
       localStorage.setItem("allEntries" ,JSON.stringify([]))
       localStorage.setItem("paymentMethod" ,JSON.stringify(""))
       history.push("/");
    }

    console.log(totalPrice())
   

    if (loggedUser){

    return (
        <Container style={{minHeight:"39.9rem",
                           paddingTop:"2rem"}}>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping to:</h2>
                            <div style={{fontSize:"13px",
                                         fontWeight:"500"}}>
                            <p>{shippingAddress.address}</p>
                            <p>{shippingAddress.city}</p>
                            <p>{shippingAddress.country}</p>
                            <p>{shippingAddress.postalCode}</p>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method:</h2>
                            <p style={{fontSize:"13px",
                                       fontWeight:"500"}}>
                                    {paymentMethod}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>    
                            <ListGroup variant='flush'>
                                <ListGroup.Item >
                                
                                {entries.map(entry => (
                                    <Row key={entry.id} style={{padding:"1rem",
                                                 fontSize:"12px",
                                                 borderBottom:"1px solid black",
                                                 width:"80%"}}> 
                                        <Col md={1}>
                                            <Link to={`/store/${entry.id}`}>
                                                <Image src={entry.image} alt={entry.title} fluid rounded />
                                            </Link>
                                        </Col>

                                        <Col >    
                                            {entry.artist} , {entry.title}
                                        </Col>

                                        <Col md={4}><p>{entry.qty} x ${entry.price} = ${(entry.qty * entry.price).toFixed(2)}</p>
                                        </Col>
                                    </Row>
                                   
                                ))}
                                   
                                </ListGroup.Item>
                            
                            </ListGroup>
                        
                        </ListGroup.Item>

                    </ListGroup>

                </Col>

                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Items:</Col>
                                      {totalPrice()}
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping:</Col>
                                        0
                                    
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax:</Col>
                                     0
                                    
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Total:</Col>
                                  {totalPrice() + (0 + (0 + totalPrice()) * 0)}
                                </Row>
                            </ListGroup.Item>


                            {/* <ListGroup.Item>
                                error
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item> */}

                            <ListGroup.Item>
                                {sdkReady ? (
                                      <PayPalButton amount={totalPrice()} onSuccess={placeOrder}/>
                                    
                                   
                                ) :(
                                       <p>sec</p>
                                )}
                              
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
     
    )
}
}

export default PlaceOrderScreen


//dimitrgianna@hotmail.com praxitelous4
//to account paypal tou vinyl store einai to idio pou exoume kai gia ta minumata
//demo client account demoAccount@hotmail.com praxitelous4
//paypal sandbox app connected to vinylstoreathens@gmail.com
//ATkwvYpkC0r4SVtZFsawThJGUqMohtO9LinG224VB_kVKYiiHSP008ACP7ZDqnQncHAI3klEDTFZdaLB
//npm install react-paypal-button-v2
//www.sandbox.paypal.com to see the amount delivered