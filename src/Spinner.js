import React from 'react'
import spinner from "./images/Spinner.gif";

const Spinner = ({classProp}) => {
    return (
        <div className={classProp}>
            <img src={spinner} alt="Loading..." srcset="" style={{}} />  
        </div>
    )
}

export default Spinner
