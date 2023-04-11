import './App.css';
import FaceRecognition from './Components/FaceRecognition';
import Formmg from './Components/Formmg';
import { Logo } from './Components/Logo';
import { Nav } from './Components/Nav';
import Rank from './Components/Rank';
import React, { Component } from 'react'
import Register from './Components/Register';
import Signin from './Components/Signin';

const PAT = 'e0cc8c51d54f48e8a994b852c1108ccf';
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = 'gauravingole04';
const APP_ID = 'Frontend-app';

// Change these to whatever model and image URL you want to use
const MODEL_ID = 'face-detection';
// const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';
// const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      input: '',
      IMAGE_URL: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ IMAGE_URL: this.state.input });
    // this.setState({ result: this.state.input });


    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": this.state.input
            }
          }
        }
      ]
    });
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
      .then(response => response.json())
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(error => console.log('error', error));
  }
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }
  render() {
    const { isSignedIn, IMAGE_URL, route, box } = this.state;
    return (
      <div className='App'>
       
        <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {
          route === 'home' ?
            <div>
              <Logo />
              <Rank />
              <Formmg onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
              <FaceRecognition box={box} IMAGE_URL={IMAGE_URL} />
            </div>
            :
            (
              route === 'signin' ?
                <Signin onRouteChange={this.onRouteChange} />
                : <Register onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

