import React from 'react';
import './Form.css';
import { ReactComponent as Minus } from './minus.svg';
import { ReactComponent as Plus } from './plus.svg';
import { ReactComponent as CounterIcon } from './counterIcon.svg';
import { thisExpression } from '@babel/types';

class Form extends React.Component {
    constructor(props){
        super(props)
        let counter = props.value
        let classList = ''
        let types = ['text', 'select', 'counter']
        const min = this.props.value
        const max = this.props.max
        const steps = this.props.steps
        this.state = {
            counter,
            classList,
            types,
            min,
            max,
            steps,
            Minus,
            Plus,
            CounterIcon
        }
        this.increaseCounter = this.increaseCounter.bind(this)
        this.decreaseCounter = this.decreaseCounter.bind(this)
    }

    increaseCounter() {
        if ( this.state.counter <= this.state.max - this.state.steps ) {
            this.setState( currentState => ({
                counter: currentState.counter + this.state.steps
            }))
        }
    }

    decreaseCounter() {
        if ( this.state.counter > this.state.min && this.state.counter >= this.state.steps ){
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
        if (this.props.display == 'counts') {
            return ( <div className='counter'>
                     <Minus className='minus' onClick={ this.decreaseCounter }/>
                     { this.state.counter }
                     <Plus className='plus' onClick={ this.increaseCounter }/>
                     </div>
            )
        }
        if (this.props.display == 'selector') {
            if (this.props.medium) {
                this.state.classList += ` select-medium`
            }
            if (this.props.large) {
                this.state.classList += ` select-large`
            }
            return ( <select className={ this.state.classList }>
                         <option>{ this.props.label }</option>
                     </select> )
        }
        return ( <label className={ this.state.classList }>{ this.props.label }
                 <form className={ this.state.classList }>
                     <input className={ this.state.classList } type={ this.props.type } placeholder={ this.props.label }/>
                 </form>
                 </label> )
    }
}

export default Form;


