import React from "react"
import classNames from "classnames"
import "../../menu.css"

//Commented code is template for bulk-creating items if
//content is is supported format.
//Alternatively hardcode each item indiviually...

// import data from 

// const mainData = data

const MainContent = () => {
    
    //put logic here
    // const displayMains = mainData.map(el => {
    //     return(
    //         <div className="main-item">
    //             use data from {el} to populate this data
    //         </div>
    //     )
    // })

    return(
        <div className="menu-section-container">
            <div className="menu-head">
                <span className="content">Zurutto Ramen</span>
                <span className="price">$12</span>
            </div>
            <div className="menu-item">(Chicken broth)</div>
            <div className={classNames("menu-item", "item-description")}>Miso, corn, bean sprouts, cabbage, onion, scallion, ground pork, roasted pork, noodle</div>

            <div className="menu-head">
                <span className="content">Spicy Zurutto Ramen</span>
                <span className="price">$13</span>
            </div>
            <div className="menu-item">(Chicken broth)</div>
            <div className={classNames("menu-item", "item-description")}>Spicy oil, miso, corn, bean sprouts, cabbage, onion, scallion, ground pork, roasted pork</div>

            <div className="menu-head">
                <span className="content">Vegetable Soy Milk Miso Ramen</span>
                <span className="price">$15</span>
            </div>
            <div className="menu-item">(Vegetable broth and soy milk)</div>
            <div className={classNames("menu-item", "item-description")}>Miso, kimchi, onion, bean sprouts, cabbage, scallion, corn, sea weed, bamboo, noodle</div>

            <div className="menu-head">
                <span className="content">Truffle Dan Dan Ramen</span>
                <span className="price">$15</span>
            </div>
            <div className="menu-item">(Vegetable broth; less soup & spicy)</div>
            <div className={classNames("menu-item", "item-description")}>Sesame paste, white truffle oil, parmesan cheese, ground pork, seasoned boiled egg, crunchy onions, scallion, chili oil</div>

            <div className="menu-head">Ramen Toppings</div>
            <div className="menu-item">
                <span className="content">Kaedama (Extra Noodles)</span>
                <span className="price">$2</span>
            </div>
            <div className="menu-item">
                <span className="content">Roasted pork (2 Pcs)</span>
                <span className="price">$3</span>
            </div>
            <div className="menu-item">
                <span className="content">Bamboo shoot</span>
                <span className="price">$2</span>
            </div>
            <div className="menu-item">
                <span className="content">Spicy chili oil</span>
                <span className="price">$2</span>
            </div>
            <div className="menu-item">
                <span className="content">Seasoned boiled egg</span>
                <span className="price">$2</span>
            </div>
            <div className="menu-item">
                <span className="content">Poached egg</span>
                <span className="price">$2</span>
            </div>
            <div className="menu-item">
                <span className="content">Crunchy onion</span>
                <span className="price">$2</span>
            </div>


            <div className="menu-head">
                <span className="content">Okonomiyaki</span>
                <span className="price">$12</span>
            </div>
            <div className="menu-item">(Japanese Style Pancake)</div>
            <div className={classNames("menu-item", "item-description")}>Bacon, cabbage, crunchy tempura flake, egg, scallion, original teriyaki sauce, mayonnaise, dry seaweed, bonito flake, flour</div>

            <div className="menu-head">
                <span className="content">Kobe Beef Burger</span>
                <span className="price">$12</span>
            </div>
            <div className={classNames("menu-item", "item-description")}>Kobe ground beef, romaine lettuce, cheese, tomato, scallion, original bbq sauce, spicy mayonnaise</div>
            {/* {displayMains} */}
            {/* Alternatively hardcode all items here */}
        </div>
    )
}

export default MainContent;