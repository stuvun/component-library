import React from 'react';
import './hollowButton.css'

// This is a functional component - just sent up a little differently as an arrow function!
const HollowButton = (props) => {
    let classList2 = ''
    let types2 = [ 'primaryHollow', 'dangerHollow', 'successHollow', 'warningHollow', 'defaultHollow' ]

    if (types2.includes(props.type2)) {        // Conditionals for what style is returned based on property
        classList2 += ` button-${props.type2}`
    }
    if (props.largeHollow) {
        classList2 += ` button-large`
    }
    return ( <button className={classList2}>
                {props.label}
             </button> )
} 

export default HollowButton;