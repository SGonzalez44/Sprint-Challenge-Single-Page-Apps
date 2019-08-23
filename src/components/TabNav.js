import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

export default function TabNav() {
    const [activeItem, setActiveItem] = useState("")
    const handleItemClick = (tabName) => {
        setActiveItem(tabName);
    }
    return (
        <Menu icon="labeled" corner>
            <Menu.Item
            as={NavLink}
            exact to="/"
            name='home'
            active={activeItem === 'home'}
            onClick={()=> handleItemClick("home")}
            >
                <Icon name="home"/>
            Home Page
            </Menu.Item>

            <Menu.Item
            as={NavLink}
            to="/character"
            name='characters'
            active={activeItem === 'characters'}
            onClick={()=> handleItemClick("characters")}
            >
                <Icon name="group"/>
            Characters
            </Menu.Item>

            <Menu.Item
            as={NavLink}
            to="/location"
            name='locations'
            active={activeItem === 'locations'}
            onClick={()=> handleItemClick("locations")}

            >
                <Icon name="map outline"/>
            Locations
            </Menu.Item>

            <Menu.Item
            as={NavLink}
            to="/episode"
            name='episodes'
            active={activeItem === 'episodes'}
            onClick={()=> handleItemClick("episodes")}

            >
                <Icon name="video camera"/>
            Episodes
            </Menu.Item>
        </Menu>
    )

};