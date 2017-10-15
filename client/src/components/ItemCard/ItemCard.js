import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import './styles.css';

class ItemCard extends Component {

    state = {  }
    
    render() {
        const {available, imageUrl, itemOwner, createdOn, title, tags, description} = this.props.item;
        return (
            <Card>
                <CardMedia overlay={!available ? <CardTitle subtitle="Unavailable" style={{textTransform: "uppercase"}}/> : null}>
                    <img src={imageUrl} alt="" />
                </CardMedia>
                <Link to={{pathname:`/profile/${itemOwner.id}`, user: itemOwner}}>
                    <CardHeader title={itemOwner.fullName} subtitle={moment.unix(createdOn).fromNow()} avatar={<Gravatar className="gravatarUserImage" email={itemOwner.email}/> } />
                </Link >
                <CardTitle title={title} subtitle={tags.map(tag => tag).join(', ')} />
                <CardText>{description}</CardText>
                <CardActions>{ available ? <RaisedButton label={'Borrow'} secondary={true}/> : null }</CardActions>
            </Card>
        );
    }
}

export default ItemCard