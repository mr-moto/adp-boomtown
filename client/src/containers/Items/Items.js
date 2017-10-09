import React, { Component } from 'react';
import { ItemsList } from '../../components/ItemsList'
import {CircularLoader} from '../../components/CircularLoader'
import './styles.css';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            users: [],
        }
    }

    loadData() {
        fetch('http://localhost:3001/items')
        .then(itemsResults => itemsResults.json())
        .then( json => {
            setTimeout(() => {
                this.setState({
                    items: json,
                    loading: json,
                })
            }, 2000);
            fetch('http://localhost:3001/users')
            .then(usersResults => usersResults.json())
            .then( json => {
                this.setState({
                    users: json,
                })
            })
        })
    }
    componentDidMount() {
        this.loadData();
    }

    render() {
        if (!this.state.loading) return <CircularLoader />;
        return (
            <div className="itemsContainer">
                <ItemsList itemsData={this.state.items} usersData={this.state.users}/>  
            </div>  
        );
    } 
}

export default Items;