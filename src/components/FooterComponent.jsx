import React, { Component } from 'react'

export default class FooterComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <footer className="footer fixed-bottom">
                    <span className="text-muted">AllRights reserved @SouravGuides</span>
                </footer>
            </div>
        )
    }
}
