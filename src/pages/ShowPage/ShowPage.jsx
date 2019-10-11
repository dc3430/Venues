import React, { Component } from 'react';
import { deleteVenue } from '../../services/api';
import { Link } from 'react-router-dom';

class ShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.user._id,
            name: '',
            location: '',
            style: '',
            budget: '',
            ratingLevel: ''
        };
    }


// delete a venue from here 


    render() {
        return (
            <div className="ShowPage">
                <h1>Show</h1>
                    <hr/>
                <p>testing </p>

            </div>
        )
    }
}

export default ShowPage;