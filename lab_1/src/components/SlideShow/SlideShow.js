import {Component} from "react";

export class SlideShow extends Component {
     imagePrefix = "./images/";
     images = ['1.jpg', '2.png', '3.png'];
     arrayIndex = 0;
     slide = false;
     interval;

    constructor(props) {
        super(props);
        this.state = {current: this.imagePrefix + this.images[0]}
    }

    changeImage = arrayIndex => {
        this.setState( { current: this.imagePrefix + this.images[arrayIndex]})
    }

    next = () => {
        if (!this.slide) {
            if (this.arrayIndex < this.images.length - 1) {
                this.arrayIndex++;
                this.changeImage(this.arrayIndex);
            } else {
                this.arrayIndex = this.images.length - 1;
            }
        }
    }

    prev = () => {
        if (!this.slide) {
            if (this.arrayIndex > 0) {
                this.arrayIndex--;
                this.changeImage(this.arrayIndex);
            } else {
                this.arrayIndex = 0;
            }
        }
    }

    changeButtonState = (first, second) => {
        document.getElementById(first).classList.add('disabled')
        document.getElementById(second).classList.remove('disabled')
    }

    start = () => {
        if (!this.slide) {
            this.slide = !this.slide;
            this.interval = setInterval(() => {
                this.arrayIndex++;
                this.changeImage(this.arrayIndex);
                if (this.arrayIndex === this.images.length) {
                    this.arrayIndex = 0;
                    this.changeImage(this.arrayIndex);
                }
            }, 1000)
            this.changeButtonState('start', 'stop');
        }
    }

    stop = () => {
        if (this.slide) {
            this.slide = !this.slide;
            clearInterval(this.interval);
            this.changeButtonState('stop', 'start');
        }
    }

    imageSlider = () => {
        return (
            <div>
                <img width="400px" src={this.state.current} id="imgSlider" alt="this.images"/>
                <div className={'my-4'}>
                    <button className={'btn btn-success mx-2'} onClick={this.prev}>prev</button>
                    <button id={'start'} className={'btn btn-primary mx-2'} onClick={this.start}>Start</button>
                    <button id={'stop'} className={'btn btn-danger mx-2'} onClick={this.stop}>Stop</button>
                    <button className={'btn btn-success mx-2'} onClick={this.next}>Next</button>
                </div>
            </div>
        )
    }

    render() {
        return(
            this.imageSlider()
        );
    }

}