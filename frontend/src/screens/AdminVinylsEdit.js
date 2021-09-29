import axios from "axios";
import React, { useEffect , useState } from "react";
import { Container ,Form,Button , ButtonGroup} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AdminVinylsEdit() {
    
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
 


    function handleSubmit(){}
    var title,artist,label,category,description,date,rating,price,countInStock

    if (isAdmin) {
    return(
        <Container style={{paddingTop:"5rem" ,
                           paddingBottom:"5rem" ,
                           paddingLeft:"3rem" ,
                           paddingRight:"3rem" ,
                           backgroundColor:"#BC2828"}}>
            <br/>
            <h2 style={{textAlign:"center",color:"black"
                                          }}
                                          > Edit Vinyl</h2>
            <br/>
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
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" 
                                        }}>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" />
                    {title}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" }}>Artist</Form.Label>
                    <Form.Control type="text" placeholder="Enter Artist" />
                    {artist}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" }}>Label</Form.Label>
                    <Form.Control type="text" placeholder="Enter Label" />
                    {label}
                </Form.Group>
                <br/>
                <Form.Group controlId="formFile" className="mb-3" >
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" }}>Select an Image</Form.Label>
                    <Form.Control type="file" />
                    
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" }}>Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter Category" />
                    {category}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" }}>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    {description}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicRealeaseDate">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" }}>Release Date</Form.Label>
                    <Form.Control type="date"  placeholder="Enter Date" />
                    {date}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicRating">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" }}>Rating</Form.Label>
                    <Form.Control type="number" min="0" max="5" placeholder="Enter Rating" />
                    {rating}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" }}>Price $</Form.Label>
                    <Form.Control type="text" min="0" placeholder="Enter Price" />
                    {price}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicCount">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" }}>Count in Stocke</Form.Label>
                    <Form.Control type="text" min="0"  placeholder="Enter Count in stock" />
                    {countInStock}
                </Form.Group>
   
                <br/>

                <Button variant="dark" type="submit" onClick={handleSubmit}
                        style={{textAlign:"center",
                        fontSize:"15px",
                        color:"black" }}                         >
                    Submit
                </Button>
            </Form>
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
export default AdminVinylsEdit