import React, { Component } from 'react';
import { ItemsList } from '../../components/ItemsList';
import {CircularLoader} from '../../components/CircularLoader';
import {updateItemList} from '../../redux/modules/items';
import { connect } from 'react-redux';
import './styles.css';

class ItemsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const urls = [
            'http://localhost:3001/items',
            'http://localhost:3001/users'
        ];  
        Promise.all(urls.map(url => (
            fetch(url)
            .then(response => response.json())
        )))
        .then(data => {
            const [itemData, userData] = data;
            const modifiedData = itemData.map(item => {
                return {
                    ...item,
                    itemOwner: userData.find(user => user.id === item.itemOwner)
                }
            })
        })
        .then(result => {
            this.store.dispatch(updateItemList(result))
        })
    }

    render() {
        if (!this.props.loading) return <CircularLoader />;
        return (
            <div className="itemsContainer">
                <ItemsList itemsData={this.props.items} />
            </div>
        );
    } 
}   


export default connect((store) => {
    return {
        items: store.items
    }
})(ItemsContainer);