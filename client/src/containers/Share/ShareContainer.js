import React from "react";
import Share from "./Share";
import { ItemCard } from "../../components/ItemCard";

import itemPlaceholder from "../../images/item-placeholder.jpg";

import "./styles.css";

class ShareContainer extends React.Component {
    state = {};

    render() {
        return (
            <div className="shareContainer">
                <div className="cardContainer">
                    <ItemCard
                        item={{
                            id: 1,
                            title: "Item Title",
                            description: "item description",
                            imageurl: itemPlaceholder,
                            tags: [],
                            created: new Date().toString(),
                            itemowner: {
                                id: ""
                            }
                        }}
                        available={{ available: true }}
                    />
                </div>
                <Share />
            </div>
        );
    }
}

export default ShareContainer;
