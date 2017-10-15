import React, { Component } from 'react';
import { ItemsList } from '../../components/ItemsList'
import {CircularLoader} from '../../components/CircularLoader'
import { connect } from 'react-redux'
import { getItems } from '../../actions'
import './styles.css';

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    render() {
        return (
            <div className="itemsContainer">
                <ItemsList itemsData={this.props.allItems} />
            </div>
        );
    } 
}   


export default connect((store) => store.users, {getItems})(ItemsContainer)