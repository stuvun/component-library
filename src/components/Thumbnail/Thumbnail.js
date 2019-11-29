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
        let src = thumbMac
        this.state = {
            classList,
            types,
            label,
            src,
        }
    }
    hoverHandler = () => {
        this.setState({ src: hoverMac })
    }
    exitHandler = () => {
        this.setState({ src: thumbMac })
    }
    render() {
        return (
            <div className={ this.state.types }>
                <img
                    className="thumb"
                    src={ this.state.src }
                    onMouseEnter={ this.hoverHandler }
                    onMouseLeave={ this.exitHandler }
                />
                <Divider />
                { this.state.label }
                <Stars />
                <Price />
            </div>  
        ) 
    }
}

export default Thumbnail;