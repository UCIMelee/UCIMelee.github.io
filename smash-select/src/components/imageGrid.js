import React, { Component } from "react";
import { Thumbnail, Grid, Row, Col } from "react-bootstrap";

const battlefieldPic = "https://github.com/UCIMelee/gui_images/blob/master/battlefield_hq.png?raw=true";
const dreamlandPic = "https://github.com/UCIMelee/gui_images/blob/master/dreamland_hq.png?raw=true";
const fdPic = "https://github.com/UCIMelee/gui_images/blob/master/fd_hq.png?raw=true";
const fountainPic = "https://github.com/UCIMelee/gui_images/blob/master/fod_hq.png?raw=true";
const pkmnPic = "https://github.com/UCIMelee/gui_images/blob/master/ps_hq.png?raw=true";
const yoshiStoryPic = "https://github.com/UCIMelee/gui_images/blob/master/ys_hq.jpg?raw=true";

class ImageGrid extends Component {
    constructor(props) {
        super(props);
        // turn will be modified at the end of every round based on who won.
        // match data will be the entire top level state passed down
        this.state = { turn: 0, matchData: this.props.matchData };
    }

    // componentWillReceiveProps(newProps) {
    //     this.setState({ matchData: newProps.matchData }, console.log("Updated matchData"));
    // }

    firstRound() {
        
    }

    nextRound() {

    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={6} md={3}>
                            <Thumbnail onClick={(event) => console.log("clicked image")} alt="180x180" src={battlefieldPic} />
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail href="#" alt="180x180" src={dreamlandPic} />
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail href="#" alt="180x180" src={fdPic} />
                        </Col>
                    
                        <Col xs={6} md={3}>
                            <Thumbnail href="#" alt="180x180" src={fountainPic} />
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail href="#" alt="180x180" src={pkmnPic} />
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail href="#" alt="180x180" src={yoshiStoryPic} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ImageGrid;