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
            setTimeout(() => {
                this.setState({
                    items: modifiedData,
                    loading: modifiedData
                })
            }, 3000)
            

        })
    }

    render() {
        if (!this.state.loading) return <CircularLoader />;
        return (
            <div className="itemsContainer">
                <ItemsList itemsData={this.state.items} />  
            </div>  
        );
    } 
}   

export default Items;

//test out some stuff
// const ItemUserData = gql`
//     query getItems {
//         items {
//             itemid
//             title
//             imageurl
//             description
//             itemowner {
//                 userid  
//                 email
//                 fullname
//             }
//             tags {
//                 title
//             }
//             created
//             borrower {
//                 fullname
//             }
//         }
//     }
// `;

// const ItemsWithData = graphql(ItemUserData)(Items);
