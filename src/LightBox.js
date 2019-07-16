
import React, { Component } from 'react';

class LightBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: props.images,
            imageIndex: 0,
            close: props.close,
            imagesLoaded: 0,
            path:props.path
        }
    }

    togglenModal = () => {
        console.log("test")
    };

    nextSlide = () => {
        if (this.state.imageIndex < this.state.images.length - 1) {
            this.setState({ imageIndex: this.state.imageIndex + 1 })
        }
    };

    prevSlide = () => {
        if (this.state.imageIndex > 0) {
            this.setState({ imageIndex: this.state.imageIndex - 1 })
        }
    };

    currSlide = (n) => {
        if (n != this.state.imageIndex) {
            this.setState({ imageIndex: n })
        }
    };


    handleImageLoaded = () => {
        this.setState({ imagesLoaded: this.state.imagesLoaded + 1 });
    }

    render() {
        return (
            <div id="modal" className="modal">
                {this.state.imagesLoaded < 1 &&
                    <div className="loaderBackground">
                        <div className="loader">
                        <div className="spinner">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                            </div>
                        </div>
                    </div>
                }
                <span className="close cursor" onClick={this.state.close}>&times;</span>
                <a className="prev" onClick={this.prevSlide}>&#10094;</a>
                <a className="next" onClick={this.nextSlide}>&#10095;</a>
                <div className="modal-content">
                    <div className="slides-modal">
                        <img src={require(`${this.state.path+this.state.images[this.state.imageIndex]}`)} onLoad={this.handleImageLoaded} onError={this.handleImageLoaded}></img>
                    </div>
                    <div className="slide-chooser">
                        {this.state.images.map((item, index) => (
                            <div className={"column"} key={index}>
                                <img className="demo" onClick={this.currSlide.bind(this, index)} src={require(`${this.state.path + item}`)}></img>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>)
    }
}
// render() {
//     return (
//         <div id="modal" class="modal">
//             <button onclick={this.currentSlide}></button>
//             <span class="close cursor" onclick={this.currentSlide}>&times;</span>
//             <div class="modal-content">

//                 <div class="slides-modal">
//                     <img src={this.state.images[this.state.slideIndex]} style={{ width: '100%' }}></img>
//                 </div>
//                 <a class="prev" onclick={this.minusSlides}>&#10094;</a>
//                 <a class="next" onclick={this.plusSlides}>&#10095;</a>
//                 {this.state.images.map((item, index) => (
//                     <div key={index} class="column">
//                         <img class="image-modal" src={item} onclick={this.currentSlide} alt=""></img>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
export default LightBox;