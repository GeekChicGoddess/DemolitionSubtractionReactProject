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

const House = (props) => {



        let style = {
            borderCollapse: props.collapse,
            opacity: props.opacity,
            borderSpacing: props.borderSpacing,
            marginTop: props.marginTop
        };


        return (
            <table style={style} onClick={props.onClick}>
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


};

export default House
