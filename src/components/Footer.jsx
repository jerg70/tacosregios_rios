import React, { Component } from "react";
import Prefooter from "./Prefooter";

class Footer extends Component{
    render(){
        return (
            <div> 
                <hr />
                <Prefooter local={this.props.local}/>
            </div>
        )
    }
}

export default Footer;