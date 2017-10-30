import React from "react";
import Share from "./Share";
import { ItemCard } from "../../components/ItemCard";
import { reduxForm, formValueSelector, getFormValues } from "redux-form";
import { connect } from 'react-redux'

import itemPlaceholder from "../../images/item-placeholder.jpg";

import "./styles.css";

class ShareContainer extends React.Component {

    render() {
        const {textArea, textInput} = this.props.inputValues;

        return (
            <div className="shareContainer">
                <div className="cardContainer">
                    <ItemCard
                        item={{
                            id: 1,
                            title: textInput || "Item Title",
                            description: textArea || "item description",
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


const mapStateToProps = state => {
    const values = formValueSelector('shareForm');
    return {
        inputValues: values(state, "textArea", "textInput"),
        userProfile: state.auth.userProfile
    };
};

export default connect(mapStateToProps)(ShareContainer);
// export default ShareContainer;
