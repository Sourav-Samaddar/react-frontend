import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="sticky-top">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="https://clone-875f2.web.app/" className="navbar-brand">Employee Management App</a>
                    </div>
                    </nav>
                </header>
            </div>
        )
    }
}
