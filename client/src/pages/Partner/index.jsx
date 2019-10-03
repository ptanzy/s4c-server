import React, {Component} from 'react';
import Header from '../../components/Header/index';
import Paragraph from '../../components/Paragraph/index';
import ImagePanel from '../../components/ImagePanel/index';
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
      rateRangeMin: this._rateRangeMin.value,
      rateRangeMax: this._rateRangeMax.value,
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
      <React.Fragment>
        <div className="partner-container box-shadow"> 
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
                <label htmlFor="contactNo"><span>Contact Number</span>
                  <input type="text" class="tel-number-field" name="contactNo" placeholder="Contact Number (111)111-1111" maxLength="10" ref={input => this._contactNo = input} />
                </label>
                <label htmlFor="rateRange"><span>Rate ($/hour)<span class="required-input">*</span></span>
                  <input type="number" min="0" max="100" class="rate-field" name="rateRangeMin" placeholder="Min" maxLength="6" ref={input => this._rateRangeMin = input} required/>
                  <input type="number" min="0" max="100" class="rate-field" name="rateRangeMax" placeholder="Max" maxLength="6" ref={input => this._rateRangeMax = input} required/>
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

export default Partner;