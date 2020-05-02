/*
This js file is for holding the html strings needed for rendering
the different pages based on the state of the store
*/
import store from './store.js'

function initialView(){
   return `<section class="buttons new-filter centerThis">
        <button class='newBookmark btn centerThis'>New <img src='./images/bookmark-512.png' alt='bookmark logo'></button>
        <button class='filterBy btn centerThis'>Filter By <img src='./images/arrow_drop_down.png' alt='dropdown logo'></button>
    </section> 
    <br>
    <section class="bookmarks">
            
        <li class="1">Title 1 ${ratingString(3)}
        <li class="2">Title 2 ${ratingString(5)}
            
    </section>`
}
// ${store.bookmarks[0].title}
// ${store.bookmarks[1].title}

function expandedView(){
    return `<section class="buttons new-filter centerThis">
        <button class='newBookmark btn centerThis'>New <img src='./images/bookmark-512.png' alt='bookmark logo'></button>
        <button class='filterBy btn centerThis'>Filter By <img src='./images/arrow_drop_down.png' alt='dropdown logo'></button>
    </section> 
        <br>
    <section class="bookmarks">
        <div class="expanded">
            <section class="sec-title">
                <p>${state.bookmarks[0].title}</p>
                <img src='./trash-can-icon-gray-trash-bin.jpg' class="img-trash" alt="trashcan">
            </section>
        <section class="link">
            <a class='visitSite' href="${store.bookmarks[0].url}http://www.title1.com">Visit Site</a>
            <img src='./star3.jpg' class='star-group' alt="star with a 3 inside">
        </section>
        <section class="description">
            <p>${store.bookmarks[0].description}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem a vitae ipsa delectus officiis cupiditate fuga ratione similique soluta amet debitis alias, nulla sequi expedita laborum maxime excepturi deleniti recusandae!</p>
        </section>
        <li class="1">${store.bookmarks[0].title}Title 1 ${ratingString(store.bookmarks[0].rating)}
        <li class="2">${store.bookmarks[1].title}Title 1 ${ratingString(store.bookmarks[1].rating)}
        </div>    
    </section>`

}

function addBookmarkView(){
    return `<form action="submit" id='form-add-new-bookmark'>   
        <label for="addNewBookmark">Add New Bookmark:</label>
        <input type="text" id='addNewBookmark'> <br>
        <span>Select a rating:</span><br>
        <span><img src='./images/star1.jpg' class='star-group-choice' alt="star with a 1 inside">
            <img src='./images/star2.jpg' class='star-group-choice' alt="star with a 2 inside">
            <img src='./images/star3.jpg' class='star-group-choice' alt="star with a 3 inside">
            <img src='./images/star4.jpg' class='star-group-choice' alt="star with a 4 inside">
            <img src='./images/star5.jpg' class='star-group-choice' alt="star with a 5 inside"></span>
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
        <span><img src='./images/star1.jpg' class='star-group-choice' alt="star with a 1 inside">
            <img src='./images/star2.jpg' class='star-group-choice' alt="star with a 2 inside">
            <img src='./images/star3.jpg' class='star-group-choice' alt="star with a 3 inside">
            <img src='./images/star4.jpg' class='star-group-choice' alt="star with a 4 inside">
            <img src='./images/star5.jpg' class='star-group-choice' alt="star with a 5 inside"></span>
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
            return '<span class="star-group"><span class="fa fa-star"></span></span></li>'
        case 2 :
            return '<span class="star-group"><span class="fa fa-star"></span><span class="fa fa-star"></span></span></li>'
        case 3 :
            return '<span class="star-group"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span></li>'
        case 4 :
            return '<span class="star-group"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span></li>'
        case 5 :
            return '<span class="star-group"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span></li>'
    }
}

export default {
    initialView,
    expandedView,
    addBookmarkView,
    errorView

};