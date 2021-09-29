import React from "react";
import Section from '../Section/Section';
import Footer from './Footer';

const Footerwrapper=()=>{
    return(
        <Section style={{minWidth: "1200px",
            backgroundColor: "#28328c",
            padding:" 48px 0",
            color: "#fff",
            fontSize: "14px",marginTop:"100px"}}>
                <div style={{width: "1180px",
    margin: "auto"}}>

             <Footer >
            <div className="footerdata" >
                <h3>Practo</h3>
    
                <p>About</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Press</p>
                <p>Contact Us</p>

            </div>
            <div  className="footerdata">
                <h3>For Patients</h3>
    
                <p>Search for doctors</p>
                <p>Serch for clinic</p>
                <p>Search for hospitals</p>
                <p>Book diaginistics checks</p>
                <p>Book Full Body checkup</p>
                <p>Practo plus</p>
            </div>
            <div  className="footerdata">
                <h3>For Clinics</h3>
    
                <p>Ray by Pacto</p>
                <p>Practo Reach</p>
                <p>Ray Tab</p>
                <p>Practo Pro</p>
    
            </div>
            <div  className="footerdata">
                <h3>For hospitals</h3>
    
                <p>Insta by Practo</p>
                <p>Quickwell by Pacto</p>
                <p>Practo Profile</p>
                <p>Practo Reach</p>
            </div>
            <div  className="footerdata">
                <h3>More</h3>
    
                <p>Help</p>
                <p>Developers</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>Healthcare directory</p>
            </div>
            <div className="footerdata" >
                <h3>Social</h3>
    
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Linkedin</p>
                <p>Youtube</p>
                <p>Github</p>
            </div>
        </Footer>
           </div>
           <div style={{textAlign:"center"}}>
               <span>
                   <img src="https://www.practostatic.com/web-assets/images/white_practo_logo.svg" alt="practo_logo" style={{margin:"28px 0px",border:"0px",maxWidth:"210px",maxHeight:"48px"}} />
               </span>
               <div style={{color:"#b8bbd9",fontWeight:700}}>
                   <span>Copyright © 2017, Practo. </span>
                   <span>All rights reserved.</span>
               </div>
           </div>
        </Section>
    )
}

export default Footerwrapper