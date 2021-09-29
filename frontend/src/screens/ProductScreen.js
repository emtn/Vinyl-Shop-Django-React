import { useState , useEffect } from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import {Container , Row , Col , Image , ListGroup , Button , Card , Form, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

function ProductScreen({match}) {  //props.match.params.id
    //handle products with no countinStoke ...
    const [product , setProduct] = useState([]) //empty array
    const [qty , setqty] = useState(1)
    const [review , setReview] = useState("")
    const [rating, setRating] = useState(0)

    const history = useHistory();
    const loggedUser = localStorage.getItem("user")
    const foundUser =  JSON.parse(loggedUser)
  
    console.log(product.reviews)
    useEffect(() => {

        async function fetchProduct(){

            const {data} = await axios.get(`/api/vinyls/${match.params.id}`) //added to package.json proxy not hardcode all urls
            setProduct(data)  
        }   
        fetchProduct()
    } , [])
  
    
    const saveReview = async (e) => {
        e.preventDefault();
        
        const response = await axios.post(`/api/vinyls/${match.params.id}/reviews/`, {
            "comment": review,
            "rating": rating
        },{
            "headers":{
                "Authorization" : `Bearer ${foundUser.token}`
            },   
        })
        
        window.location.reload();
    };


    function addToCart() {
       
        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) existingEntries = [];
        
    
        localStorage.setItem("entry", JSON.stringify(product));
        product.qty = qty
        existingEntries.push(product);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));
        history.push("/store");
    };

    return (
        
            <Container fluid style={{ minHeight:"50rem",
                                      paddingLeft:"0rem" ,
                                      paddingRight:"0rem" ,
                                      textAlign:"center",
                                      backgroundColor:"DarkCyan"
                                  }}>
                 <Link to='/' className='btn btn-light my-3'>Go back</Link>
                <Row>
                    <Col md={6} xl={4} style={{width:"30%", height:"28%"}}>
                        <Image src={product.image} alt={product.name}  style={{width:"80%"}}/>
                      
                    </Col> 
                    <Col md={3} style={{fontSize:"13px",
                                        textAlign:"left",
                                        width:"40%"}}>
                        <ListGroup variant="flush">
                            
                            <ListGroup.Item>
                            <h3>{product.title}</h3>
                            <h5>{product.artist}</h5>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating value={product.rating} text={` ${product.numReviews} reviews`} color={'#f8e825'}/>
                            </ListGroup.Item>

                            <ListGroup.Item style={{color:"red"}}>
                                <big><i style={{fontWeight:"900"}}>Price</i> : ${product.price}</big>
                            </ListGroup.Item>
                           
                            <ListGroup.Item >
                                <big><i style={{fontWeight:"900"}}>Description</i> :  {product.description}</big><br/><br/>
                                <big><i style={{fontWeight:"900"}}>Release Date</i> : {product.releaseDate}</big>
                            </ListGroup.Item>  
                        </ListGroup>
                        <Form.Control as="select" value={qty} onChange={({ target }) => setqty(target.value)}
                                                  style={{fontSize:"18px",
                                                          textAlign:"center",
                                                          marginTop:"3rem",
                                                          marginBottom:"1rem",
                                                          height:"6rem",
                                                          width:"30%"}}>
                            {

                                [...Array(product.countInStoke).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        quantity : {x + 1}
                                    </option>
                                ))
                            }

                        </Form.Control>
                    </Col>

                    <Col md={3}  style={{textAlign:"center",
                                         fontSize:"18px",
                                         width:"20%"}}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                        {product.countInStoke > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    {loggedUser ? 
                                    <Button className='btn-block' 
                                    disabled={product.countInStoke === 0} type='button'
                                    onClick={addToCart} style={{padding:"2rem"}}>Add to Cart</Button>
                                    : 
                                    <p>LOG IN FIRST</p>
                                    }
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
                {foundUser ?
                <Container fluid style={{marginTop:"3rem" ,
                                         marginBottom:"3rem",
                                         backgroundColor:"whitesmoke"}}>   
                    <Form   onSubmit={saveReview} style={{fontSize:"13px",
                                                          textAlign:"left",
                                                          width:"40%",
                                                          marginLeft:"10rem"}}>
                        <Form.Group>
                            <Form.Label htmlFor="exampleTextarea" className="form-label mt-2">Write your Review and Rate
                                <Form.Control as="select" value={rating} onChange={({ target }) => setRating(target.value)}
                                              style={{fontSize:"16px",
                                                      textAlign:"center",
                                                     }}>  
                                    <option selected>Choose</option>                                                                                                                                    
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>

                                </Form.Control>
                            </Form.Label> 
                            
                            <textarea className="form-control" id="exampleTextarea" rows="3" 
                                      onChange={({target})=> setReview(target.value)} style={{minHeight:"100px",
                                                                                              fontSize:"18px",
                                                                                            }}>

                            </textarea>
                        </Form.Group>
                        <Button type="submit" style={{margin: "40px",
                                                      marginTop: "20px",
                                                      paddding: "15px",
                                                      marginLeft: "41%",
                                                      width: "120px",
                                                       height: "50px",
                                                      fontSize: "15px",
                                                      borderRadius: "5px",
                                                     }}
                                                     className="submitButton1">
                                Submit
                        </Button>
                    </Form>
                </Container>
                :
                <Container fluid style={{marginTop:"10rem" ,
                marginBottom:"3rem",
                backgroundColor:"whitesmoke"}}>
                    <Col style={{fontSize:"20px",
                                textAlign:"left",
                                width:"40%",
                                marginLeft:"10rem"}}>LOG IN TO WRITE YOUR REVIEW</Col>
                </Container> 
                }
                <Container fluid>
                    <Col xl={3} style={{fontSize:"18px",
                                        textAlign:"left",
                                        width:"40%",
                                        minHeight:"20rem",
                                        marginLeft:"10rem",
                                        marginBottom:"3rem",  
                                        }}>
                    {product.reviews ?
                        Object.values(product.reviews).map(review => (
                            <Col key={review} style={{padding:"1rem",
                                                      border:"1px solid black",
                                                      boxShadow:"0 0 0.2rem 0.2rem"
                                                     }}>
                                <Col style={{height:"3rem",
                                             padding:"0.5rem",
                                             backgroundColor:"orange"
                                             }}>
                                    <h3 style={{float:"left"}}>User {review.name}</h3>
                                    <h3 style={{float:"right"}}>Created at : {review.createdAt}</h3>
                                </Col>
                                <Col style={{padding:"0.5rem",
                                             backgroundColor:"white"}}>
                                   <p>{review.comment}</p>
                                </Col>
                            </Col>
                        ))
                     
                       :
                       ""
                    }
                    </Col>
                </Container>
            </Container>
       
    );
}

export default ProductScreen
