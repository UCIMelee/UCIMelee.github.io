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

        // latestwinner is the first to pick at the start of round (probably to ban)
        // turn is the person selecting the map

        // every time someone clicks on a map to ban, LOG the map to ban, and increment player "picks"
        this.state = {
            round1Map: ["0", "1", "3", "4", "5"], // new proposal: pop from here
            selectedMap: -1, bannedMap: [], turn: 0,
            matchData: this.props.matchData 
        };
    }

    // componentWillReceiveProps(newProps) {
    //     this.setState({ matchData: newProps.matchData }, console.log("Updated matchData"));
    // }

    // getLastMap() {
    //     if (this.state.bannedMap.length === 4) {
    //         let tempArr = ["0", "1", "3", "4", "5"];
    //         tempArr = tempArr.filter(
    //             (mapNum) => {
    //                 return !this.state.bannedMap.includes(mapNum);
    //             }
    //         );
    //         this.setState({ selectedMap: tempArr[0] }, console.log("Round 1 Map Selected"));
    //     }
    // }

    // checkTurnFirstRound() {
    //     // run this on every onClick during round 1 selection
    //     if (this.state.bannedMap.length === 1) {
    //         this.setState({ turn: 1 }, console.log("Turn Changed"));
    //     } else if (this.state.bannedMap.length === 3) {
    //         this.setState({ turn: 0 }, console.log("Turn Changed"));
    //     } else if (this.state.bannedMap.length === 4) {
    //         this.setState({ turn: 1 }, console.log("Turn Changed"));
    //         // this.getLastMap();
    //     }
    // }

    // runs each time component is rendered
    firstRound(mapNumber) {
        if (!this.state.matchData.round === 1) {
            return;
        }
        let bannedMapArr = this.state.bannedMap.slice(0);
        let updateturn = 0;
        let lastmap = -1;
        
        if (!(bannedMapArr.includes(mapNumber)) && mapNumber !== "2") {
            if (bannedMapArr.length !== 4) {
                bannedMapArr.push(mapNumber);
            }

            this.setState({ bannedMap: bannedMapArr, turn: updateturn, selectedMap: lastmap }, console.log("pushed"));
            // this.checkTurnFirstRound();
            // this.getLastMap();
        }
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
                            <Thumbnail onClick={(event) => this.firstRound(event.target.alt)} alt="0" src={yoshiStoryPic} />
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail onClick={(event) => this.firstRound(event.target.alt)} alt="1" src={fountainPic} />
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail onClick={(event) => this.firstRound(event.target.alt)} alt="2" src={pkmnPic} />
                        </Col>
                    
                        <Col xs={6} md={3}>
                            <Thumbnail onClick={(event) => this.firstRound(event.target.alt)} alt="3" src={battlefieldPic} />
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail onClick={(event) => this.firstRound(event.target.alt)} alt="4" src={fdPic} />
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail onClick={(event) => this.firstRound(event.target.alt)} alt="5" src={dreamlandPic} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ImageGrid;