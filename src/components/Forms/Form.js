import React from 'react';
import './Form.css';
import { ReactComponent as Minus } from './minus.svg';
import { ReactComponent as Plus } from './plus.svg';
import { ReactComponent as CounterIcon } from './counterIcon.svg';
import { ReactComponent as Checkbox } from './checkboxBlack.svg';
import { ReactComponent as Uncheckedbox } from './Uncheckedbox.svg';
import { ReactComponent as Checkboxblue } from './checkboxBlue.svg';
import { ReactComponent as Uncheckedboxblue } from './Uncheckedboxblue.svg';
import { ReactComponent as Select } from './Select.svg';
import { thisExpression } from '@babel/types';

class Form extends React.Component {
    constructor(props){
        super(props)
        let counter = props.value
        let classList = ''
        let types = ['text', 'select', 'counter']
        let displaysList = ['black', 'blue']
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
            CounterIcon,
            Checkbox,
            Uncheckedbox,
            Checkboxblue,
            Uncheckedboxblue,
            displaysList
        }
        this.increaseCounter = this.increaseCounter.bind(this)
        this.decreaseCounter = this.decreaseCounter.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleUncheck = this.handleUncheck.bind(this)
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

    handleCheck() {
        if ( this.props.blue ) {
            this.state.displaysList -= ` blue`
            return ( <Checkboxblue onClick={ this.handleUncheck }/>)
        }
        this.state.displaysList -= ` black`
        return ( <Checkbox onClick={ this.handleUnchek }/> )
    }

    handleUncheck() {
        if ( this.props.blue ) {
            this.state.displaysList += ` blue`
            return ( <Checkboxblue onClick={ this.handleCheck }/>)
        }
        this.state.displaysList += ` black`
        return ( <Checkbox onClick={ this.handleCheck }/> )
    }

    render() {
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
            if (this.props.filled) {
                this.state.classList += ` select-filled`
            }
            return ( <select className={ this.state.classList }>
                         <option>{ this.props.label }</option>
                     </select> )
        }
        if (this.props.display == 'checkbox') {
            if (this.props.blue) {
                return ( <Checkboxblue onClick={ this.handleUncheck }/> )
            }
            return ( <Checkbox className={ this.props.check } onClick={ this.handleUncheck }/>)
        }
        return ( <label className={ this.state.classList }>{ this.props.label }
                 <form className={ this.state.classList }>
                     <input className={ this.state.classList } type={ this.props.type } placeholder={ this.props.label }/>
                 </form>
                 </label> )
    }
}

export default Form;


