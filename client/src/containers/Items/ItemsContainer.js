import React, { Component } from 'react';
import { ItemsList } from '../../components/ItemsList'
import {CircularLoader} from '../../components/CircularLoader'
import { connect } from 'react-redux'
// import { getItems } from '../../actions'
import { ShareButton } from '../../components/ShareButton'
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import './styles.css';

class ItemsContainer extends Component {
    filterItems() {
        const { selectedTags } = this.props
        const { items } = this.props.data
        if(selectedTags.length) {
            return items.filter(item => {
                return item.tags.find(tag => 
                    selectedTags.includes(tag)
                )
            });
        } return items   
     }

    render() {
        const filteredItems = this.filterItems();
        const { loading } = this.props.data;
        console.log(this.props)
        if (loading) return <CircularLoader />;
        return (
            <div className="itemsContainer">
                <ItemsList itemsData={filteredItems} />;
                <ShareButton />
            </div>
        );
    } 
}   

ItemsContainer.PropTypes = {
    selectedTags: PropTypes.array.isRequired,
    data: PropTypes.shape({
        itemsData: PropTypes.array,
        loading: PropTypes.bool
    }).isRequired
}

export const itemsQuery = gql`
    query getItems {
        items {
            id
            title
            description
            imageurl
            tags
            itemowner {
                id
                email
                fullname
            }
            created
            available
            borrower {
                fullname
            }
        }
    }
`;

const mapStateToProps = (state) => ({
    selectedTags: state.items.selectedTags
});

const QueriedItems =  graphql(itemsQuery)(ItemsContainer);
export default connect(mapStateToProps)(QueriedItems)