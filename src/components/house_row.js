import React, {Component} from 'react';
import House from '../components/house';

export default class HouseRow extends Component {


        // handleClick = (that) => {
        //
        //     that.setState({
        //         opacity: 0,
        //         collapse: "separate"
        //     });
        //     let marginPercentage = 1;
        //     let topMargin = -5;
        //     let timesToRun = 1;
        //     // let that = this;
        //     const rightMove = setInterval(function () {
        //         console.log("running");
        //         if (timesToRun < 200) {
        //             that.setState({
        //                 borderSpacing: marginPercentage + "px",
        //                 marginTop: topMargin + "px"
        //             });
        //             marginPercentage += 2;
        //             topMargin -= 15;
        //             timesToRun++;
        //         }
        //         else {
        //             clearInterval(rightMove)
        //         }
        //     }, 5);
        // };


        //
        // const renderChildren = (props) => {
        //       let index = 0;
        //       console.log("house");
        //       return React.Children.forEach(props.children, child => {
        //           if (child.type === "house")
        //               return  React.addons.cloneElement(child, {
        //                   ref: 'child-' + (index++)
        //               });
        //           else
        //               return child
        //       })
        //   };
        //
        //
        //   function houseRowGroup(props) {
        //       return (
        //           <div className="houseRow">
        //               {renderChildren(props)}
        //
        //           </div>
        //       )
        //   }

        // let index = 0,
        //  const children = React.Children.map(this.props.children, function (child) {
        //         return React.addons.cloneWithProps(child, {
        //             ref: 'child-' + (index++)
        //         });
        //     });

    constructor (props){

        super (props);
        this.state = {
            houses: new Array(10).fill(false),
        }
    }

    handleClick (e) {
        e.preventDefault();
        this.setState({
            houses: new Array(10).fill(true),
        })
    }


        render() {

            const houses = this.state.houses.map( (h, idx) => <House shouldAnimate={ this.state.houses[idx] } /> );

            return (

                <div onClick={this.handleClick.bind(this)}>
                    { houses }
                    <div>click over here</div>

                </div>

            );
        }
}


