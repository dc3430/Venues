import tokenService from '../utils/tokenService';


export function createVenue(venue) {
    return fetch(`/api/venues/venue`, {
        method: 'POST',
        body: JSON.stringify(venue),
        headers: {
            'content-type': 'application/json',
            'Authorization': "Bearer " + tokenService.getToken()
        }
    })
}

export function updateVenue(venue) {
    return fetch(`/api/venues/venue/${venue._id}`, {
        method: 'PUT',
        body: JSON.stringify({
            userId: venue.userId,
            name: venue.name,
            location: venue.location,
            style: venue.style,
            budget: venue.budget,
            ratingLevel: venue.ratingLevel,
            note: venue.note,
            imageUrl: venue.imageUrl,
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}

export function deleteVenue(id) {
    return fetch(`/api/venues/venue${id}`, {
        method: 'delete'
    }).then(function (res) {
        return res.json()
    });
}

export function getAllVenues() {
    return fetch(`/api/venues/venue`).then(function (res) {
        return res.json();
    })
}

// home or index
export function getOneVenue(venueId) {
    return fetch(`/api/venue/venue${venueId}`).then(function (res) {
        return res.json();
    })
}