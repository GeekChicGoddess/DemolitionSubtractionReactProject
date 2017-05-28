import React from 'react';
// import classnames from 'classnames';


const HouseLayer = ({classTdOne, classTdTwo, classTdThree, classTdFour, classTdFive, classTdSix, classTdSeven, classTdEight}) =>{

    return(

        <tr className="row">
            <td className={classTdOne}/>
            <td className={classTdTwo}/>
            <td className={classTdThree}/>
            <td className={classTdFour}/>
            <td className={classTdFive}/>
            <td className={classTdSix}/>
            <td className={classTdSeven}/>
            <td className={classTdEight}/>
        </tr>
    )


};

export default HouseLayer