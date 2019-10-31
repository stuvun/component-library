import React from 'react';
import './Form.css'

const Form = (props) => {
    let classList = ''
    let types = ['text', 'medium', 'large']

    if (types.includes(props.type)) {
        classList += ` form-${ props.type }`
    }
    if (props.medium) {
        classList += ` form-medium`
    }
    if (props.large) {
        classList += ` form-large`
    }
    return ( <label>{ props.label }
             <form className = { classList }>
                 <input className= { classList } type = { props.type } placeholder={ props.label }/>
             </form>
             </label> )
}

export default Form;