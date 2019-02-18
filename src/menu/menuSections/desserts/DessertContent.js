import React from "react"
import "../../menu.css"

//Commented code is template for bulk-creating items if
//content is is supported format.
//Alternatively hardcode each item indiviually...

// import data from 

// const dessertData = data

const DessertContent = () => {
    //put logic here
    // const displayDesserts = dessertData.map(el => {
    //     return(
    //         <div className="dessert-item">
    //             use data from {el} to populate this data
    //         </div>
    //     )
    // })

    return(
        <div>
            <div className="section-item">
                <span className="content">Almond Tofu Pudding</span>
                <span className="price">$7</span>
            </div>

            <div className="section-item">
                <span className="content">Mochi Green Tea or Vanilla</span>
                <span className="price">$5</span>
            </div>

            <div className="section-item">
                <span className="content">Yuzu Sherbert</span>
                <span className="price">$5</span>
            </div>
            {/* {displayDesserts} */}
            {/* Alternatively hardcode all items here */}
        </div>
    )
}

export default DessertContent;