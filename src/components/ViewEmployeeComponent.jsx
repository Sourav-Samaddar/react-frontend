import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({
                employee: res.data
            });
        });
    }

    cancel() {
        this.props.history.push('/employees');
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">View Employee Details</h3>
                            <div className="card-body">
                                <div className="row">
                                    <label>First Name:</label>
                                    <div> {this.state.employee.firstName} </div>
                                </div>
                                <div className="row">
                                    <label>Last Name:</label>
                                    <div> {this.state.employee.lastName} </div>
                                </div>
                                <div className="row">
                                    <label>Email Address:</label>
                                    <div> {this.state.employee.emailId} </div>
                                </div>
                                <div className="row">
                                    <button className="btn btn-danger" onClick={this.cancel}
                                    style={{marginLeft: "10px"}}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
