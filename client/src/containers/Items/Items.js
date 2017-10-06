import React, { Component } from 'react';
import { ItemsList } from '../../components/ItemsList'
import './styles.css';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    loadData() {
        fetch('http://localhost:3001/items')
        .then(results => results.json())
        .then( json => {
            this.setState({
                items: json,
            })
        })
    }
    componentDidMount() {
        this.loadData();
    }

    render() {

        return (
            <div className="itemsContainer">
                <ItemsList itemsData={this.state.items}/>  
            </div>  
        );
    } 
}

export default Items;