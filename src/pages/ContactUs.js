
import { Component } from 'react';
import { Image } from 'react-bootstrap'
import contact_us from '../images/contact-us.png'
import '../App.css'
class ContactUs extends Component {
  render() {
    return <div className='contact-us-page'>
      <Image className="img-fluid col-sm-5" src={contact_us} alt="logo"></Image>
     
      <p className='about-us-paragraph lato'>
      We are really happy to answer any inquiries you may have.<br/>
      <br/>
      Write to us we will get back to you.<br/>
          
      <b>
        <a className="email" href="mailto:contact@gedygroup.com">
          <h3 style={{color: "black"}}>contact@gedygroup.com </h3> 
        </a>
      </b>
      </p>
      <br/>
      <br/>
      </div>    
  }
}
export default ContactUs
