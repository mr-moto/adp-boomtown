import React, { Component } from 'react';
import { ItemsList } from '../../components/ItemsList'
import {CircularLoader} from '../../components/CircularLoader'
import { connect } from 'react-redux'
import { getItems } from '../../actions'
import { ShareButton } from '../../components/ShareButton'
import './styles.css';

class ItemsContainer extends Component {

    componentDidMount() {
            this.props.getItems()
    }
    filterItems() {
        const {allItems, selectedTags} = this.props
        if(selectedTags.length) {
            return allItems.filter(item => {
                return item.tags.find(tag => 
                    selectedTags.includes(tag)
                )
            });
        } return allItems   
     }

    render() {
        const filteredItems = this.filterItems();
        return (
            <div className="itemsContainer">
                <ItemsList itemsData={filteredItems}/>
                <ShareButton />
            </div>
        );
    } 
}   

const mapStateToProps = (state) => ({
    selectedTags: state.items.selectedTags,
    allItems: state.items.allItems
});

export default connect(mapStateToProps, { getItems })(ItemsContainer)