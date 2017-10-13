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
        console.log('hi' + this.props)
        return (
            <div className="itemsContainer">
                {/* <ItemsList itemsData={this.state.items} /> */}
                {this.props.users.map((user) => <h1>hi</h1>)}    
                {console.log(this.props.users)}
            </div>
        );
    } 
}   


export default connect((store) => store.users, {getItems})(ItemsContainer)