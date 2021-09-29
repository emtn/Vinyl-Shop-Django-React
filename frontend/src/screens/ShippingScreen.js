import React, { useState, useEffect } from 'react'
import { Form, Button, Row ,Col ,Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


function ShippingScreen() {
    
    const history = useHistory();

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    const loggedUser = localStorage.getItem('user')

    const submitHandler = (e) => {
        e.preventDefault()
        var shipping_props= {"address" : address ,
                              "city" : city , 
                              "postalCode" : postalCode , 
                              "country" : country 
                            }
        localStorage.setItem("ShippingAddress", JSON.stringify(shipping_props));
  
        history.push('/paymentscreen')
    }

    if (loggedUser){

    return (
        
            <Row className="justify-content-md-center"  style={{ paddingTop:"5rem" ,
                            paddingBottom:"5rem" ,
                            paddingLeft:"0rem" ,
                            paddingRight:"0rem" ,
                            textAlign:"center",
                            backgroundColor: "rgba(0, 0, 0, 0.28)",
                        }}>
            <Col xs={12} md={6}>
            {/* <CheckoutSteps step1 step2 /> */}
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}  style = {{ paddingTop: "1%", padding: "2%", }}>

                <Form.Group controlId='address' style = {{ padding: "1%", }}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control style = {{ fontSize: "15px", }}
                        required
                        type='text'
                        placeholder='Enter address'
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city' style = {{ padding: "1%", }}>
                    <Form.Label>City</Form.Label>
                    <Form.Control style = {{ fontSize: "15px", }}
                        required
                        type='text'
                        placeholder='Enter city'
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode' style = {{ padding: "1%", }}>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control style = {{ fontSize: "15px", }}
                        required
                        type='text'
                        placeholder='Enter postal code'
                        value={postalCode ? postalCode : ''}
                        onChange={(e) => setPostalCode(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country' style = {{ padding: "1%", }}>
                    <Form.Label>Country</Form.Label>
                    <Form.Control style = {{ fontSize: "15px", }}
                        required
                        type='text'
                        placeholder='Enter country'
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button className="submitButton3" type="submit" style={{
                                                                            margin: "0px",
                                                                            marginTop: "30px",
                                                                            paddding: "15px",
                                                                            marginLeft: "0%",
                                                                            width: "120px",
                                                                            height: "50px",
                                                                            fontSize: "15px",
                                                                            borderRadius: "5px",
                                                                          }}
                        variant="primary" type="submit" >
                        Update
                    </Button>
            </Form>
            </Col>
            </Row>
       
    )
}
}

export default ShippingScreen