// create
export function createVenue(venue) {
    return fetch(`/api/venues/`, {
        method: 'POST',
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

export function updateVenue(venue) {
    return fetch(`/api/venues/${venue._id}`, {
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
    return fetch(`/api/venues/${id}`, {
        method: 'delete'
    }).then(function (res) {
        return res.json()
    });
}

export function getAllVenues() {
    return fetch(`/api/venues`).then(function (res) {
        return res.json();
    })
}

// home or index
export function getOneVenue(venueId) {
    return fetch(`/api/venue/${venueId}`).then(function (res) {
        return res.json();
    })
}