import React from 'react'
import {Container} from 'react-bootstrap'




   


function Footer() {

    function openExternalURL() {
        window.open("https://github.com/christosno/group_project")
          };
 
    function scrollToTop(){
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        });
    };
 


    return (
        <Container fluid style={{paddingLeft:"0rem" ,
                                paddingRight:"0rem" ,
                                }}>
                            
            <footer style={{position:"relative"}}>
                <div className="footer">
                <div className="wrapper">
                    <input type="checkbox" id="click" />
                    <label className="btn-1" htmlFor="click">Newsletter</label>
                    <div className="field">
                        <input type="text" placeholder="Email Address" />
                        <label htmlFor="click" className="btn-2">Subscribe</label>
                    </div>
                </div>
                </div>

                <div className="footer">
                    <div className="wrapper">
                        <div className="icon facebook">
                            <div className="tooltip">
                                Facebook
                            </div>
                            <span><i className="fab fa-facebook-f"></i></span>
                        </div>
                        <div className="icon twitter">
                            <div className="tooltip">
                                Twitter
                            </div>
                            <span><i className="fab fa-twitter"></i></span>
                        </div>
                        <div className="icon instagram">
                            <div className="tooltip">
                                Instagram
                            </div>
                            <span><i className="fab fa-instagram"></i></span>
                        </div>
                        <div className="icon github">
                            <div className="tooltip">
                                Github
                            </div>
                            <span style={{boxSizing:"border-box"}}>

                                <button onClick={openExternalURL} style={{border:"none",
                                                                         background: "transparent",
                                                                         width:"100%",
                                                                         display:"block",
                                                                         padding:"1rem",
                                                                            }}>
                                    <i className="fab fa-github"></i>
                                </button>
                            </span>
                        </div>
                        <div className="icon youtube">
                            <div className="tooltip">
                                YouTube
                            </div>
                            <span><i className="fab fa-youtube"></i></span>
                        </div>
                        <div className="icon arrow" >
                            <div className="tooltip"  >
                            Top
                            </div>
                            <span style={{boxSizing:"border-box"}}>
                                <button onClick={scrollToTop} className="scrollToTop" style={  {border:"none",
                                                                                                background: "transparent",
                                                                                                width:"100%",
                                                                                                display:"block",
                                                                                                padding:"1rem",               
                                                                                                }}> 
                                    <i className="fas fa-arrow-up"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="wrapper">
                        <div className="copyright">Copyright &copy;2021 | Designed by PythonTeam</div>
                    </div>
                    
                </div>
               
            </footer>
        </Container>
        
        
    )
}

export default Footer
