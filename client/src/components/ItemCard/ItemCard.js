import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

class ItemCard extends Component {

    state = {  }
    
    render() {
        const {available, imageUrl, itemOwner, createdOn, title, tags, description} = this.props.item;
        return (
            <Card>
                <CardMedia overlay={available ? null : <CardTitle subtitle="Unavailable" style={{textTransform: "uppercase"}}/>}>
                    <img src={imageUrl} alt="" />
                </CardMedia>
                <CardHeader title={itemOwner.fullName} subtitle={moment.unix(createdOn).fromNow()} avatar={<Gravatar className="gravatarUserImage" email={itemOwner.email}/> } />
                <CardTitle title={title} subtitle={tags.map(tag => tag).join(', ')} />
                <CardText>{description}</CardText>
            </Card>
        );
    }
}

export default ItemCard;