import React, { Component } from "react";
import { Thumbnail } from "react-bootstrap";

const imageButton = (props) => {
    return <Thumbnail alt="180x180" src={props.src} />
}

export default imageButton;