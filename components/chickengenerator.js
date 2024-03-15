import React, { Component } from 'react';

class ChickenGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: 'chicken.png',
            topText: '',
            bottomText: '',
            textSizeTop: 10,
            textSizeBottom: 10
        };
    }

    handleImageURLChange = (event) => {
        this.setState({ imageURL: event.target.value });
    }

    handleTopTextChange = (event) => {
        this.setState({ topText: event.target.value });
    }

    handleBottomTextChange = (event) => {
        this.setState({ bottomText: event.target.value });
    }

    handleTextSizeTopChange = (event) => {
        this.setState({ textSizeTop: event.target.value });
    }

    handleTextSizeBottomChange = (event) => {
        this.setState({ textSizeBottom: event.target.value });
    }

    generateMeme = () => {
        // Implement meme generation logic here
        console.log('Generating meme...');
        console.log('Image URL:', this.state.imageURL);
        console.log('Top Text:', this.state.topText);
        console.log('Bottom Text:', this.state.bottomText);
        console.log('Top Text Size:', this.state.textSizeTop);
        console.log('Bottom Text Size:', this.state.textSizeBottom);
        // You can use these values to generate your meme
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.imageURL} onChange={this.handleImageURLChange} />
                <input type="text" value={this.state.topText} onChange={this.handleTopTextChange} />
                <input type="text" value={this.state.bottomText} onChange={this.handleBottomTextChange} />
                <input type="range" min="2" max="50" value={this.state.textSizeTop} onChange={this.handleTextSizeTopChange} />
                <input type="range" min="2" max="50" value={this.state.textSizeBottom} onChange={this.handleTextSizeBottomChange} />
                <button onClick={this.generateMeme}>Generate Meme</button>
            </div>
        );
    }
}

export default ChickenGenerator;
