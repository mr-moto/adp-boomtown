import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Step, Stepper, StepLabel, StepContent } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { TextArea, TextInput } from "./TextInput";

class Share extends Component {
    state = {
        finished: false,
        stepIndex: 0,
        value: null
    };

    handleChange = (event, index, value) => this.setState({ value });

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 3
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    renderStepActions(step) {
        const { stepIndex } = this.state;
        return (
            <div style={{ margin: "12px 0" }}>
                <RaisedButton
                    label={stepIndex === 3 ? "Confirm" : "Next"}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onClick={this.handleNext}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <RaisedButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    render() {
        const { finished, stepIndex } = this.state;
        return (
            <div className="stepperContainer">
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>Add an Image</StepLabel>
                        <StepContent>
                            <p>
                                We live in a visual culture. Upload an image of
                                the item you're sharing.
                            </p>
                            <RaisedButton label="Select an Image" />
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Add a Title & Description</StepLabel>
                        <StepContent>
                            <p>
                                Folks need to know what you're sharing. Give
                                them a clue by adding a title & description.
                            </p>
                            <form action="">
                                <Field name="textInput" component={TextInput} />
                                <Field name="textArea" component={TextArea} />
                            </form>
                            {/* <TextField
                                name="title"
                                type="text"
                                hintText="Title"
                                floatingLabelText="Title"
                                floatingLabelFocusStyle={{ color: "white" }}
                            /> */}
                            {/* <TextField
                                name="description"
                                type="text"
                                hintText="Description"
                                floatingLabelText="Description"
                                floatingLabelFocusStyle={{ color: "white" }}
                            /> */}
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Categorize Your Item</StepLabel>
                        <StepContent>
                            <p>
                                To share an item, you'll add it to our list of
                                categories. You can select multiple categories.
                            </p>
                            {/* swap out for filter component later */}
                            <SelectField
                                hintText="Select Category Tags"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                <MenuItem value={1} primaryText="Electronics" />
                                <MenuItem
                                    value={2}
                                    primaryText="Household Items"
                                />
                                <MenuItem
                                    value={3}
                                    primaryText="Musical Instruments"
                                />
                                <MenuItem
                                    value={4}
                                    primaryText="Physical Media"
                                />
                                <MenuItem
                                    value={5}
                                    primaryText="Recreational Equipment"
                                />
                                <MenuItem
                                    value={6}
                                    primaryText="Sporting Goods"
                                />
                                <MenuItem value={7} primaryText="Tools" />
                            </SelectField>
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Confirm Things!</StepLabel>
                        <StepContent>
                            <p>
                                Great! If you're happy with everything, tap the
                                button.
                            </p>
                            {this.renderStepActions(3)}
                        </StepContent>
                    </Step>
                </Stepper>
                {finished && (
                    <p style={{ margin: "20px 0", textAlign: "center" }}>
                        <a
                            href="#"
                            onClick={event => {
                                event.preventDefault();
                                this.setState({
                                    stepIndex: 0,
                                    finished: false
                                });
                            }}
                        >
                            Click here
                        </a>{" "}
                        to reset the example.
                    </p>
                )}
            </div>
        );
    }
}

const ShareForm = reduxForm({
    form: "shareForm"
})(Share);

export default ShareForm;
