import { useState, useEffect } from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";


function ControlledCarousel() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/vinyls/");
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (

    <Container >
  
        <div className='container-fluid' >       
            <div className="row title" style={{ paddingBottom: "1rem" , paddingTop:"5rem" }} >        
                <div className="col-sm-12">        
                </div>    
            </div>
        </div> 
        <div className='container-fluid' >     
        <Carousel interval={5000} keyboard={false} pauseOnHover={true} >    
                {products.map(product => (
                  <Carousel.Item key={product.id} style={{ 'height': "50rem" }} >  

                    <Link to ={ `/store/${product.id}`} >
                        <Image src={product.image}   className="center-block" style={{width:"42rem" ,
                                                                                      height:"42rem",
                                                                                      borderRadius:"50%",
                                                                                      border:"0.2rem solid white",                           
                                                                                      }}/> 
                    </Link>
                    
                    <Carousel.Caption >        
                      <h3 style={{color:"white" }} >{product.title}</h3> 
                    </Carousel.Caption>  
                      
              </Carousel.Item  >  
              ))}
  
          </Carousel>  
        </div> 
      </Container>
  
    
  );
}

export default ControlledCarousel;


