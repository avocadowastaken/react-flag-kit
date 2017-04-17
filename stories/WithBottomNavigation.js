import React from "react";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import StoryCard from "./StoryCard";
import FlagIcon from "../src/FlagIcon";

export default class BottomNavigationExampleSimple extends React.Component {
  state = { selectedIndex: 0 };

  select = index => this.setState({ selectedIndex: index });

  render() {
    return (
      <StoryCard>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Africa"
            icon={<div><FlagIcon size={24} code="WW-AFR" /></div>}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Asia"
            icon={<div><FlagIcon size={24} code="WW-ASI" /></div>}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Europe"
            icon={<div><FlagIcon size={24} code="WW-EUR" /></div>}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </StoryCard>
    );
  }
}
