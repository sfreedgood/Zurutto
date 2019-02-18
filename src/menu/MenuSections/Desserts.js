import React from "react"

//Commented code is template for bulk-creating items if
//content is is supported format.
//Alternatively hardcode each item indiviually...

// import data from 

// const dessertData = data

const Desserts = () => {
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
            <div className="section-head">Almond Tofu Pudding</div>
            <div className="section-head">Mochi Green Tea or Vanilla</div>
            <div className="section-head">Yuzu Sherbert</div>
            {/* {displayDesserts} */}
            {/* Alternatively hardcode all items here */}
        </div>
    )
}

export default Desserts;