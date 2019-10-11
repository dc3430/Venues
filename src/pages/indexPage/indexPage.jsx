import React, { Component } from 'react';
import { getAllVenues, deleteOne } from '../../services/api';
import { Link } from 'react-router-dom';
import ('./IndexPage.module.css');


class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venue: [],
        }; 
    }

    componentDidMount() {
        getAllVenues()
        .then(venues => this.setState({ venue: venues}))
        // console.log(venues)
    }

    handleDelete = (id) => {
        deleteOne(id).then(function (json) {
            window.location = '/';
        });
    }

    render() {
        const { venue } = this.state
        return (    
            
            <div className="VenueListPage-grid">
                {venue && venue.map((v, i)=> (
                    <React.Fragment key={i} >
                        <h5>{v.name}</h5>
                        <h5>{v.location}</h5>
                        <h5>{v.style}</h5>
                        <h5>{v.budget}</h5>
                        <h5>{v.ratinglevel}</h5>
                        <h5>{v.note}</h5>        
                    <Link className='btn btn-xs btn-warning' to={{ pathname: `/EditPage/${v._id}`, state: {venue} }}>
                        EDIT
                    </Link>  
                    </React.Fragment>
                ))}
            </div>
            

        
        )
    }
}

export default IndexPage;
