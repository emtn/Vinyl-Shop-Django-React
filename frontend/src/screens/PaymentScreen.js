import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
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

    if (loggedUser) {

        return (


            <Row className="justify-content-md-center" style={{
                paddingTop: "5rem",
                paddingBottom: "5rem",
                paddingLeft: "0rem",
                paddingRight: "0rem",
                textAlign: "center",
                fontSize:"20px",
                backgroundColor: "rgba(0, 0, 0, 0.28)",
                minHeight:"413px"
            }}>

                <Col  xs={12} md={6} style={{ width: "35%", paddingTop: "0%", }}>

                    <Form onSubmit={submitHandler}  >
                        <Form.Group style={{ padding: "3%", }}>
                            <Form.Label style={{ paddingTop: "1%", }} as='legend'>Select Method</Form.Label>
                            <Col>
                                <Form.Check style={{ padding: "2%", }}
                                    type='radio'
                                    label='PayPal or Credit Card'
                                    id='paypal'
                                    value='paypal'
                                    name='paymentMethod'

                                    onClick={(e) => setPaymentMethod(e.target.value)}
                                >

                                </Form.Check>
                            </Col>
                        </Form.Group>
                        {paymentMethod.length > 0 ?
                            <Button type='submit' variant='primary'  >
                                Continue
                            </Button>
                            :
                            <Button type='submit' variant='primary' disabled>
                                Continue
                            </Button>
                        }

                    </Form>
                </Col>
            </Row>

        )
    }
}

export default PaymentScreen