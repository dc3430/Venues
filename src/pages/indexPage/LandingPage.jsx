import React, { Component } from 'react';
import { getAllVenues, deleteOne } from '../../services/api';
import { Link } from 'react-router-dom';
import './IndexPage.css';


class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venue: [],
        }; 
    }

    // handleChange = e => {
    //     this.updateMessage('');
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // updateMessage = msg => {
    //     this.setState({ message: msg });
    // };

    componentDidMount() {
        getAllVenues()
        .then(venues => this.setState({ venue: venues}))
        // console.log(venues)
    }

    handleDelete(id) {
        deleteOne(id).then(function (json) {
            window.location = '/indexPage';
        });
    }

    render() {
        const { venue } = this.state
        return (
            <div className='index-page'>
                <div className="index-page-venue">
                    { venue && venue.map((v, i)=> (
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
                        <button onClick={this.handleDelete.bind(this, v._id)} className="btn btn-danger btn-sm">Delete</button>
                        
                        </React.Fragment>
                    ))}
                </div>
            </div> 
        )
    }
}

export default IndexPage;
