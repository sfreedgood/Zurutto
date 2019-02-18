import React from "react"
import "../../menu.css"

//Commented code is template for bulk-creating items if
//content is is supported format.
//Alternatively hardcode each item indiviually...

// import data from 

// const appetizerData = data

const AppetizerContent = () => {
    //put logic here
    // const displayAppetizers = appetizerData.map(el => {
    //     return(
    //         <div className="appetizer-item">
    //             use data from {el} to populate this data
    //         </div>
    //     )
    // })

    return(
        <div>
            <div className="section-head">Gyoza (6pcs)</div>
            <div className="section-item">
                <span className="content">Regular</span>
                <span className="price section-head">$6</span>
            </div>
            <div className="section-item">
                <span className="content">Cheese</span>
                <span className="price section-head">$7</span>
            </div>
            <div className="section-item">
                <span className="content">Radish</span>
                <span className="price section-head">$7</span>
            </div>
            <div className="section-head">
                <span className="content">Edamame</span>
                <span className="price">$4</span>
            </div>
            <div className="section-head">
                <span className="content">Edamame <span className="section-item">(w/ garlic butter)</span></span>
                <span className="price">$5</span>
            </div>
            <div className="section-head">
                <span className="content">Kimchi</span>
                <span className="price">$4</span>
            </div>
            <div className="section-head">
                <span className="content">Sesame Cucumber</span>
                <span className="price">$6</span>
            </div>
            <div className="section-head">
                <span className="content">Karaage <span className="section-item">(fried chicken)</span></span>
                <span className="price">
                    <span className="section-item">(3pcs)</span>$4
                    <span className="section-item">(6pcs)</span>$7
                </span>
            </div>
            <div className="section-head">
                <span className="content">Roasted Pork Buns <span className="section-item">(2pcs)</span></span>
                <span className="price">$7</span>
            </div>
            <div className="section-head">
                <span className="content">Takoyaki <span className="section-item">(8pcs)</span></span>
                <span className="price">$7</span>
            </div>
            <div className="section-head">
                <span className="content">French Fries, Okonomiyaki Style</span>
                <span className="price">$6</span>
            </div>
            <div className="section-head">
                <span className="content">Zarutto Salad</span>
                <span className="price">$8</span>
            </div>
            <div className="section-head">
                <span className="content">Tofu Salad</span>
                <span className="price">$8</span>
            </div>
            {/* {displayAppetizers} */}
            {/* Alternatively hardcode all items here */}
        </div>
    )
}

export default AppetizerContent;