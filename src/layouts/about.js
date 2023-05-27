import React, { Component } from 'react';
import { pageAbout } from '../scene';

export default class about extends Component {
    componentDidMount() {
        pageAbout(true)
    }

    componentWillUnmount() {
        pageAbout(false)
    }

    render() {
        return (
            <div id="aboutlayout">
                <div id="aboutcard" className="glass_bg is-reversed">
                    <span>React Native is an open-source JavaScript framework built on the React library. Developers use it to create cross-platform React apps for iOS and Android.</span>
                    <img src='logo192.png' alt="reactjs" style={{ height: "80%" }}></img>
                </div>
                <div id="aboutcard" className="glass_bg">
                    <img src='threejs.svg' alt="threejs" style={{ height: "80%" }}></img>
                    <span>Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL.</span>
                </div>
                <div id="aboutcard" className="glass_bg">
                    <span>Greensock Animation Platform (GSAP) is an easy-to-use JavaScript library for web animation. It lets you animate just about anything that can be accessed with JavaScript including SVG, generic objects, canvases, and more.</span>
                    <img src='gsap.svg' alt="gsapjs" style={{ height: "80%"}}></img>
                </div>
                <div id="aboutcard" className="glass_bg">
                    <img src='mathjs.png' alt="mathjs" style={{ height: "50%", maxWidth: "50vw" }}></img>
                    <span>Math.js is an extensive math library for JavaScript and Node.js. Powerful and easy to use.</span>
                </div>
            </div>
        )
    }
}