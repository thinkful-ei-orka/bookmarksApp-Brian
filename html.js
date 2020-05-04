/*
This js file is for holding the html strings needed for rendering
the different pages based on the state of the store
*/
import store from './store.js'

function initialView(){
   return `<section class="buttons new-filter centerThis">
        <button class='newBookmark btn centerThis'>New <img src='./images/bookmark-512.png' alt='bookmark logo'></button>
        <label for='rating' class='filterBy' id='lbl-rating'>
            <select id='rating'>
                <option value=0>Filter By
                <option value=1>&#9733</option>
                <option value=2>&#9733&#9733</option>
                <option value=3>&#9733&#9733&#9733</option>
                <option value=4>&#9733&#9733&#9733&#9733</option>
                <option value=5>&#9733&#9733&#9733&#9733&#9733</option>
            </select>
        </label>
    </section> 
    <br>
    <section class="bookmarks">
        ${listString()}           
    </section>`
 };
//<button class='filterBy btn centerThis'>Filter By <img src='./images/arrow_drop_down.png' alt='dropdown logo'></button>
// ${store.bookmarks[0].title}
// ${store.bookmarks[1].title}

// function expandedView(){
//     return `<section class="buttons new-filter centerThis">
//         <button class='newBookmark btn centerThis'>New <img src='./images/bookmark-512.png' alt='bookmark logo'></button>
//         <button class='filterBy btn centerThis'>Filter By <img src='./images/arrow_drop_down.png' alt='dropdown logo'></button>
//     </section> 
//         <br>
//     <section class="bookmarks">
//         <div class="expanded">
//             <section class="sec-title">
//                 <p>${store.bookmarks[0].title}</p>
//                 <img src='./images/trash-can-icon-gray-trash-bin.jpg' class="img-trash" alt="trashcan">
//             </section>
//         <section class="link">
//             <a class='visitSite' href="${store.bookmarks[0].url}">Visit Site</a>
//             <img src='./images/star3.jpg' class='star-group' alt="star with a 3 inside">
//         </section>
//         <section class="description">
//             <p>${store.bookmarks[0].description}!</p>
//         </section>
//         <li class="1">${store.bookmarks[0].title}Title 1 ${ratingString(store.bookmarks[0].rating)}
//         <li class="2">${store.bookmarks[1].title}Title 1 ${ratingString(store.bookmarks[1].rating)}
//         </div>    
//     </section>`

// }

function addBookmarkView(){
    return `<form action="submit" id='form-add-new-bookmark'>   
        <label for="addNewBookmark">Add New Bookmark:</label>
        <input type="text" id='addNewBookmark' placeholder='Enter a valid URL'> <br>
        <span>Select a rating:</span><br>
        <span>${selectRating()}</span>
        <textarea name="bookmark-description" placeholder='Add a description (optional)' id="bookmark-description" cols="30" rows="10"></textarea>
        <section class="buttons cancel-create centerThis">
            <button class='cancel btn centerThis'>Cancel </button>
            <button type='submit' form='form-add-new-bookmark' value="Submit" class='create btn centerThis'>Create </button>
        </section> 
    </form>`
}

function errorView(){
    return `<form action="submit" id='form-add-new-bookmark'>   
        <label for="addNewBookmark">Add New Bookmark:</label>
        <input type="text" id='addNewBookmark'> <br>
        <span>Select a rating:</span><br>
        
        <textarea name="bookmark-description" placeholder='Add a description (optional)' id="bookmark-description" cols="30" rows="10"></textarea>
        <section class="buttons cancel-create centerThis">
            <button disabled class='cancel btn centerThis'>Cancel </button>
            <button disabled type='submit' form='form-add-new-bookmark' value="Submit" class='create btn centerThis'>Create </button>
        </section> 
        <br>
        <section class="error-section">
            <h2>Must have a rating</h2>
        </section>
    </form>`
}

function ratingString(rating){
     switch (rating) {
        case 1 :
            return '<span class="star-group"><span class="fa fa-star"></span></span>'
        case 2 :
            return '<span class="star-group"><span class="fa fa-star"></span><span class="fa fa-star"></span></span>'
        case 3 :
            return '<span class="star-group"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span>'
        case 4 :
            return '<span class="star-group"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span>'
        case 5 :
            return '<span class="star-group"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span>'
    }
}

function selectRating(){
    let selectRatingString = ''
    for (let i=1; i<6; i++){
        selectRatingString = selectRatingString + 
        `<img src='./images/star${i}.jpg' id='star-rating-${i}' class='star-rating-choice' alt="star with a ${i} inside" data-value="${i}">`;        
    }

    return selectRatingString;
}

function listString(){
    let returnString = '';
    for (let i = 0; i < store.bookmarks.length; i++){
        if (store.bookmarks[i].expanded === true) {
            returnString = returnString + `<div class="expanded">
            <section class="sec-title">
                <p>${store.bookmarks[i].title}</p>
                <img src='./images/trash-can-icon-gray-trash-bin.jpg' class="img-trash" alt="trashcan">
            </section>
        <section class="link">
            <a class='visitSite' href="${store.bookmarks[i].url}">Visit Site ${store.bookmarks[i].url}</a>
            <img src='./images/star${store.bookmarks[i].rating}.jpg' class='star-group close-expanded' alt="star with a 3 inside">
        </section>
        <section class="description">
            <p>${store.bookmarks[i].description}!</p>
        </section>`
        } else {
        returnString = returnString + `<li class="js-li" id=${store.bookmarks[i].id}>${store.bookmarks[i].title} ${ratingString(store.bookmarks[i].rating)}</li>`
    }
};
    
    return returnString;
}


export default {
    initialView,
    addBookmarkView,
    errorView

};