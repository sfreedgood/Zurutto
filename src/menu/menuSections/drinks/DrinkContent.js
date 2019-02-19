// import React from "react"
// import "../../menu.css"

// const DrinkContent = () => {

//     return(
//         <div className="menu-section-container">
//             <div className="menu-head">Draft Beers</div>
//             <div className="menu-item">
//                 <span className="content">Sapporo</span>
//                 <span className="price menu-head">$6</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Asahi</span>
//                 <span className="price menu-head">$7</span>
//             </div>

//             <div className="menu-head">Bottled Beers</div>
//             <div className="menu-item">
//                 <span className="content">Kagua Rouge</span>
//                 <span className="price menu-head">$10</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Kagua Blanc</span>
//                 <span className="price menu-head">$10</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Ozeno Yukidoke Ipa</span>
//                 <span className="price menu-head">$10</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Ozeno White Weizen</span>
//                 <span className="price menu-head">$10</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Ginga Koge</span>
//                 <span className="price menu-head">$9</span>
//             </div>

//             <div className="menu-head">Sake</div>
//             <div className="menu-item">
//                 <span className="content">Daissai</span>
//                 <span className="price">
//                     <span className="menu-item">(bottle)</span>
//                     <span className="menu-head">$50</span>
//                     <span className="menu-item">(glass)</span>
//                     <span className="menu-head">$10</span>
//                 </span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Nigori</span>
//                 <span className="price menu-head">$10</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Kikusui</span>
//                 <span className="price menu-head">$12</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Hakkaisan</span>
//                 <span className="price menu-head">$11</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Hot Sake</span>
//                 <span className="price menu-head">$10</span>
//             </div>

//             <div className="menu-head">White Wine</div>
//             <div className="menu-item">
//                 <span className="content">House Chardonnay</span>
//                 <span className="price menu-head">$6</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Sauvignon Blanc (New Zealand)</span>
//                 <span className="price menu-head">$8</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Pinot Grigio (Italy)</span>
//                 <span className="price menu-head">$8</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Chowa Plum Wine</span>
//                 <span className="price menu-head">$8</span>
//             </div>
//             <div className="menu-item">(Japanese Green Plum)</div>

//             <div className="menu-head">Red Wine</div>
//             <div className="menu-item">
//                 <span className="content">House Merlot</span>
//                 <span className="price menu-head">$6</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Cabernet (California)</span>
//                 <span className="price menu-head">$8</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Pinot Noir (France)</span>
//                 <span className="price menu-head">$8</span>
//             </div>

//             <div className="menu-head">
//                 <span className="content">Soft Drinks</span>
//                 <span className="price">$3.5</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Coke</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Diet Coke</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Ginger Ale</span>
//             </div>
//             <div className="menu-item">
//                 <span className="content">Sparking Water</span>
//             </div>
//         </div>
//     )
// }

// export default DrinkContent;

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
        <div className="menu-section-container">
            <div className="menu-head">Draft Beers</div>
            <div className="menu-item">
                <span className="content">Sapporo</span>
                <span className="price">$6</span>
            </div>
            <div className="menu-item">
                <span className="content">Asahi</span>
                <span className="price">$7</span>
            </div>

            <div className="menu-head">Bottled Beers</div>
            <div className="menu-item">
                <span className="content">Kagua Rouge</span>
                <span className="price">$10</span>
            </div>
            <div className="menu-item">
                <span className="content">Kagua Blanc</span>
                <span className="price">$10</span>
            </div>
            <div className="menu-item">
                <span className="content">Ozeno Yukidoke Ipa</span>
                <span className="price">$10</span>
            </div>
            <div className="menu-item">
                <span className="content">Ozeno White Weizen</span>
                <span className="price">$10</span>
            </div>
            <div className="menu-item">
                <span className="content">Ginga Koge</span>
                <span className="price">$9</span>
            </div>

            <div className="menu-head">Sake</div>
            <div className="menu-item">
                <span className="content">Daissai</span>
                <span className="price">
                    <span className="menu-item">(bottle)</span>
                    <span className="price">$50</span>
                    <span className="menu-item">(glass)</span>
                    <span className="price">$10</span>
                </span>
            </div>
            <div className="menu-item">
                <span className="content">Nigori</span>
                <span className="price">$10</span>
            </div>
            <div className="menu-item">
                <span className="content">Kikusui</span>
                <span className="price">$12</span>
            </div>
            <div className="menu-item">
                <span className="content">Hakkaisan</span>
                <span className="price">$11</span>
            </div>
            <div className="menu-item">
                <span className="content">Hot Sake</span>
                <span className="price">$10</span>
            </div>

            <div className="menu-head">White Wine</div>
            <div className="menu-item">
                <span className="content">House Chardonnay</span>
                <span className="price">$6</span>
            </div>
            <div className="menu-item">
                <span className="content">Sauvignon Blanc (New Zealand)</span>
                <span className="price">$8</span>
            </div>
            <div className="menu-item">
                <span className="content">Pinot Grigio (Italy)</span>
                <span className="price">$8</span>
            </div>
            <div className="menu-item">
                <span className="content">Chowa Plum Wine</span>
                <span className="price">$8</span>
            </div>
            <div className="menu-item">(Japanese Green Plum)</div>

            <div className="menu-head">Red Wine</div>
            <div className="menu-item">
                <span className="content">House Merlot</span>
                <span className="price">$6</span>
            </div>
            <div className="menu-item">
                <span className="content">Cabernet (California)</span>
                <span className="price">$8</span>
            </div>
            <div className="menu-item">
                <span className="content">Pinot Noir (France)</span>
                <span className="price">$8</span>
            </div>

            <div className="menu-item">
                <span className="content">Soft Drinks</span>
                <span className="price">$3.5</span>
            </div>
            <div className="menu-item">
                <span className="content">Coke</span>
            </div>
            <div className="menu-item">
                <span className="content">Diet Coke</span>
            </div>
            <div className="menu-item">
                <span className="content">Ginger Ale</span>
            </div>
            <div className="menu-item">
                <span className="content">Sparking Water</span>
            </div>
            {/* {displayDrinks} */}
            {/* Alternatively hardcode all items here */}
        </div>
    )
}

export default DrinkContent;