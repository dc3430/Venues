import React, { Component } from 'react';
import { getOneVenue, updateVenue,  } from '../../services/api';
import './EditVenuePage.css';

class EditVenuePage extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this)
        this.state = {
            userId: this.props.user._id,
            style: "",
            location: "",
            ratinglevel: "",
            budget: "",
            note: "",
            name: "",
            _id: ""
        };
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = e => {
        const self = this;
        e.preventDefault();
        updateVenue(this.state).then(function() {
            self.props.history.push(`/indexPage`)
        });
    };

    componentDidMount() {
        const self = this;

        getOneVenue(this.props.match.params.id).then(function({
            style, location, ratinglevel, budget, note, name, _id
        }) {
           self.setState(() => {
               return {
                   style,
                   location,
                   ratinglevel,
                   budget,
                   note,
                   name,
                   _id
               }
           })
        });
    }

    goBack(){
        this.props.history.goBack();
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Name</span>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleChange}
                            name="name"
                            value={this.state.name}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Location</span>
                        <input
                            type="text"
                            className="form-control"
                            name="location"
                            value={this.state.location}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Style</span>
                        <input
                            type="text"
                            className="form-control"
                            name="style"
                            value={this.state.style}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Budget</span>
                        <input
                            type="text"
                            className="form-control"
                            name="budget"
                            value={this.state.budget}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Ratinglevel</span>
                        <input
                            type="text"
                            className="form-control"
                            name="ratinglevel"
                            value={this.state.ratinglevel}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Note</span>
                        <textarea value={this.state.note} className="form-control" name="note" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-success">Update Venue</button>
                        &nbsp;&nbsp;
                        <button className="btn btn-default" onClick={this.goBack}>Cancel</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default EditVenuePage;
