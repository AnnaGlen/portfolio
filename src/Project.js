import React, { Component } from 'react';
import Modal from './LightBox.js'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.data.title,
            text: props.data.text,
            image: props.data.image,
            odd: props.odd,
            modalImages: props.data.modalImages,
            displayModal: 0,
            handleImageLoaded: props.handleImageLoaded,
            path: props.path+props.index+'/'
        }
        console.log(this.state.path)

        this.firstContainer = <div className="large-grid-item">
            <img className="grid-images" src={require(`${this.state.path+this.state.image}`)}></img>
        </div>
        this.secondContainer = <div className="small-grid-item">
            <div className="project-titles text-field"><h2>{this.state.title}</h2></div>
            <div className="text-field">
                <p>{ReactHtmlParser(this.state.text)}</p>
            </div>
        </div>
        if (this.state.odd === 1) {
            this.firstContainer = <div className="large-grid-item">
                <img className="grid-images grid-images-left" src={require(`${this.state.path + this.state.image}`)}></img>
            </div>
            this.secondContainer = [this.firstContainer, this.firstContainer = this.secondContainer][0];
        }
    }

    togglenModal = () => {
        this.setState({ displayModal: !this.state.displayModal })
    };



    render() {
        if (this.state.displayModal == 0) {
            return (
                <div className="grid-row" onClick={this.togglenModal}>
                    {this.firstContainer}
                    {this.secondContainer}
                </div>
            );
        } else {
            return (
                <Modal images={this.state.modalImages} close={this.togglenModal} path={this.state.path} />
            )
        }
    }
}
export default Project;