import React, { Component } from 'react';
import { getOneVenue, updateVenue } from '../../services/api';

class EditVenuePage extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this)
        this.state = {
            userId: this.props.user._id,
        };
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        });
    };


    updateMessage = msg => {
        this.setState({ message: msg });
    };

    handleSubmit = e => {
        const self = this;
        e.preventDefault();
        updateVenue(this.state).then(function() {
            self.props.history.push(`/venues/${self.props.match.params.id}`)
        });
    };

    componentDidMount() {
        const venueId = this.props.match.params.id;
        const self = this;

        getOnevenue(venueId).then(function(venue) {
            self.setState({
                _id: venue._id,
                name: venue.name,
                location: venue.location,
                style: venue.style,
                budget: venue.budget,
                ratinglevel: venue.ratinglevel,
                imageUrl: venue.imageUrl,
                note: venue.note,
            });
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
                            value=""
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
                            value=""
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
                            value=""
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Image URL</span>
                        <input
                            type="text"
                            className="form-control"
                            name="imageUrl"
                            value={this.state.imageUrl}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Note</span>
                        <textarea className="form-control" name="note" onChange={this.handleChange} />
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
