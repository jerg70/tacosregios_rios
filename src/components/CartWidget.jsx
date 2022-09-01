import React, { Component } from "react";

class CartWidget extends Component{
    render(){
        return (
            // <img src="..\..\public\media\cartwidget_icon.png" alt="CartWidgetIcon" className="cartWidgetIcon" />

            // <a class="navbar-brand" href="#">
            // <img src="..\..\public\media\cartwidget_icon.png" width="30" height="30" alt="CartWidgetLogo" className="cartWidgetIcon justify-content-end"/>
            // </a>

            <a href="">
            <img src="../../media/cartwidget_Icon.png" alt="CWI" className="navbar-brand cartWidgetIcon justify-content-end"/>
            </a>
        )
    }
}

export default CartWidget;