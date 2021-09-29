import axios from "axios";
import { Container ,Form,Button , ButtonGroup} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React, { useEffect , useState } from "react";
import { useHistory } from 'react-router-dom';

function AdminVinylsAdd() {
    
    const history = useHistory();

    const loggedUser = localStorage.getItem('user')
    const foundUser = JSON.parse(loggedUser)
    const [isAdmin , setIsAdmin] = useState(false)

    const [title , setTitle] = useState("");
    const [artist , setArtist] = useState("");
    const [label , setLabel] = useState("");
    const [image , setImage] = useState(new Image);
    const [category , setCategory] = useState("");
    const [description , setDescription] = useState("");
    const [date , setReleaseDate] = useState(new Date);
    const [price , setPrice] = useState(0);
    const [countInStock , setStockCount] = useState(0);

    useEffect(() => {
        if (foundUser){
            if (foundUser.isAdmin){
                setIsAdmin(true)
            }else{
                setIsAdmin(false)
            }
        }
    } , foundUser)
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post("/api/vinyls/add-vinyl/", {
            "title" : title,
            "artist" : artist,
            "label" : label,
            "image" : image,
            "category" : category,
            "description" : description,
            "releaseDate" : date,
            "price" : price,
            "countInStoke" : countInStock
        },{
            "headers": {
                "Authorization" : `Bearer ${foundUser.token}`
               },    
        });
        history.push("/admin/home/");

    }
   


    if (isAdmin) {
    return(
        <Container   style={{paddingTop:"5rem" ,
                           paddingBottom:"5rem" ,
                           paddingLeft:"3rem" ,
                           paddingRight:"3rem" ,
                           backgroundColor:"#BC2828"}}>
            <br/>
            <h2 style={{textAlign:"center",
                        fontSize:"30px",
                        color:"black"
                         }}> Add Vinyl </h2>
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
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" 
                                        }}>Title
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" 
                        onChange={({ target }) => setTitle(target.value)}/>
                    {/* {title} */}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" 
                                        }}>Artist
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Artist"
                        onChange={({ target }) => setArtist(target.value)} />
                    {/* {artist} */}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" 
                                        }}>Label
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Label" 
                    onChange={({ target }) => setLabel(target.value)}/>
                    {/* {label} */}
                </Form.Group>
                <br/>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" 
                                        }}>Select an Image
                    </Form.Label>
                    <Form.Control type="file" onChange={({ target }) => setImage(target.value)}/>
                    
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" 
                                        }}>Category
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Category" 
                    onChange={({ target }) => setCategory(target.value)}/>
                    {/* {category} */}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" 
                                        }}
                                        >Description
                    </Form.Label>
                    <Form.Control as="textarea" rows={3}
                    onChange={({ target }) => setDescription(target.value)} />
                    {/* {description} */}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicRealeaseDate">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" 
                                        }}>Release Date</Form.Label>
                    <Form.Control type="date"  placeholder="Enter Date"
                    onChange={({ target }) => setReleaseDate(target.value)} />
                    {/* {date} */}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" 
                                        }}>Price $</Form.Label>
                    <Form.Control type="text" min="0" placeholder="Enter Price" 
                    onChange={({ target }) => setPrice(target.value)}/>
                    {/* {price} */}
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicCount">
                    <Form.Label style={{textAlign:"center",
                                        fontSize:"20px",
                                        color:"black" 
                                        }}>Count in Stock</Form.Label>
                    <Form.Control type="text" min="0"  placeholder="Enter Count in stock" 
                    onChange={({ target }) => setStockCount(target.value)}/>
                    {/* {countInStock} */}
                </Form.Group>
   
                <br/>

                <Button variant="dark" type="submit" 
                      style={{textAlign:"center",
                      fontSize:"15px",
                      color:"black" }} >
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
    {/* <div className="spinner-grow text-danger" role="status">
      <span className="sr-only">Loading...</span>
    </div> */}
    <p>ARE YOU LOST?????</p>
    </Container>
    )
}
}
export default AdminVinylsAdd