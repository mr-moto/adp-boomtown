import React, { Component } from 'react';
import ItemCard from '../ItemCard/ItemCard'
import Masonry from 'react-masonry-component';
import './styles.css';

class ItemsList extends Component {
    constructor(props) {
        super(props)
        this.state = { }
      }
    render() {
        const {itemsData} = this.props
        return (
            <div className="itemsListWrapper">
                <Masonry>
                    {itemsData.map((item) => 
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