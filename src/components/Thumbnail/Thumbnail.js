import React from "react";
import { ReactComponent as Stars } from "./stars.svg";
import { ReactComponent as Price } from "./price.svg";
import { ReactComponent as Divider } from "./divider.svg";
import { ReactComponent as Divider2 } from "./divider2.svg";
import { ReactComponent as Reviews } from "./inlineReviews.svg"
import { ReactComponent as Cart } from "./Cart.svg";
import hoverMac from "./Overlay.png";
import hoverMacBlue from "./OverlayBlue.png";
import thumbMac from "./ThumbnailMac.png";
import beats from "./Beats.png";
import inline from "./InlineMac.png";
import "./Thumbnail.css";

class Thumbnail extends React.Component {
    constructor(props) {
        super(props)
        let classList = ""
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
        } else if (this.props.type === "thumbnail beats") {
            return (
                <div className="beats">
                    <div className="contentContainer">
                        <img
                            className="thumb"
                            src={ beats }
                        />
                        <div className="detailContainer beats">
                            { this.state.label }
                            <Stars />
                            <Price />
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.type === "thumbnail inline") {
            return (
                <div className={ this.state.types }>
                    <div className="inlineContainer">
                        <img
                            className="thumb"
                            src={ inline }
                            onMouseEnter={ this.hoverHandler }
                            onMouseLeave={ this.exitHandler }
                        />
                        <div className="inlineDetails">
                            { this.state.label }
                            <Reviews />
                            <Divider2 />
                            <Price />
                            <span className="summary">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique
                                <br/>ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin
                                <br/>vulputate g nisl ut dolor ...
                            </span>
                            <Cart />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Thumbnail;