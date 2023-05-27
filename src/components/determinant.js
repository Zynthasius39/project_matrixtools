import React from 'react';
import Main from '../layouts/main.js';
import { submit, interact, clearInteract } from '../scene.js';

export default function sum() {
    var matrixA = [];
    var matrixB = [];
    for (var i = 0; i < 9; i++) {
        matrixA.push(<input type="text" id={"a" + i} key={"a"+ i} className="glass_bg"></input>);
        matrixB.push(<input type="text" id={"b" + i} key={"b"+ i} className="glass_bg"></input>);
    }

    return (
        <Main>
            <div id="workspace" className="is-max">
                <span id="workspace-title" className="is-large">Determinant</span>
                <span className="is-large">A</span>
                <span className="is-large">B</span>
                <div className="matrix">
                    {matrixA}
                </div>
                <div className="matrix">
                    {matrixB}
                </div>
                <div id="matrixf">
                    <button onClick={clearInteract} className="glass_buttons is-large" style={{ width: "50px"}}>C</button>
                    <button onClick={interact} className="glass_buttons is-large" style={{ width: "50px"}}>-</button>
                    <button onClick={interact} className="glass_buttons is-large" style={{ width: "50px"}}>+</button>
                    <button onClick={submit} className="glass_buttons is-large">Calculate</button>
                    <button onClick={interact} className="glass_buttons is-large" style={{ width: "50px"}}>-</button>
                    <button onClick={interact} className="glass_buttons is-large" style={{ width: "50px"}}>+</button>
                    <button onClick={clearInteract} className="glass_buttons is-large" style={{ width: "50px"}}>C</button>
                </div>
            </div>
        </Main>
    );
}