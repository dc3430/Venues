import React from 'react';
import styles from './Venue.modules.css';
import { Link } from 'react-router-dom';

const Venue = props => (
    <div className={styles.venue}>
        <div className={styles.content}>
            <img alt={props.name} className={[styles.venueThumb, 'rounded'].join(' ')} src={props.imageUrl} />
            <div className={[styles.overlay, styles.venueThumb, 'rounded'].join(' ')}>
                <Link to={`/venues/${props.id}`}>
                    <div className={styles.venue}>
                        <h1 className="title p5vw">{props.name}</h1>
                        <h2>({props.location})</h2>
                    </div>
                </Link>
            </div>
            <hr />
        </div>
    </div>
);

export default Venue;