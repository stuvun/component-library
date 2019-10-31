import React from 'react';
import './Button.css'

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = ''
    let types = [ 'primary', 'danger', 'success', 'warning', 'default' ]
    let types2 = [ 'primary-hollow', 'danger-hollow', 'success-hollow', 'warning-hollow', 'default-hollow' ]

    if (types.includes(props.type)) {        // Conditionals for what style is returned based on property
        classList += ` button-${props.type}`
    }
    if (types2.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (props.large) {
        classList += ` button-large`
    }
    if (props.hollow) {
        classList += ` button-hollow`
    }
    return ( <button className={classList}>
                {props.label}
             </button> )
} 

export default Button;