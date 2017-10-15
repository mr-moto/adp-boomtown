import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


const Filter = (props) => {
    console.log(props)
    return(
    <SelectField 
        className="filter-field"
        hintText="Filter by Tag"
        style={{ width: "256px", height: "48px", marginLeft: '2rem', fontFamily: "Roboto, sans-serif"}}
        iconStyle={{ width: "unset", height: "unset", top: "0" }}
        menuStyle={{ marginTop: "0" }}
    >  
    {props.filter.map(item => 
        <MenuItem value={item.id} primaryText={item.name} />,
    )}
    </SelectField>
    )
};
export default Filter