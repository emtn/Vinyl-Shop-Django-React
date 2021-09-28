import React , { useEffect , useState , setState} from "react";
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import {ToggleButtonGroup} from "react-bootstrap";

function Chat(){

    const loggedUser =  JSON.parse(localStorage.getItem('user'))
    const [chatroom, setChat]= useState(localStorage.getItem(false))

    const [messages , setMessage] = useState("");
    const [send_message , sendMessage] = useState("");
    // console.log(loggedUser.name)
    function chatDisplay() {
        if (chatroom){
            setChat(false)
        }else{
            setChat(true)
        }
    }

    const getMessages = async (e) => {

       const {data} = await axios.get('/api/chat/' , {
            headers : {
                "Authorization" : `Bearer ${loggedUser.token}`
            }
        })
        setMessage(data)
    }

    
// setInterval(getMessages , 10000)
    
    

    const handleSubmit =  (e) => {
        e.preventDefault();
        axios.post('/api/chat/post/',{
                "message":send_message
                },{
                "headers":{
                    "Authorization":`Bearer ${loggedUser.token}`
                }
            }
            )
            
       
    };

    if (loggedUser){
    return(
        <>
        <Button  size="lg" style={{width:"10%",
                                height:"4rem",
                                padding:"0rem",
                                position:"fixed",
                                top:"91rem",
                                right:"3rem",
                                zIndex:"1",
                                backgroundColor:"#66A182"
                            }}
        onClick={chatDisplay}>Chat Room</Button>
        {chatroom ?
            <Container style={{ width:"30%",
                                padding:"0rem",
                                position:"fixed",
                                top:"30.7rem",
                                right:"3rem",
                                zIndex:"1",
                            }}
                        className= "wrapper2">

                {/* {body} */}
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

                {/* Input Field */}
                <Col className="msg-box">
                    <Col className="wrap">
                        <Form>
                            <Form.Control style={{width:"90%"}}
                                id="message-txt"   
                                placeholder="Enter your message..." 
                                value={send_message}
                                onChange={(e)=> sendMessage(e.target.value)}>        
                            </Form.Control>    
                            <Button className="button" variant="danger" id="button-addon2" type='submit'
                                    style={{width:"10%"}} onClick={handleSubmit}>
                                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            </Button>
                        </Form>
                    </Col>
                </Col>
        

            </Container>
            :
            ""
        }
      
        </>
       
        )
    }else{
        return (
            ""
        )
    }
}
export default Chat




//https://talkjs.com/dashboard/tJ0krnEu/settings
//epituximenos@hotmail.com praxitelous4
//Python Project


