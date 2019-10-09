import React, { Component } from 'react';
import { getAllVenues } from '../../services/api';
import Venue from '../../components/Venue/Venue'
import styles from './Venues.module.css'

class Venues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: [],
        };
    }

    componentDidMount() {
        const self = this;
        // const VenueId = this.props.match.params.id;

        getAllVenues().then(function(json) {
            self.setState({ venues: json });
        });
    }

    render() {
        return (
            <div>
                {this.state.venues.length &&
                    <div className={styles.setContainer}>
                        {this.state.venues.map((venue, idx) =>
                            <Venue
                                name={venue.name}
                                location={venue.location}
                                imageUrl={venue.imageUrl}
                                id={venue._id}
                                key={idx}
                            />
                        )}
                    </div>
                }
            </div>
        );
    }
}



export default Venues;