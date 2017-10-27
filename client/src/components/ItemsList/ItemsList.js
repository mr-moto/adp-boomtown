import React, { Component } from "react";
import ItemCard from "../ItemCard/ItemCard";
import Masonry from "react-masonry-component";
import PropTypes from "prop-types";
import "./styles.css";

class ItemsList extends Component {
    render() {
        const { itemsData } = this.props;
        return (
            <div className="itemsListWrapper">
                <Masonry>
                    {itemsData.map(item => (
                        <div key={item.id} className="itemWrapper">
                            <ItemCard
                                item={item}
                                available={item.borrower ? true : false}
                            />
                        </div>
                    ))}
                </Masonry>
            </div>
        );
    }
}

ItemsList.PropTypes = {
    itemsData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            imageurl: PropTypes.string,
            itemowner: PropTypes.shape({
                id: PropTypes.string,
                fullname: PropTypes.string,
                email: PropTypes.string
            }).isRequired,
            created: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            tags: PropTypes.array,
            description: PropTypes.string
        })
    )
};

export default ItemsList;
