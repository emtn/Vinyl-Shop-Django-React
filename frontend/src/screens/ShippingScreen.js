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
        <Container style={{ paddingTop:"5rem" ,
                            paddingBottom:"5rem" ,
                            paddingLeft:"0rem" ,
                            paddingRight:"0rem" ,
                            textAlign:"center"
                        }}>
            <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
            {/* <CheckoutSteps step1 step2 /> */}
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter address'
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter city'
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter postal code'
                        value={postalCode ? postalCode : ''}
                        onChange={(e) => setPostalCode(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter country'
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
            </Col>
            </Row>
        </Container>
    )
}
}

export default ShippingScreen