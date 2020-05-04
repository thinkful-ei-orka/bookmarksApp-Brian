// import store from './store';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/brian/bookmarks';

function getItems() {
    return fetch(BASE_URL)
    //return Promise.resolve('A successful response!');
}

function createItem(title, url, desc, rating) {
    let newItem = {
        title,
        url,
        desc,
        rating 
    };
    
    return fetch((BASE_URL), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    })
    .catch(error => alert('Something went wrong. Try again later.')
    );
}

// function updateItem(id, updateData){
//     let stringData = JSON.stringify(updateData);
//     return fetch(`${BASE_URL}items/${id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: stringData
//     })
//     .catch(error => alert('Something went wrong. Try again later.')
//     );
// }

function itemDelete(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
    .catch(error => alert('Something went wrong. Try again later.')
    );
}

export default {
getItems,
createItem,
//updateItem,
itemDelete
};
