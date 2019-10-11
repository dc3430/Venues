import React, { Component } from 'react';
import { createVenue } from '../../services/api';
import { Link } from 'react-router-dom';
import './CreateVenuePage.css';


class CreateVenuePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.user._id,
            name: '',
            location: '',
            style: '',
            budget: '',
            ratingLevel: '',
            notes: ''
        };
    }

    handleChange = e => {
        this.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    updateMessage = msg => {
        this.setState({ message: msg });
    };

    handleSubmit = e => {
        e.preventDefault();

        const self = this;
        createVenue(this.state).then(function() {
            self.props.history.push(`/IndexPage`);
        });
    };

    render() {
        console.log("createvenueprops", this.props.user)
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Name</span>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Location</span>
                        <select
                            className="form-control"
                            name="location"
                            onChange={this.handleChange}
                        >
                            <option value="Dallas">Dallas</option>
                            <option value="Denton">Denton</option>
                            <option value="Rockwall">Rockwall</option>
                            <option value="Aubrey">Aubrey</option>
                            <option value="Plano">Plano</option>
                            <option value="Irving">Irving</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Style</span>
                        <select
                            className="form-control"
                            name="style"
                            onChange={this.handleChange}
                        >
                            <option value="CountryClub">CountryClub</option>
                            <option value="Rustic">Rustic</option>
                            <option value="Classic">Classic</option>
                            <option value="Vintage">Vintage</option>
                            <option value="Modern">Modern</option>
                            <option value="Romantic">Romantic</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Budget</span>
                        <select
                            className="form-control"
                            name="budget"
                            onChange={this.handleChange}
                        >
                            <option value="$2,500">$2,500</option>
                            <option value="$3,500">$3,500</option>
                            <option value="$4,500">$4,500</option>
                            <option value="$5,500">$5,500</option>
                            <option value="$6,500">$6,500</option>
                            <option value="$7,500">$7,500</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Rating Level </span>
                        <select
                            className="form-control"
                            name="ratinglevel"
                            onChange={this.handleChange}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <span>Note</span>
                        <textarea
                            className="form-control"
                            name="note"
                            onChange={this.handleChange}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-default">Save Venue</button>
                        &nbsp;&nbsp;
                        <Link to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        );
    }
}


export default CreateVenuePage;