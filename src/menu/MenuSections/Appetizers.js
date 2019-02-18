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
            Gyoza (6pcs)
            Regular
            Cheese
            Radish
            Edamame
            Edamame (w/ garlic butter)
            Kimchi
            Sesame Cucumber
            Karaage (fried chicken) 
            Roasted Pork Buns (2pcs)
            Takoyaki (8pcs)
            French Fries, Okonomiyaki Style
            Zarutto Salad
            Tofu Salad
            {/* {displayAppetizers} */}
            {/* Alternatively hardcode all items here */}
        </div>
    )
}

export default Appetizers;