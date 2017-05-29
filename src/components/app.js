import React, { Component } from 'react';
import Units from '../components/units_section';
import Tens from '../components/tens_section';
import  Hundreds from '../components/hundreds_section';
import SubtractionProblem from '../components/subtraction_problem';



export default class App extends Component {


    handleClick = () => {
        console.log("handle click");
        this.setState({
            opacity: 0,
            collapse: "separate"
        });
        let that = this;
        let marginPercentage = 1;
        let topMargin = -5;
        let timesToRun = 1;
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
            <div>
                <SubtractionProblem/>
                <Hundreds/>
                <Tens/>
            <Units
                       // handleClick = {this.handleClick}
                       // collapse={this.state.collapse}
                       // opacity={this.state.opacity}
                       // borderSpacing={this.state.borderSpacing}
                       // marginTop={this.state.marginTop}

            />

            </div>
        );
    }
}
