import React, { Component } from "react"
import Drinks from "./MenuSections/Drinks"
import Appetizers from "./MenuSections/Appetizers"
import Mains from "./MenuSections/Mains"
import Desserts from "./MenuSections/Desserts"

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
        console.log(e.currentTarget.name) //check to sync component to state
        const activeMenu = e.currentTarget.name
        this.setState({
            [activeMenu]: true
        })
    }

    render() { 
        return (
            <div>
                <Drinks name="drinks" onClick={this.onClick}/>
                <Appetizers name="appetizers" onClick={this.onClick}/>
                <Mains name="mains" onClick={this.onClick}/>
                <Desserts name="desserts" onClick={this.onClick}/>
            </div>
        );
    }
}
 
export default Menu;