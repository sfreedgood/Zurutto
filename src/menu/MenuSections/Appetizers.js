import React from "react"

//Commented code is template for bulk-creating items if
//content is is supported format.
//Alternatively hardcode each item indiviually...

// import data from 

// const appetizerData = data

const Appetizers = () => {
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
            <div className="section-item">Regular</div>
            <div className="section-item">Cheese</div>
            <div className="section-item">Radish</div>
            <div className="section-head">Edamame</div>
            <div className="section-head">Edamame <span className="section-item">(w/ garlic butter)</span></div>
            <div className="section-head">Kimchi</div>
            <div className="section-head">Sesame Cucumber</div>
            <div className="section-head">Karaage <span className="section-item">(fried chicken)</span></div>
            <div className="section-head">Roasted Pork Buns <span className="section-item">(2pcs)</span></div>
            <div className="section-head">Takoyaki <span className="section-item">(8pcs)</span></div>
            <div className="section-head">French Fries, Okonomiyaki Style</div>
            <div className="section-head">Zarutto Salad</div>
            <div className="section-head">Tofu Salad</div>
            {/* {displayAppetizers} */}
            {/* Alternatively hardcode all items here */}
        </div>
    )
}

export default Appetizers;