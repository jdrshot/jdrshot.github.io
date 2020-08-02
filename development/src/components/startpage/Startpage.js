import React, { Component } from 'react';
import StartpageHeader from './startpagecomponents/StartpageHeader.js';
import './Startpage.css'

class Startpage extends Component {
    render() {
        return(
            <div className="startpage">
                <StartpageHeader />
            </div>
        );
    }
}

export default Startpage;
