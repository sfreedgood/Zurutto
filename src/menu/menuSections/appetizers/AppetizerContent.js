import React from "react"
import "../../menu.css"
import classNames from "classnames"

const AppetizerContent = () => {

    return(
        <div className="menu-section-container">
            <div className="menu-head">Gyoza (6pcs)</div>
            <div className="menu-item">
                <span className="content">Regular</span>
                <span className="price">$6</span>
            </div>
            <div className="menu-item">
                <span className="content">Cheese</span>
                <span className="price">$7</span>
            </div>
            <div className="menu-item">
                <span className="content">Radish</span>
                <span className="price">$7</span>
            </div>
            <div className="menu-head">
                <span className="content">Edamame</span>
                <span className="price">$4</span>
            </div>

            <span className="menu-head">Edamame</span>
            <span className="item-detail">(w/ garlic butter)</span>
            <span className="price">$5</span>

            <div className="menu-head">
                <span className="content">Kimchi</span>
                <span className="price">$4</span>
            </div>
            <div className="menu-head">
                <span className="content">Sesame Cucumber</span>
                <span className="price">$6</span>
            </div>

            <span className="menu-head">Karaage</span>
            <span className="item-detail">(fried chicken)</span>

            <span className="item-detail">(3pcs)</span>
            <span className="price">$4</span>

            <span className="item-detail">(6pcs)</span>
            <span className="price">$7</span>

            <div className="menu-head">
                <span className="content">Roasted Pork Buns <span className="menu-item">(2pcs)</span></span>
                <span className="price">$7</span>
            </div>
            <div className="menu-head">
                <span className="content">Takoyaki <span className="menu-item">(8pcs)</span></span>
                <span className="price">$7</span>
            </div>
            <div className="menu-head">
                <span className="content">French Fries, Okonomiyaki Style</span>
                <span className="price">$6</span>
            </div>
            <div className="menu-head">
                <span className="content">Zarutto Salad</span>
                <span className="price">$8</span>
            </div>
            <div className="menu-head">
                <span className="content">Tofu Salad</span>
                <span className="price">$8</span>
            </div>
        </div>
    )
}

export default AppetizerContent;