import React from "react";
import "./Form.css";
import { ReactComponent as Minus } from "./minus.svg";
import { ReactComponent as Plus } from "./plus.svg";
import { ReactComponent as CounterIcon } from "./counterIcon.svg";
import { ReactComponent as Checkbox } from "./checkboxBlack.svg";
import { ReactComponent as Uncheckedbox } from "./Uncheckedbox.svg";
import { ReactComponent as Checkboxblue } from "./checkboxBlue.svg";
import { ReactComponent as Uncheckedboxblue } from "./Uncheckedboxblue.svg";
import { ReactComponent as Select } from "./Select.svg";

class Form extends React.Component {
    constructor(props){
        super(props)
        let counter = props.value
        let classList = ""
        let types = ["text", "select", "counter"]
        let displaysList = ["black", "blue"]
        let display = this.props.display
        const min = this.props.value
        const max = this.props.max
        const steps = this.props.steps
        const checked = this.props.checked
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
            checked,
            displaysList,
            display
        }
    }
    increaseCounter = () => {
        if ( this.state.counter <= this.state.max - this.state.steps ) {
            this.setState( currentState => ({
                counter: currentState.counter + this.state.steps
            }))
        }
    }

    decreaseCounter = () => {
        if ( this.state.counter > this.state.min && this.state.counter >= this.state.steps ){
            this.setState( currentState => ({
                counter: currentState.counter - this.state.steps
            }))
        }
    }

    handleCheck = () => {
        if (this.state.checked === "false") {
            this.setState({ checked: "true" })
        } else if (this.state.checked === "true") {
            this.setState({ checked: "false"})
        }
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
        if (this.props.display == "counts") {
            return ( <div className="counter">
                     <Minus className="minus" onClick={ this.decreaseCounter }/>
                     { this.state.counter }
                     <Plus className="plus" onClick={ this.increaseCounter }/>
                     </div>
            )
        }
        if (this.props.display == "selector") {
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
        if (this.props.display == "redeemer") {
            if (this.props.large) {
                return ( <form className="redeem-large">
                        <input className="redeemer-large" placeholder={ this.props.label }/>
                        <button className="redeemer-large"><span>{ this.props.span }</span></button>
                     </form>)
            }
            return ( <form className={this.props.type}>
                        <input className={ this.props.display } placeholder={ this.props.label }/>
                        <button className={ this.props.display }><span>{ this.props.span }</span></button>
                     </form>)
        }
        if (this.props.display == "checkbox") {
            if (this.props.blue) {
                if (this.state.checked === "false") {
                    return <Uncheckedboxblue onClick={ this.handleCheck}/>
                } else if (this.state.checked === "true") {
                    return <Checkboxblue onClick={ this.handleCheck}/>
                }
            } else {
                if (this.state.checked === "false") {
                    return <Uncheckedbox onClick={ this.handleCheck}/>
                } else if (this.state.checked === "true") {
                    return <Checkbox onClick={ this.handleCheck }/>
                }
            }
        }
        return ( <label className={ this.state.classList }>{ this.props.label }
                 <form className={ this.state.classList }>
                     <input className={ this.state.classList } type={ this.props.type } placeholder={ this.props.label }/>
                 </form>
                 </label> )
    }
}

export default Form;


