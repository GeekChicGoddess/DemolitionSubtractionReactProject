import React, {Component} from 'react';
import House from '../components/house';





const Units = () => {

function handleClick (that) {

        console.log(that);
        that.setState({
            opacity: 0,
            collapse: "separate"
        });
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


    return(

        <div id="units">
            <House onClick={handleClick}/>
            <House onClick={handleClick}/>
            <House onClick={handleClick}/>

        </div>


    );

};

export default Units

