import React, {Component} from 'react';
import Header from '../../components/Header/index';
import Paragraph from '../../components/Paragraph/index';
import ImagePanel from '../../components/ImagePanel/index';
import "./style.css";

class Give extends Component {

  render(){
    return (
      <React.Fragment>
        <div className="box-shadow" id="give-first-sect">
          <ImagePanel class="s4c-med-img box-shadow" id="logo-s4c-img" src="./assets/images/s4cmed.svg" alt="Styles For Confidence Medium Logo"/>
        </div>
        <div className="give-container">
          <Header class="box-shadow" id="give-header">GIVE 4 CONFIDENCE!</Header> 
          <Paragraph id="give-para">
            Contributions can be made to Style4Confidence via PayPal and Patreon. <br/><br/> Please click one of the contribution options below to give.
          </Paragraph>
          <div id="don1">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="R3G2SCHWB6E6N" />
              {/* <input type="submit" border="0" name="submit" value="Donate" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" /> */}
              <button id="paypal" type="submit" className="btn btn-success box-shadow">
                  <i className="fab fa-paypal pay"></i> GIVE
              </button>
              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
          <div id="don2">
            <a href="https://www.patreon.com/bePatron?u=24346912" target="_blank" data-patreon-widget-type="become-patron-button"><i className="fab fa-patreon box-shadow" id="patr"><span id="don-text">GIVE</span></i></a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
          </div>
          <Paragraph id="disclaimer-para">
            Disclaimer: Note contributions made to Styles 4 Confidence will be used towards the continuity and stature
            of the company’s mission to service hairstyles to scholars. Styles 4 Confidence does not reserve tax exempt
            status and is not currently recognized by the IRS as a 501c-3 organization. Please consult with your tax
            professional for more information.
          </Paragraph>
        </div>
    </React.Fragment>
    );
  }
}

export default Give;