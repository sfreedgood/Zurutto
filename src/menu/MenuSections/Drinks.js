import React from "react"
import "../menu.css"

//Commented code is template for bulk-creating items if
//content is is supported format.
//Alternatively hardcode each item indiviually...

// import data from 

// const drinkData = data

const Drinks = () => {
    //put logic here
    // const displayDrinks = drinkData.map(el => {
    //     return(
    //         <div className="drink-item">
    //             use data from {el} to populate this data
    //         </div>
    //     )
    // })

    return(
        <div>
            <div className="section-head">Draft Beers</div>
            <div className="section-item">Sapporo</div>
            <div className="section-item">Asahi</div>

            <div className="section-head">Bottled Beers</div>
            <div className="section-item">Kagua Rouge</div>
            <div className="section-item">Kagua Blanc</div>
            <div className="section-item">Ozeno Yukidoke Ipa</div>
            <div className="section-item">Ozeno White Weizen</div>
            <div className="section-item">Ginga Koge</div>

            <div className="section-head">Sake</div>
            <div className="section-item">Daissai</div>
            <div className="section-item">Nigori</div>
            <div className="section-item">Kikusui</div>
            <div className="section-item">Hakkaisan</div>
            <div className="section-item">Hot Sake</div>

            <div className="section-head">White Wine</div>
            <div className="section-item">House Chardonnay</div>
            <div className="section-item">Sauvignon Blanc (New Zealand)</div>
            <div className="section-item">Pinot Grigio (Italy)</div>
            <div className="section-item">Chowa Plum Wine</div>
            <div className="section-item">(Japanese Green Plum)</div>

            <div className="section-head">Red Wine</div>
            <div className="section-item">House Merlot</div>
            <div className="section-item">Cabernet (California)</div>
            <div className="section-item">Pinot Noir (France)</div>

            <div className="section-head">Soft Drinks</div>
            <div className="section-item">Coke</div>
            <div className="section-item">Diet Coke</div>
            <div className="section-item">Ginger Ale</div>
            <div className="section-item">Sparking Water</div>
            {/* {displayDrinks} */}
            {/* Alternatively hardcode all items here */}
        </div>
    )
}

export default Drinks;