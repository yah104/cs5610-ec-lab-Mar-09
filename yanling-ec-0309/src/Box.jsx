import React from 'react';
import './Box.css';

export default function Box() {
    return (
        <body>
            <div class="grid-container">
                <div class="grid-item header">
                    <h1>Yanling Huang's Website</h1>
                </div>

                <div class="grid-item left-side-bar">
                    <div class="sidebar-content">
                        <ul>
                            <li>Home Page</li>
                            <li>Photoes</li>
                            <li>Secret Project</li>
                        </ul>
                    </div>
                </div>

                <div class="grid-item main">
                    <div class="box"></div>
                </div>
                
                <div class="grid-item right-side-bar">
                </div>

                <div class="grid-item footer">
                </div>
            </div>
        </body>        
    )
}