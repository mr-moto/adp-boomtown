import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import { filteredItems } from '../../actions/itemActions'
import PropTypes from 'prop-types'


const Filter = ({selectedTags, dispatch}) => {
    const tags = [ "Electronics", "Household Items", "Musical Instruments", "Physical Media", "Recreational Equipment", "Sporting Goods", "Tools"]
    return (
        <SelectField 
            multiple
            value={selectedTags}
            onChange={((event, index, tag) => dispatch(filteredItems(tag)))}

            hintText="Filter by Tag"
            className="filterField"
            style={{ width: "256px", height: "48px", marginLeft: '2rem', fontFamily: "Roboto, sans-serif"}}
            iconStyle={{ width: "unset", height: "unset", top: "0" }}
            menuStyle={{ marginTop: "0" }}
        >  

        {tags.map(tag => {
            return <MenuItem
                key={tag}
                insetChildren={true}
                checked={selectedTags && selectedTags.includes(tag)}
                value={tag}
                primaryText={tag}
            />
        })}
        </SelectField>
    );
}


Filter.PropTypes = {
    selectedTags: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    selectedTags: state.items.selectedTags
});
export default connect(mapStateToProps)(Filter);