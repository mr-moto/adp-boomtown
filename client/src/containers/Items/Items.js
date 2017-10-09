import React, { Component } from 'react';
import { ItemsList } from '../../components/ItemsList'
import {CircularLoader} from '../../components/CircularLoader'
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
            setTimeout(() => {
                this.setState({
                    items: json,
                    loading: json,
                })
            }, 2000);
        })
    }
    componentDidMount() {
        this.loadData();
    }

    render() {
        console.log(this.props.itemsData)
        if (!this.state.loading) return <CircularLoader />;
        return (
            <div className="itemsContainer">
                <ItemsList itemsData={this.state.items}/>  
            </div>  
        );
    } 
}

export default Items;