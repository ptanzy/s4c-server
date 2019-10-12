import React, {Component} from 'react';
import Paragraph from '../../components/Paragraph/index';
import ToolTip from '../../components/ToolTip/index';
import "./style.css";

import axios from "axios"

class Partner extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      fname: this._fname.value,
      lname: this._lname.value,
      email: this._email.value,
      contactNo: this._contactNo.value,
      desPosition: this._desPosition.value,
      message: this._message.value
    };

    // fetch('/contact', {
    //   method: 'POST',
    //   body: data,
    // });
    
    axios.post('/partners', data)
      .then((result) => {
        console.log(result+" from post partners")
      });
  }


  render(){
    return (
      <div className="partner-container box-shadow mainContain"> 
        <Paragraph id="partner-para">
          Are you a stylist interested in partnering with us? <br/><br/>
          If so, please contact us via s4cpartners@gmail.com <br/><br/>
          Or for your convenience you can use the form below.
        </Paragraph>
        <div class="form-style" id="partner-form">
          <form onSubmit={this.handleSubmit}>
            <fieldset><legend>Personal</legend>
              <label htmlFor="fname"><span>First Name<span class="required-input">*</span></span>
                <input type="text" class="input-field" name="fname" placeholder="First Name" ref={input => this._fname = input} required/>
              </label>
              <label htmlFor="lname"><span>Last Name<span class="required-input">*</span></span>
                <input type="text" class="input-field" name="lname" placeholder="Last Name" ref={input => this._lname = input}  required/>              
              </label>
              <label htmlFor="email"><span>Email<span class="required-input">*</span></span>
                <input type="email" class="input-field" name="email" placeholder="Email" ref={input => this._email = input} required/>
              </label>
              <label htmlFor="contactNo"  class="tooltip"><ToolTip text="Format: (###)###-####" /><span>Contact Number</span>
                <input type="tel" class="tel-number-field" name="contactNo" pattern="/^\(\d{3}\)\s?\d{3}-\d{4}$/" placeholder="Contact Number (###)###-####" maxLength="10" ref={input => this._contactNo = input} />
              </label>
              <label htmlFor="desPosition" class="tooltip"><ToolTip text="Ctr/Cmnd + click to multi-select" /><span>Desired Positions<span class="required-input">*</span></span>
                <select name="desPosition" class="select-field" multiple size="3" ref={input => this.desPosition = input}>
                  <option value="barber">Barber</option>
                  <option value="hair stylist">Hair Stylist</option>
                  <option value="makeup">Makeup Artist</option>
                </select>
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
    );
  }
}

export default Partner;