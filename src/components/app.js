import React, { Component } from 'react';
import Units from '../components/units_section';
import Tens from '../components/tens_section';
import  Hundreds from '../components/hundreds_section';
import SubtractionProblem from '../components/subtraction_problem';



export default class App extends Component {




    render() {

        return (
            <div>
                <SubtractionProblem/>
                <Hundreds/>
                <Tens/>
                <Units/>
            </div>
        );
    }
}
