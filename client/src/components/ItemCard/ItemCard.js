import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';

class ItemCard extends Component {

    state = {  }
    
    render() {
        const {available, imageUrl, itemOwner, createdOn, title, tags, description} = this.props.item;
        return (
            <Card>
                <CardMedia overlay={available ? null : <CardTitle subtitle="Unavailable" style={{textTransform: "uppercase"}}/>}>
                    <img src={imageUrl} alt="" />
                </CardMedia>
                {/* change gravatar */}
                <CardHeader title={itemOwner} subtitle={moment.unix(createdOn).fromNow()} avatar={<Gravatar email={itemOwner}/> } />
                <CardTitle title={title} subtitle={tags} />
                <CardText>{description}</CardText>
            </Card>
        );
    }
}

export default ItemCard;