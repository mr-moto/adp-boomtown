import React, { Component } from 'react';
import Loader from '../../components/CircularLoader';
import { Profile } from '../../components/Profile';
import { connect } from 'react-redux';
import { getItems } from '../../actions';


class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getItems();
    }
    render() { 
        const {items} = this.props
        return (
           <Profile userItems={items} />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items.allItems.filter(item=>{
            if(ownProps.match.params.userid === item.itemOwner.id){
              return item
            }
        })
    }
}
export default connect(mapStateToProps, { getItems })(ProfileContainer);