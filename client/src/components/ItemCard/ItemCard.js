import React, { Component } from "react";
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from "material-ui/Card";
import Gravatar from "react-gravatar";
import moment from "moment";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";

class ItemCard extends Component {
    render() {
        const {
            imageurl,
            itemowner,
            created,
            title,
            tags,
            description
        } = this.props.item;
        const { available } = this.props.available;
        const tagTitles = tags.reduce((acc, curr) => {
            acc.push(curr.title);
            return acc;
        }, []);
        console.log(tagTitles);
        return (
            <Card>
                <CardMedia
                    overlay={
                        !available ? (
                            <CardTitle
                                subtitle="Unavailable"
                                style={{ textTransform: "uppercase" }}
                            />
                        ) : null
                    }
                >
                    <img src={imageurl} alt="" />
                </CardMedia>
                <Link to={`/profile/${itemowner.id}`}>
                    <CardHeader
                        title={itemowner.fullname}
                        subtitle={moment(created).fromNow()}
                        avatar={
                            <Gravatar
                                className="gravatarUserImage"
                                email={itemowner.email}
                            />
                        }
                    />
                </Link>
                <CardTitle title={title} subtitle={tagTitles.join(", ")} />
                <CardText>{description}</CardText>
                <CardActions>
                    {available ? (
                        <RaisedButton label={"Borrow"} secondary={true} />
                    ) : null}
                </CardActions>
            </Card>
        );
    }
}

ItemCard.PropTypes = {
    data: PropTypes.shape({
        available: PropTypes.bool.isRequired,
        imageurl: PropTypes.string,
        itemowner: PropTypes.shape({
            id: PropTypes.string,
            fullname: PropTypes.string,
            email: PropTypes.string
        }).isRequired,
        created: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tags: PropTypes.array,
        description: PropTypes.string
    })
};

export default ItemCard;
