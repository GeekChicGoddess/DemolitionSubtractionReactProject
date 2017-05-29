import React, {Component} from 'react';


export default class SubtrationProblem extends Component{


    render(){

        let minuend = 113;
        let subtraend = 100;

        return (
            <div id="subtrationProblem">
            <div id="problem">
                <h4>Solve for:</h4>
                <span>  {minuend}-{subtraend}=</span>
            </div>
            <form>
            <input/>
            </form>
            </div>

        );
    }


}