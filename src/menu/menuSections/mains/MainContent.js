import React from "react"
import classNames from "classnames"
import "../../menu.css"

const MainContent = () => {

    return(
        <div className="menu-section-container">
            <span className="menu-head">Zurutto Ramen</span>
            <span className="price">$12</span>
            <div className="menu-item">(Chicken broth)</div>
            <div className={classNames("menu-item", "item-description")}>Miso, corn, bean sprouts, cabbage, onion, scallion, ground pork, roasted pork, noodle</div>

            <span className="menu-head">Spicy Zurutto Ramen</span>
            <span className="price">$13</span>
            <div className="menu-item">(Chicken broth)</div>
            <div className={classNames("menu-item", "item-description")}>Spicy oil, miso, corn, bean sprouts, cabbage, onion, scallion, ground pork, roasted pork</div>

            <span className="menu-head">Vegetable Soy Milk Miso Ramen</span>
            <span className="price">$15</span>
            <div className="menu-item">(Vegetable broth and soy milk)</div>
            <div className={classNames("menu-item", "item-description")}>Miso, kimchi, onion, bean sprouts, cabbage, scallion, corn, sea weed, bamboo, noodle</div>

            <span className="menu-head">Truffle Dan Dan Ramen</span>
            <span className="price">$15</span>
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


            <span className="menu-head">Okonomiyaki</span>
            <span className="price">$12</span>
            <div className="item-detail">(Japanese Style Pancake)</div>
            <div className={classNames("menu-item", "item-description")}>Bacon, cabbage, crunchy tempura flake, egg, scallion, original teriyaki sauce, mayonnaise, dry seaweed, bonito flake, flour</div>

            <span className="menu-head">Kobe Beef Burger</span>
            <span className="price">$12</span>
            <div className={classNames("menu-item", "item-description")}>Kobe ground beef, romaine lettuce, cheese, tomato, scallion, original bbq sauce, spicy mayonnaise</div>
        </div>
    )
}

export default MainContent;