import React, {Component} from 'react';
import HouseLayer from '../components/house_layer';


const topLeftCorner = "block wallBlock left top";
const topRightCorner = "block wallBlock right top";
const topMiddle = "block wallBlock top";
const window = "block windowBlock";
const middle = "block wallBlock";
const left = "block wallBlock left";
const right = "block wallBlock right";
const bottomLeftCorner = "block wallBlock left bottom";
const bottomRightCorner = "block wallBlock bottom right";
const bottomMiddle = "block wallBlock bottom";

const firstLayer = ()=>{
    return(
        <HouseLayer classTdOne={topLeftCorner}
                    classTdTwo={topMiddle}
                    classTdThree={topMiddle}
                    classTdFour={topMiddle}
                    classTdFive={topMiddle}
                    classTdSix={topMiddle}
                    classTdSeven={topMiddle}
                    classTdEight={topRightCorner}/>
    );
};

const secondFifthLayer = ()=>{
    return(
        <HouseLayer   classTdOne = {left}
                      classTdTwo = {middle}
                      classTdThree = {middle}
                      classTdFour = {middle}
                      classTdFive = {middle}
                      classTdSix = {middle}
                      classTdSeven = {middle}
                      classTdEight = {right}/>
    );
};

const thirdFourthLayer = ()=>{
    return(
        <HouseLayer   classTdOne = {left}
                      classTdTwo = {window}
                      classTdThree = {window}
                      classTdFour = {middle}
                      classTdFive = {middle}
                      classTdSix = {window}
                      classTdSeven = {window}
                      classTdEight = {right}/>
    );
};

const sixthLayer = () => {
    return(
        <HouseLayer classTdOne = {bottomLeftCorner}
                    classTdTwo = {bottomMiddle}
                    classTdThree = {bottomMiddle}
                    classTdFour = {bottomMiddle}
                    classTdFive = {bottomMiddle}
                    classTdSix = {bottomMiddle}
                    classTdSeven = {bottomMiddle}
                    classTdEight = {bottomRightCorner}/>


    )

};

class House extends Component  {

    constructor(props){
        super(props);

        this.state = {
            collapse: "collapse",
            opacity: 1,
            borderSpacing: 0,
            marginTop: 0
        };

        // this.videoSearch('surfboards');
    }


    render(){
        let style = {
            borderCollapse: this.state.collapse,
            opacity: this.state.opacity,
            borderSpacing: this.state.borderSpacing,
            marginTop: this.state.marginTop
        };


        const handleClick =  () => {
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


        return (
            <table style={style} onClick={()=> handleClick()}>
                <tbody>
                {firstLayer()}
                {secondFifthLayer()}
                {thirdFourthLayer()}
                {thirdFourthLayer()}
                {secondFifthLayer()}
                {sixthLayer()}
                </tbody>
            </table>
        );
    }

};

export default House
