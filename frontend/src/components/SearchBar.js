import React from 'react'
import {Button , Form , Container} from 'react-bootstrap'
import moduleName from 'react-router'
import Autocomplete from 'react-autocomplete'


function SearchBar(value) {
    var products = Object.values(value)
    console.log(Object.values(value))
    return (
        <Container style={{width:"30%" ,alignItems:"center"}}>
            <Form action="" className="searchForm">
                <Form.Control type="search"  style={{fontSize:"20px",
                                                     textAlign:"center",
                                                     height:"5rem",
                                                     width:"100%",
                                                     borderRadius:"2rem",
                                                    }}>
                    
                </Form.Control>
                <Button type="submit"  className="submitButton"  style={{marginTop:"1rem",
                                                                          width: "120px",
                                                                          height: "50px",
                                                                          fontSize: "15px",
                                                                          borderRadius: "2rem",  
                                                                        }} >
                    Search
                </Button>
            </Form>
        </Container>
    )
}

export default SearchBar


//npm install --save react-autocomplete