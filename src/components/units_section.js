import React, {Component} from 'react';
import House from '../components/house';



const Units = (props) => {


        return( <House
                onClick={props.handleClick.bind(this)}
        collapse = {props.collapse}
        opacity={props.opacity}
        marginTop={props.marginTop}
        borderSpacing={props.borderSpacing}/>
    );

};

export default Units

