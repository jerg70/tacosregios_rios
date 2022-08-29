import React from "react";

const Header = ({tacos}) => {
    return(
        <div>
            <h1>
                {tacos}
            </h1>
            <hr />
        </div>
    )
}

export default Header;