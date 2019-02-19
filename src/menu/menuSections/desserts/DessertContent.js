import React from "react"
import "../../menu.css"

const DessertContent = () => {

    return(
        <div className="menu-section-container">
            <div className="menu-item">
                <span className="content">Almond Tofu Pudding</span>
                <span className="price">$7</span>
            </div>

            <div className="menu-item">
                <span className="content">Mochi Green Tea or Vanilla</span>
                <span className="price">$5</span>
            </div>

            <div className="menu-item">
                <span className="content">Yuzu Sherbert</span>
                <span className="price">$5</span>
            </div>
        </div>
    )
}

export default DessertContent;