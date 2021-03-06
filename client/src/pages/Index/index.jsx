import React, {Component} from 'react';
import Header from '../../components/Header/index';
import ImagePanel from '../../components/ImagePanel/index';
import "./style.css";

class Index extends Component {
    
    render() {
        return(
          <div className="mainContain" id="index-container">
            <div id="index-background"></div>
            <Header class="index-head" id="idx-head-4" >Individuality</Header>

            {/* <div className="home-header box-shadow" id="home-header-3">
            </div> */}
            <Header class="index-head" id="idx-head-3" >Excellence</Header>

            {/* <div className="home-header box-shadow" id="home-header-2">
            </div> */}
            <Header class="index-head" id="idx-head-2" >Self-efficacy</Header>

            {/* <div className="home-header box-shadow" id="home-header-1">
            </div> */}
            <Header class="index-head" id="idx-head-1" >Confidence</Header>

          </div>
        )
    }
}

export default Index;