import React from "react";
import { TextField } from "material-ui";

export const TextInput = field => (
    <TextField
        type="text"
        hintText="Enter item title"
        id="itemTitle"
        name="title"
        floatingLabelText="Title"
        floatingLabelFocusStyle={{ color: "white" }}
        {...field.input}
    />
);

export const TextArea = field => (
    <TextField
        type="textarea"
        hintText="Enter item description"
        id="itemDescription"
        name="description"
        floatingLabelText="Description"
        floatingLabelFocusStyle={{ color: "white" }}
        {...field.input}
    />
);
