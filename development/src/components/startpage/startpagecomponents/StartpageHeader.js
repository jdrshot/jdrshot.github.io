import React, { Component} from 'react';
import './StartpageHeader.css';

class StartpageHeader extends Component {
    render() {
        return(
            <div className="startpage-header">
                <div className="startpage-header-image">
                    <img src="images/startpage.jpg" alt="" />
                    <p className="startpage-header-imagedescription">Doel - Belgium</p>
                </div>
                <div className="startpage-box">
					<p className="startpage-box-small">Jonathan</p>
					<p className="startpage-box-big">De Roo</p>
				</div>
            </div>
        );
    }
}

export default StartpageHeader
