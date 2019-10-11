import tokenService from '../utils/tokenService';


export function createVenue(venue) {
    return fetch(`/api/venue`, {
        method: 'POST',
        body: JSON.stringify(venue),
        headers: {
            'content-type': 'application/json',
            'Authorization': "Bearer " + tokenService.getToken()
        }
    })
}

export function updateVenue(venue) {
    delete venue.userId
    console.log(venue)
    return fetch(`/api/venue/${venue._id}`, {
        method: 'PUT',
        body: JSON.stringify(venue),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        console.log(data)
        return data
    })
}

export function deleteOne(venue) {
    return fetch(`/api/venue${venue}`, {
        method: 'delete'
    }).then(function (res) {
        return res.json()
    });
}

// export function deleteOne(id) {
//     return fetch(`/api/venue${id}`, {
//       method: 'DELETE'
//     }).then(res => res.json());
// }

export function getAllVenues() {
    return fetch(`/api/venue`)
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        console.log(data)
        return data
    })
}

// home or index
export function getOneVenue(venueId) {
    return fetch(`/api/venue/${venueId}`)
    .then((res) => {
        console.log(res)
        return res.json()
    })
    .then((data) => {
        console.log(data)
        return data
    })
}