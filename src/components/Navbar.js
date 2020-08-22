import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <div className = "container">
                            <a className = "brand-logo center">List</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}