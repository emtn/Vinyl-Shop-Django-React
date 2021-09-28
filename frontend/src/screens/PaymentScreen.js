import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Container , Row} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


function PaymentScreen() {
    
    const history = useHistory();
    const loggedUser = localStorage.getItem('user')

    const [paymentMethod, setPaymentMethod] = useState('')

    // if (!shippingAddress.address) {
    //     history.push('/shipping')
    // }

    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem("paymentMethod", JSON.stringify(paymentMethod));
        history.push('/placeorder')
    }

    if (loggedUser){

    return (
        
        <Container style={{minHeight:"39.9rem",
                           paddingTop:"2rem"}}>
            <Row className="justify-content-md-center">
                <Col md={8} xl={6}>

            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal or Credit Card'
                            id='paypal'
                            value = 'paypal'
                            name='paymentMethod'
                          
                            onClick ={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                    </Col>
                </Form.Group>
                {paymentMethod.length > 0 ? 
                    <Button type='submit' variant='primary'  >
                    Continue
                    </Button>
                :
                    <Button type='submit' variant='primary' disabled >
                      Continue
                    </Button>
                }
                
            </Form>
             </Col>
            </Row>
        </Container>
    )
}
}

export default PaymentScreen