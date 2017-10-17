import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const tags = [
    { value: 1, name: "Electronics"},
    { value: 2, name: "Household Items"},
    { value: 3, name: "Musical Instruments"},
    { value: 4, name: "Physical Media"},
    { value: 5, name: "Recreational Equipment"},
    { value: 6, name: "Sporting Goods"},
    { value: 7, name: "Tools"}
]

class Filter extends Component {
    state = { 
        values: [],
    }

    handleChange = (event, index, values) => this.setState({values});


    menuItems(tags) {
        return tags.map((tag) => (
          <MenuItem
            key={tag.value}
            insetChildren={true}
            checked={this.state.values.indexOf(tag.value) > -1}
            value={tag.value}
            primaryText={tag.name}
          />
        ));
      }
    render() {
        return (
            <SelectField 
                multiple={true}
                className="filterField"
                hintText="Filter by Tag"
                style={{ width: "256px", height: "48px", marginLeft: '2rem', fontFamily: "Roboto, sans-serif"}}
                iconStyle={{ width: "unset", height: "unset", top: "0" }}
                menuStyle={{ marginTop: "0" }}
                value={this.state.values}
                onChange={this.handleChange}
            >  
            {this.menuItems(tags)}
            </SelectField>
        );
    }
}

export default Filter;