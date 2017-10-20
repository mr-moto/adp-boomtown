import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import './styles.css';

class ItemCard extends Component {
    render() {
        const {available, imageurl, itemowner, created, title, tags, description} = this.props.item;
        return (
            <Card>
                <CardMedia overlay={!available ? <CardTitle subtitle="Unavailable" style={{textTransform: "uppercase"}}/> : null}>
                    <img src={imageurl} alt="" />
                </CardMedia>
                <Link to={`/profile/${itemowner.id}`}>
                    <CardHeader title={itemowner.fullname} subtitle={moment(created).fromNow()} avatar={<Gravatar className="gravatarUserImage" email={itemowner.email}/> } />
                </Link >
                <CardTitle title={title} subtitle={tags.map(tag => tag).join(', ')} />
                <CardText>{description}</CardText>
                <CardActions>{ available ? <RaisedButton label={'Borrow'} secondary={true}/> : null }</CardActions>
            </Card>
        );
    }
}

export default ItemCard