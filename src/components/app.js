import React, { Component } from 'react';
import House from '../components/house';
import HouseRow from '../components/house_row';
import HouseHighrise from '../components/house_highrise';
import Units from '../components/units_section';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            collapse: "collapse",
            opacity: 1,
            borderSpacing: 0,
            marginTop: 0
        };

    }


    handleClick = () => {
        console.log("handle click");
        this.setState({
            opacity: 0,
            collapse: "separate"
        });
        let that = this;
        let marginPercentage = 1;
        let topMargin = -5;
        let timesToRun = 1
        const rightMove = setInterval(function () {
            console.log("running");
            if (timesToRun < 200) {
                that.setState({
                    borderSpacing: marginPercentage + "px",
                    marginTop: topMargin + "px"
                });
                marginPercentage += 2;
                topMargin -= 15;
                timesToRun++;
            }
            else {
                clearInterval(rightMove)
            }
        }, 5);
    };


    render() {

        return (
            <Units
                       handleClick = {this.handleClick}
                       collapse={this.state.collapse}
                       opacity={this.state.opacity}
                       borderSpacing={this.state.borderSpacing}
                       marginTop={this.state.marginTop}

            />
        );
    }
}
