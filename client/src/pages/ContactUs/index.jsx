import React, {Component} from 'react';
import Paragraph from '../../components/Paragraph/index';
import ToolTip from '../../components/ToolTip/index';
import "./style.css";

import axios from "axios"

class ContactUs extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      fname: this._fname.value,
      lname: this._lname.value,
      email: this._email.value,
      contactNo: this._contactNo.value,
      message: this._message.value
    };

    // fetch('/contact', {
    //   method: 'POST',
    //   body: data,
    // });
    
    axios.post('/contact', data)
      .then((result) => {
        console.log(result+" from post contact")
      });
  }


  render(){
    return (
      <React.Fragment>
        <div className="contact-container box-shadow"> 
          <Paragraph id="contact-para">
            If you would like to bring us to your school please call us at (347)479-0912 <br/><br/>
            You can also contact us via our email - styles4confidence@gmail.com - <br/><br/>
            For your convenience you can contact us using the form provided below.
          </Paragraph>
          <div class="form-style" id="contact-form">
            <form onSubmit={this.handleSubmit}>
              <fieldset><legend>Personal</legend>
                <label htmlFor="fname"><span>First Name<span class="required-input">*</span></span>
                  <input type="text" class="input-field" name="fname" placeholder="First Name" ref={input => this._fname = input} required/>
                </label>
                <label htmlFor="lname"><span>Last Name<span class="required-input">*</span></span>
                  <input type="text" class="input-field" name="lname" placeholder="Last Name" ref={input => this._lname = input} required/>              
                </label>
                <label htmlFor="email"><span>Email<span class="required-input">*</span></span>
                  <input type="email" class="input-field" name="email" placeholder="Email" ref={input => this._email = input} required/>
                </label>
                <label htmlFor="contactNo"  class="tooltip"><ToolTip text="Format: (###)###-####" /><span>Contact Number</span>
                  <input type="tel" class="tel-number-field" name="contactNo" pattern="/^\(\d{3}\)\s?\d{3}-\d{4}$/" placeholder="Contact Number (###)###-####" maxLength="10" ref={input => this._contactNo = input} />
                </label>
              </fieldset>
              <fieldset><legend>Message</legend>
                <label htmlFor="message"><span>Message<span class="required-input">*</span></span>
                  <textarea name="message" rows="4" placeholder="message" class="textarea-field" ref={input => this._message = input} required></textarea>
                </label>
                <button>Send</button>
              </fieldset>
            </form>
          </div>
        </div>
    </React.Fragment>
    );
  }
}

export default ContactUs;