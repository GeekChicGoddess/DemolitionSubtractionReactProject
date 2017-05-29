import React from 'react';
import HouseRow from '../components/house_row'

const HouseHighrise = (props) =>{

    return(

        <span className="highRise"  onClick={props.onClick}>
            <HouseRow/>
            <HouseRow/>
            <HouseRow/>
            <HouseRow/>
            <HouseRow/>
            <HouseRow/>
            <HouseRow/>
            <HouseRow/>
            <HouseRow/>
            <HouseRow/>
        </span>


    );


};

export default HouseHighrise