import React, {Component} from 'react';
import "./style.css";
/*
<div class="tooltip">Hover over me
  <ToolTip text="Just a tip" />
</div>
*/
class ToolTip extends Component {
    
    render() {
        return(
          <span class="tooltiptext">{this.props.text}</span>
        )
    }
}

export default ToolTip;