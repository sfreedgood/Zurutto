import React from "react"
import "../../menu.css"


//Commented code is template for bulk-creating items if
//content is is supported format.
//Alternatively hardcode each item indiviually...

// import data from 

// const drinkData = data

const DrinkContent = () => {
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
            <div className="section-item">
                <span className="content">Sapporo</span>
                <span className="price section-head">$6</span>
            </div>
            <div className="section-item">
                <span className="content">Asahi</span>
                <span className="price section-head">$7</span>
            </div>

            <div className="section-head">Bottled Beers</div>
            <div className="section-item">
                <span className="content">Kagua Rouge</span>
                <span className="price section-head">$10</span>
            </div>
            <div className="section-item">
                <span className="content">Kagua Blanc</span>
                <span className="price section-head">$10</span>
            </div>
            <div className="section-item">
                <span className="content">Ozeno Yukidoke Ipa</span>
                <span className="price section-head">$10</span>
            </div>
            <div className="section-item">
                <span className="content">Ozeno White Weizen</span>
                <span className="price section-head">$10</span>
            </div>
            <div className="section-item">
                <span className="content">Ginga Koge</span>
                <span className="price section-head">$9</span>
            </div>

            <div className="section-head">Sake</div>
            <div className="section-item">
                <span className="content">Daissai</span>
                <span className="price">
                    <span className="section-item">(bottle)</span>
                    <span className="section-head">$50</span>
                    <span className="section-item">(glass)</span>
                    <span className="section-head">$10</span>
                </span>
            </div>
            <div className="section-item">
                <span className="content">Nigori</span>
                <span className="price section-head">$10</span>
            </div>
            <div className="section-item">
                <span className="content">Kikusui</span>
                <span className="price section-head">$12</span>
            </div>
            <div className="section-item">
                <span className="content">Hakkaisan</span>
                <span className="price section-head">$11</span>
            </div>
            <div className="section-item">
                <span className="content">Hot Sake</span>
                <span className="price section-head">$10</span>
            </div>

            <div className="section-head">White Wine</div>
            <div className="section-item">
                <span className="content">House Chardonnay</span>
                <span className="price section-head">$6</span>
            </div>
            <div className="section-item">
                <span className="content">Sauvignon Blanc (New Zealand)</span>
                <span className="price section-head">$8</span>
            </div>
            <div className="section-item">
                <span className="content">Pinot Grigio (Italy)</span>
                <span className="price section-head">$8</span>
            </div>
            <div className="section-item">
                <span className="content">Chowa Plum Wine</span>
                <span className="price section-head">$8</span>
            </div>
            <div className="section-item">(Japanese Green Plum)</div>

            <div className="section-head">Red Wine</div>
            <div className="section-item">
                <span className="content">House Merlot</span>
                <span className="price section-head">$6</span>
            </div>
            <div className="section-item">
                <span className="content">Cabernet (California)</span>
                <span className="price section-head">$8</span>
            </div>
            <div className="section-item">
                <span className="content">Pinot Noir (France)</span>
                <span className="price section-head">$8</span>
            </div>

            <div className="section-head">
                <span className="content">Soft Drinks</span>
                <span className="price">$3.5</span>
            </div>
            <div className="section-item">
                <span className="content">Coke</span>
            </div>
            <div className="section-item">
                <span className="content">Diet Coke</span>
            </div>
            <div className="section-item">
                <span className="content">Ginger Ale</span>
            </div>
            <div className="section-item">
                <span className="content">Sparking Water</span>
            </div>
            {/* {displayDrinks} */}
            {/* Alternatively hardcode all items here */}
        </div>
    )
}

export default DrinkContent;