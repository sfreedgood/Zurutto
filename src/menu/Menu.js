import React, { Component } from "react"
import Drinks from "./menuSections/drinks/Drinks"
import Appetizers from "./menuSections/appetizers/Appetizers"
import Mains from "./menuSections/mains/Mains"
import Desserts from "./menuSections/desserts/Desserts"

//this is just a conceptual outline, may need to adjust going forward

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: false,
            appetizers: false,
            mains: false,
            desserts: false
        }
    }

    onClick = (e) => {
        const activeMenu = e.currentTarget.innerHTML.toLowerCase()
        if (this.state[activeMenu]) {
            this.setState({
                [activeMenu]: false
            })
        } else {
            this.setState({
                [activeMenu]: true
            })
        }
    }

    render() { 
        return (
            <div id="menu">
                <h1>Menu</h1>
                <div className="drink-banner"
                     name="drinks"
                     onClick={this.onClick}>Drinks
                </div>
                {this.state.drinks && <Drinks/>}
                <div className="appetizer-banner"
                     name="appetizers"
                     onClick={this.onClick}>Appetizers
                </div>
                {this.state.appetizers && <Appetizers/>}
                <div className="main-banner"
                     name="mains"
                     onClick={this.onClick}>Mains
                </div>
                {this.state.mains && <Mains/>}
                <div className="dessert-banner"
                     name="desserts"
                     onClick={this.onClick}>Desserts
                </div>
                {this.state.desserts && <Desserts/>}      
            </div>
        );
    }
}
 
export default Menu;