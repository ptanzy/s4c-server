import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import ImagePanel from '../../components/ImagePanel/index';
import "./style.css";

class Nav extends Component {

  hideDropdown = (e) => {
    console.log(e);
    const dropDown = this.refs.dropDown;
    dropDown.setAttribute("style", "display: none;")
  }

  showDropdown = (e) => {
    console.log(e);
    const dropDown = this.refs.dropDown;
    dropDown.setAttribute("style", "display: block;")
  }

  render() {

    return(
      <nav className="s4c-nav">
        
        <ul> 
          <li  className={`dropdown prim-text`} id="dropdown" onMouseOver={this.showDropdown} onMouseOut={this.hideDropdown}> 
              <ImagePanel class="dropdown-shadow" id="s4c-img-long" src="./assets/images/s4clong.svg" alt="Styles For Condfidence Logo"/>
            <div class="dropdown-content" ref="dropDown">
              {this.props.links.map((item) => {
                return <NavLink to={item.loc} exact={true} onClick={this.hideDropdown} activeClassName="active">{item.text}</NavLink>;
              })}
            </div>
          </li>
          {this.props.links.map(function(item){
            return <li className={`s4c-nav-link prim-text`}><NavLink to={item.loc} exact={true} activeClassName="active">{item.text}</NavLink></li>;
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;