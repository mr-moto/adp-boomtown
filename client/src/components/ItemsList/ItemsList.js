import React, { Component } from 'react';
import ItemCard from '../ItemCard/ItemCard'
import Masonry from 'react-masonry-component';
import './styles.css';

class ItemsList extends Component {
    state = {  }
    render() {
        const itemList = this.props.itemsData
        return (
            <div className="itemsListWrapper">
                <Masonry>
                    {itemList.map(item => 
                        <div key={item.id} className="itemsWrapper">
                            <ItemCard item={item}/>
                        </div>
                    )}
                </Masonry>
            </div>
        );
    }
}

export default ItemsList;