import {useState , useEffect} from 'react'
import React from 'react'
import {Row , Col, Container , Form, Button} from 'react-bootstrap'
import match from 'react-router-bootstrap'
import Product from '../components/Product'
import SearchBar from '../components/SearchBar'
import axios from 'axios'

function StoreScreen() {
    
    const [category , categoryValue] = useState("")
    const [price , priceValue]       = useState("0")
    const [rating , ratingValue]       = useState("")
    const [products , setProducts]   = useState([]) //empty array
    const [autoCompleteProducts , setAutoCompleteProducts]  = useState([])
    const [filters , setFilters]   = useState([])

    const [text ,setText] = useState([])
    const [suggestions , setSuggestions] = useState([])

    const loggedUser = localStorage.getItem('user')
    const foundUser = JSON.parse(loggedUser);
  

    const sendSuggestion = async() => {
        const {data} = await axios.get(`api/filters/title/${text}`)
        setProducts([data])   
    }
    
    const onSuggestHandler = (text) => {
        setText(text)
        setSuggestions([])  
    }

    const onChangeHandler = (text) => {
        var matches = []
        if (text.length > 0) {
            matches = autoCompleteProducts.filter(product =>{
                const regex = new RegExp(`${text}` , "gi")
                return product.title.match(regex)
            })
        } 
        setText(text)
        setSuggestions(matches)
        
    }
   

    useEffect(() => {  
        async function getfilters() { 
            const {data} = await axios.get('/api/filters/categories/' ) 
            setFilters(data)
        }
        getfilters()
       
    } , []) 


    useEffect(() => {  
        async function fetchProducts(){ 
            const {data} = await axios.get('/api/vinyls/') 
            setProducts(data)
            setAutoCompleteProducts(data)
        }
        fetchProducts()
       
    } , []) 


   
        const handlefilters = async(e) => {
            e.preventDefault();
            const {data} = await axios.get(`api/filters/?price__lte=${price}&category=${category}&rating__lte=${rating}`)
            setProducts(data)
        }

    return (      
            <Container fluid style={{paddingTop:"2rem" ,
                                     paddingBottom:"5rem" ,
                                     backgroundColor:"orange",
                                     minHeight:"610px",
                                     zIndex:"-1"}}>

                <Row style={{textAlign:"center" , height:"20rem" }}>
                    <h1>Latest Products</h1> 
                    <Container style={{width:"40%" ,height:"18rem" ,alignItems:"center",position:"relative"}}>
                        <Form  className="searchForm">
                            <Form.Control type="search"  style={{fontSize:"20px",
                                                                textAlign:"center",
                                                                height:"5rem",
                                                                width:"70%",
                                                                position:"absolute",
                                                                top:"0%",
                                                                left:"14.2%"
                                                                }}
                                value={text} onChange={({target})=> onChangeHandler(target.value)}>
                            </Form.Control>
                            <Form.Group style={{position:"absolute",
                                                width:"70%",
                                                top:"27.5%",
                                                left:"14.2%",
                                                zIndex:"1"
                                               }}>
                            {suggestions && suggestions.map((suggestion , i) => 
                               <Col key={i} onClick={() => onSuggestHandler(suggestion.title)} style={{fontSize:"20px",
                                                                                                       textAlign:"center",
                                                                                                       height:"3.5rem",
                                                                                                       width:"100%",
                                                                                                       fontWeight:"900",
                                                                                                       backgroundColor:"#66A182",
                                                                                                        }}
                                            className="suggestion col-mid-12 justify-content-md-center">
                                    {suggestion.title}
                               </Col>
                            )}
                            </Form.Group>
                            <Button type="button"  className="submitButton"  style={{width: "15.8%",
                                                                                    height: "50px",
                                                                                    fontSize: "15px",
                                                                                    position:"absolute",
                                                                                    top:"0%",
                                                                                    right:"0%"
                                                                                    }} 
                                    onClick={sendSuggestion}>
                                Search
                            </Button>
                        </Form>
                    </Container>
                </Row>
                <Row >            
                    <Col xl={3} style={{textAlign:"center",
                                        paddingLeft:"5%",
                                       }}>
                        <Form style={{border:"1px solid black",
                                      borderRadius:"2rem",
                                      width:"80%",
                                      height:"40rem",
                                      backgroundColor:"white"
                                    }}
                                onSubmit={handlefilters}>
                            <Form.Label  style={{padding:"1rem",
                                                 margin:"0",
                                                 fontSize:"19px",
                                                 backgroundColor:""}}>    
                                <small className="text-muted" style={{marginRight:"1rem"}}>Change</small>
                                    Filters 
                                <small className="text-muted" style={{marginLeft:"1rem"}}>to find:</small>       
                            </Form.Label>
                            <Form.Label style={{fontSize:"20px"}}>Music Categories</Form.Label>
                            <Form.Control as="select"  style={{fontSize:"20px",
                                                               textAlign:"center",
                                                               height:"5rem",
                                                               width:"70%",
                                                               margin:"0rem 15% 0rem 15%",
                                                               borderRadius:"2rem",
                                                              }}
                                        onChange={({ target }) => categoryValue(target.value)}>
                                    
                                <option disabled selected >Choose</option>
                                {filters.map(filter => (
                                    <option>{filter}</option>
                                ))}
                            </Form.Control>
                            <Form.Label style={{fontSize:"20px" , marginTop:"1rem"}}>Rating</Form.Label>
                            <Form.Control as="select"  style={{fontSize:"20px",
                                                               textAlign:"center",
                                                               height:"5rem",
                                                               width:"70%",
                                                               margin:"0rem 15% 0rem 15%",
                                                               borderRadius:"2rem",
                                                              }}
                                        onChange={({ target }) => ratingValue(target.value)}>
                                <option disabled selected >Choose</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Control>
                            <Form.Label style={{fontSize:"20px" , marginTop:"1rem"}}>Price</Form.Label>
                            <Form.Control as="fieldset"  className="form-group" style={{fontSize:"20px",
                                                                                        textAlign:"center",
                                                                                        height:"5rem",
                                                                                        width:"70%",
                                                                                        margin:"0rem 15% 0rem 15%",
                                                                                        borderRadius:"2rem",
                                                                                        }}>       
                                {price}
                                <input type="range" className="form-range" id="customRange1" min="0" max="200" value={price}
                                       style={{padding:"0rem"}} onChange={({target}) => priceValue(target.value)}/>   
                            </Form.Control>   
                                <Button type="submit" className="submitButton" style={{ fontSize:"20px",
                                                                                        textAlign:"center",
                                                                                        height:"5rem",
                                                                                        width:"90%",
                                                                                        margin:"1.5rem 15% 0rem 5%",
                                                                                        borderRadius:"2rem",
                                                                                        }}> 
                                CLick me
                            </Button>            
                        </Form>
                    </Col>
                    <Col xl={9} style={{overflow:"auto"}}>
                        {products.map(product => (
                        <Col  key={product.id} sm={12} md={6} lg={1} xl={1} style={{marginRight:"10rem",
                                                                                    height:"30rem",
                                                                                    textAlign:"center",
                                                                                    }} >
                            <Product product={product}/>
                        </Col>
                    ))}
                    </Col>     
                </Row>
            </Container>  
    )
}

export default StoreScreen