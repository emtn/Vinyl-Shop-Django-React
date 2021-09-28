import { Container , Card , Col ,Row , Form , ListGroup , Button , Image} from 'react-bootstrap';
import {Link, LinkContainer} from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';


function CartScreen(){

    const history = useHistory();

    const loggedUser = localStorage.getItem('user')
    // const foundUser = JSON.parse(loggedUser);
    var entries = JSON.parse(localStorage.getItem("allEntries"))
  
    const removeFromCartHandler = (product_id) => {
      for ( var entry in entries){
        var entry_id = (entries[entry].id)

        if (entry_id === product_id){
          entries.splice(entry , 1)
        }  
      }
      localStorage.setItem("allEntries", JSON.stringify(entries));
      window.location.reload(); 
    }

    function handdleChange(item_id , value) {
      for ( var entry in entries){
        var entry_id = (entries[entry].id)

        if (entry_id === item_id){
            entries[entry].qty = value
            console.log(entry_id ,item_id, value)
            console.log(entries[entry])
        }
        localStorage.setItem("allEntries", JSON.stringify(entries));
        window.location.reload(); 
      }
    }

    const checkoutHandler = () => {
        history.push('/shipping')
    }

    return(
    <Container style={{ paddingTop:"5rem" ,
                            paddingBottom:"5rem" ,
                            paddingLeft:"0rem" ,
                            paddingRight:"0rem" ,
                            textAlign:"center",
                            minHeight:"430px"
                          }}>
        <Row>
            <Col md={8} xl={6}>
              <h1>Shopping Cart</h1>
              {(Object.keys(entries).length !== 0 ) ? (
                <ListGroup variant='flush' style={{minHeight:"27rem"}}>
                {entries.map(item => (
                    <ListGroup.Item key={item.id}>
                        <Row>
                            <Col md={2}>
                                <Image src={item.image} alt={item.title} fluid rounded />
                            </Col>
                            <Col md={2}>
                                ${item.price}
                            </Col>
                            <Col md={3}>
                                <Form.Control
                                    as="select"
                                    value={item.qty}
                                    onChange={({ target }) =>  handdleChange( item.id , target.value)}
                                >
                                    {
                                        [...Array(item.countInStoke).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                quantity : {x + 1}
                                            </option>
                                        ))
                                    }
                                </Form.Control>
                                <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.id) }>
                                    <i className='fas fa-trash fa-lg' style={{padding:"1rem"}}></i>
                                </Button>
                            </Col>
                     
                        </Row>
                    </ListGroup.Item>     
                 ))}
              </ListGroup>  
              ) : (
                  <Col  style={{minHeight:"27rem"}}>
                    <LinkContainer to='/store' style={{backgroundColor:"red",
                                                      padding:"1rem"}}>
                        <Button >Your cart is empty! Go Back ! </Button>
                    </LinkContainer>
                  </Col>
                    
              )}
                    
                  
            </Col>
            <Col md={4} xl={3}>
           
                <Card>
                {(Object.keys(entries).length !== 0 ) ? (
                    <ListGroup variant='flush'>
                    
                        <ListGroup.Item>
                            <h2>Subtotal Price items</h2>   
                        </ListGroup.Item>
                    
                        <ListGroup.Item>
                            <Button
                                type='button'
                                className='btn-block'
                              
                                onClick={checkoutHandler}
                            >
                                <h2>Proceed To Checkout</h2>
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                    )
                    :
                    (   <Col>
                        <p>Cannot Proceed...</p>
                        </Col>
                    )} 
                </Card>
            </Col>
        </Row>
    </Container>
    )
                    
}
export default CartScreen