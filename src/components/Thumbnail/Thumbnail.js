import React from 'react';
import { ReactComponent as Stars } from './stars.svg';
import { ReactComponent as Price } from './price.svg';
import { ReactComponent as Divider } from './divider.svg';
import hoverMac from './Overlay.png';
import hoverMacBlue from './OverlayBlue.png';
import thumbMac from './ThumbnailMac.png';
import './Thumbnail.css';

class Thumbnail extends React.Component {
    constructor(props) {
        super(props)
        let classList = ''
        let types = this.props.type
        let label = this.props.label
        let src = thumbMac
        this.state = {
            classList,
            types,
            label,
            src,
        }
    }
    hoverHandler = () => {
        if (this.props.type === "thumbnail") {
            this.setState({ src: hoverMac })
        } else if (this.props.type === "thumbnail filled" || this.props.type === "thumbnail row" || this.props.type === "thumbnail filled row") {
            this.setState({ src: hoverMacBlue })
        }
    }
    exitHandler = () => {
        this.setState({ src: thumbMac })
    }
    render() {
        if (this.props.type === "thumbnail" || this.props.type === "thumbnail filled") {
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
        } else if (this.props.type === "thumbnail row" || this.props.type === "thumbnail filled row") {
            return (
                <div className={ this.state.types }>
                    <div className="contentContainer">
                        <img
                            className="thumb"
                            src={ this.state.src }
                            onMouseEnter={ this.hoverHandler }
                            onMouseLeave={ this.exitHandler }
                        />
                        <div className="detailContainer">
                            { this.state.label }
                            <Stars />
                            <Price />
                        </div>
                    </div>
                </div>  
            )
        }
    }
}

export default Thumbnail;