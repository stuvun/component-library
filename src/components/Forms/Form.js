import React from 'react';
import './Form.css'
import { thisExpression } from '@babel/types';

class Form extends React.Component {
    constructor(props){
        super(props)
        let counter = props.value
        let classList = ''
        let types = ['text', 'select', 'counter']
        let min = this.props.value
        let max = this.props.max
        let steps = this.props.steps
        const svg = this.props.svg
        this.state = {
            counter,
            classList,
            types,
            min,
            max,
            steps,

        }
        this.increaseCounter = this.increaseCounter.bind(this)
        this.decreaseCounter = this.decreaseCounter.bind(this)
    }

    increaseCounter() {
        if ( this.state.counter < this.state.max ) {
            this.setState( currentState => ({
                counter: currentState.counter + this.state.steps
            }))
        }
    }

    decreaseCounter() {
        if ( this.state.counter < this.state.max ) {
            this.setState( currentState => ({
                counter: currentState.counter - this.state.steps
            }))
        }
    }
    render () {
        if (this.state.types.includes(this.props.type)) {
            this.state.classList += ` form-${ this.props.types }`
        }
        if (this.props.medium) {
            this.state.classList += ` form-medium`
        }
        if (this.props.large) {
            this.state.classList += ` form-large`
        }
        if (this.props.downArrow) {
            this.state.classList += ` form-downArrow`
        }
        if (this.props.display == 'selector') {
            return ( <div className='buttonContainer'>
                        <button className={ this.props.display } placeholder={ this.props.label } onClick={ this.increaseCounter }/>
                        { this.state.counter }
                        <button className={ this.props.display } placeholder={ this.props.label } onClick={ this.decreaseCounter }/>
                     </div>
            )
        }
        return ( <label className={ this.props.classList }>{ this.props.label }
                 <form className={ this.state.classList }>
                     <input className={ this.state.classList } type={ this.props.type } placeholder={ this.props.label }/>
                 </form>
                 </label> )
    }
}

export default Form;


