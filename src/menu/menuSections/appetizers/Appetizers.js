import React from "react"
import AppetizerContent from "./AppetizerContent"
// import AppetizerPrices from "./AppetizerPrices"
import "../../menu.css"

const Appetizers = () => {

    return(
        <div className="menu-section-container">
            <AppetizerContent/>
            {/* <AppetizerPrices/> */}
        </div>
    )
}

export default Appetizers