import React, {Component} from 'react';
import Header from '../../components/Header/index';
// import ImagePanel from '../../components/ImagePanel/index';
import BioPanel from '../../components/BioPanel/index';
import "./style.css";
import s4c_bios from "../../data/s4c_people.json"

class AboutUs extends Component {
    
    render() {
        return(
          <div className="mainContain">
            <Header class="box-shadow" id="bio-header">PEOPLE OF S4C</Header>
            <div className="bio-container box-shadow">
              {
                  s4c_bios.map((person, i) => (
                    <BioPanel id={i} name={person.name} position={person.position} src={person.imgSrc} bio={person.bio} />
                  ))
               }
            </div>
          </div>
        )
    }
}

export default AboutUs;