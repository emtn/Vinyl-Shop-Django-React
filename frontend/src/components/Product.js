import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'



function Product({product}) {  //anti gia props.products to exoume steilei apo to homescreen
    return (
       
          <Card className='rounded ' style={{width:"20rem",
                                             padding:"0.2rem",
                                             marginBottom:"2rem"

                                             }}>
            <Link to={`/store/${product.id}`}>
               <Card.Img src = {product.image} style={{height:"100%"}}/>
            </Link>
        
            <Card.Body style={{height:"8rem"}}>
                    <Link to={`/store/${product.id}`}>
                        <Card.Title as = 'div'>
                            <h5>{product.title}</h5>
                        </Card.Title>
                    </Link>
                
                
                <Card.Text as ='div'  >
                    <div className='my-3'>  
                        <Rating value={product.rating}  color={'#f8e825'} />'
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
     
    );
}

export default Product


// text={`${product.numReviews} reviews`}