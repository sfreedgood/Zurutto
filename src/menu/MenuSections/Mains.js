import React from "react"

//Commented code is template for bulk-creating items if
//content is is supported format.
//Alternatively hardcode each item indiviually...

// import data from 

// const mainData = data

const Mains = () => {
    
    //put logic here
    // const displayMains = mainData.map(el => {
    //     return(
    //         <div className="main-item">
    //             use data from {el} to populate this data
    //         </div>
    //     )
    // })

    return(
        <div>
            <div className="section-head">Zurutto Ramen</div>
            <div className="section-item">(Chicken broth)</div>
            <div className="section-item">Miso, corn, bean sprouts, cabbage, onion, scallion, ground pork, roasted pork, noodle</div>

            <div className="section-head">Spicy Zurutto Ramen</div>
            <div className="section-item">(Chicken broth)</div>
            <div className="section-item">Spicy oil, miso, corn, bean sprouts, cabbage, onion, scallion, ground pork, roasted pork</div>

            <div className="section-head">Vegetable Soy Milk Miso Ramen</div>
            <div className="section-item">(Vegetable broth and soy milk)</div>
            <div className="section-item">Miso, kimchi, onion, bean sprouts, cabbage, scallion, corn, sea weed, bamboo, noodle</div>

            <div className="section-head">Truffle Dan Dan Ramen</div>
            <div className="section-item">(Vegetable broth; less soup & spicy)</div>
            <div className="section-item">Sesame paste, white truffle oil, parmesan cheese, ground pork, seasoned boiled egg, crunchy onions, scallion, chili oil</div>

            <div className="section-head">Ramen Toppings</div>
            <div className="section-item">Kaedama (Extra Noodles)</div>
            <div className="section-item">Roasted pork (2 Pcs)</div>
            <div className="section-item">Bamboo shoot</div>
            <div className="section-item">Spicy chili oil</div>
            <div className="section-item">Seasoned boiled egg</div>
            <div className="section-item">Poached egg</div>
            <div className="section-item">Crunchy onion</div>


            <div className="section-head">Okonomiyaki</div>
            <div className="section-item">(Japanese Style Pancake)</div>
            <div className="section-item">Bacon, cabbage, crunchy tempura flake, egg, scallion, original teriyaki sauce, mayonnaise, dry seaweed, bonito flake, flour</div>

            <div className="section-head">Kobe Beef Burger</div>
            <div className="section-item">Kobe ground beef, romaine lettuce, cheese, tomato, scallion, original bbq sauce, spicy mayonnaise</div>
            {/* {displayMains} */}
            {/* Alternatively hardcode all items here */}
        </div>
    )
}

export default Mains;