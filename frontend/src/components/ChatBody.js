import React from "react";
import { Container , Col , Image , ListGroup} from "react-bootstrap";
import ChatInput from "./ChatInput";
import { UseEffect } from "react";
import axios from "axios";

function ChatBody(loggedUser , messages){
    
    return(
        <>
            <Col className="head-img">
                {/* <Image src="user.png" alt="" /> */}
                <p>{loggedUser.name}</p>
            </Col>
            <Col className="message-content">
                <ul>
                    {(Object.keys(messages).length !== 0 ) ?
                        messages.map(message => (
                            <li className="received">
                                {message.user}
                                <p>{message.body}</p>
                            </li>
                                  ))
                        :
                        <li></li>
                    }  
                </ul>
            </Col>
        </>


    )
}
export default ChatBody