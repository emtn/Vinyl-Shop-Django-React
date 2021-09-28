import React from "react";
import { Container, Form, InputGroup , Button ,Col } from 'react-bootstrap'
import { useState,UseEffect } from "react";
import axios from "axios";

function ChatInput(loggedUser) {
 
        const [msg , setMsg]= useState("");

        const handleSubmit =  (e) => {
            e.preventDefault();
        
        
           

      
            axios.post('/api/chat/post/',{
                    "message":msg
                    },{
                    "headers":{
                        "Authorization":`Bearer ${loggedUser.user.token}`
                    }
                }
                )
            // document.getElementById('message-txt').val("");
        };
      
        return (

        <>
            <Col className="msg-box">
                <Col className="wrap">
                    <Form>
                        <Form.Control  onSubmit={handleSubmit}  style={{width:"90%"}}
                            id="message-txt"   
                            placeholder="Enter your message..." 
                            value={msg}
                            onChange={(e)=>setMsg(e.target.value)}>        
                        </Form.Control>
                    
                        <Button className="submit" variant="danger" id="button-addon2" type='submit'
                                style={{width:"10%"}}>
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </Button>
                    </Form>
                    
                </Col>
            </Col>
        </>


    )
}
export default ChatInput