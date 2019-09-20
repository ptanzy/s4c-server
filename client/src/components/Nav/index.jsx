import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import ImagePanel from '../../components/ImagePanel/index';
import "./style.css";

class Nav extends Component {

    render(props) {

      return(
        <nav className="s4c-nav">
          
          <ul> 
            <li  className={`dropdown prim-text`} id="dropdown">
                <ImagePanel id="s4c-img-long" src="./assets/images/s4clong.svg" alt="Styles For Condfidence Logo"/>
              <div class="dropdown-content">
                {this.props.links.map(function(item){
                  return <NavLink to={item.loc} exact={true} activeClassName="active">{item.text}</NavLink>;
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