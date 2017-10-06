import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class ItemCard extends Component {

    state = {  }
    
    render() {
        const item = this.props.item
        return (
            <Card>
                <CardMedia overlay={item.available ? null : <CardTitle subtitle="Unavailable" style={{textTransform: "uppercase"}}/>}>
                    <img src={item.imageUrl} alt="" />
                </CardMedia>
                <CardHeader title={item.itemOwner} subtitle={item.createdOn} avatar="images/jsa-128.jpg" />
                <CardTitle title={item.title} subtitle={item.tags} />
                <CardText>{item.description}</CardText>
            </Card>
        );
    }
}

export default ItemCard;