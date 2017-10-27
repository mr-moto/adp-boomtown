import React from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { connect } from "react-redux";
import { filteredItems } from "../../redux/modules/items";
import PropTypes from "prop-types";

const Filter = ({ selectedTags, dispatch }) => {
    const tags = [
        { tagid: 1, title: "Electronics" },
        { tagid: 2, title: "Household Items" },
        { tagid: 3, title: "Musical Instruments" },
        { tagid: 4, title: "Physical Media" },
        { tagid: 5, title: "Recreational Equipment" },
        { tagid: 6, title: "Sporting Goods" },
        { tagid: 7, title: "Tools" }
    ];
    return (
        <SelectField
            multiple
            value={selectedTags}
            onChange={(event, index, tag) => dispatch(filteredItems(tag))}
            hintText="Filter by Tag"
            className="filterField"
            style={{
                width: "256px",
                height: "48px",
                marginLeft: "2rem",
                fontFamily: "Roboto, sans-serif"
            }}
            iconStyle={{ width: "unset", height: "unset", top: "0" }}
            menuStyle={{ marginTop: "0" }}
        >
            {tags.map(tag => {
                return (
                    <MenuItem
                        key={tag.title}
                        insetChildren={true}
                        checked={
                            selectedTags && selectedTags.includes(tag.name)
                        }
                        value={tag.name}
                        primaryText={tag.name}
                    />
                );
            })}
        </SelectField>
    );
};

Filter.PropTypes = {
    selectedTags: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    selectedTags: state.items.selectedTags
});
export default connect(mapStateToProps)(Filter);
