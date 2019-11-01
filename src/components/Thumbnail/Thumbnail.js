import React from 'react';
import { ReactComponent as Stars } from './stars.svg';
import { ReactComponent as Price } from './price.svg';
import { ReactComponent as Divider } from './divider.svg';
import hoverMac from './Overlay.png';
import thumbMac from './ThumbnailMac.png';
import './Thumbnail.css';

class Thumbnail extends React.Component {
    constructor(props) {
        super(props)
        let classList = ''
        let types = props.type
        let label = props.label
        this.state = {
            classList,
            types,
            label
        }
        this.handleEnter = this.handleEnter.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
    }

    handleEnter() {
        return (
            <img src={ hoverMac } onMouseLeave={ this.handleLeave }/>
        )
    }

    handleLeave() {
        return (
            <img src={ thumbMac } onMouseLeave={ this.handleEnter }/>
        )
    }

    render() {
        return (
          <div className={ this.props.type }>
               <img src={ thumbMac } onMouseEnter={ this.handleEnter }/>
               <Divider />
               { this.props.label }
               <Stars />
               <Price />
          </div>  
        ) 
    }
}

export default Thumbnail;