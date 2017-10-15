import React, { Component } from 'react';
import ItemCard from '../ItemCard/ItemCard'
import Masonry from 'react-masonry-component';
import './styles.css';

class ItemsList extends Component {
    render() {
        const {itemsData} = this.props
        return (
            <div className="itemsListWrapper">
                {console.log('list', this.props)}
                <Masonry>
                    {itemsData.map(item => 
                        <div key={item.id} className="itemWrapper">
                            <ItemCard item={item}/>
                        </div>
                    )}
                </Masonry>
            </div>
        );
    }
}

export default ItemsList;