import React, { Component } from "react";
import { Link } from "react-router-dom";

class CartWidget extends Component{
    render()
    {
        return (
            <Link to='/cart'>
            <img src="../../media/cartwidget_Icon.png" alt="CWI" className="navbar-brand cartWidgetIcon justify-content-end"/>
            </Link>
        )
    }
}

export default CartWidget;