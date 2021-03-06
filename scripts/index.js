/**
 * User Stories
 * I can add bookmarks to my bookmark list.
 * bookmarks contain:  Title, url link, description, rating(1-5)
 * I can see a list of bookmarks upon opening app
 * I can click on a bookmark to show detailed view
 * I can remove bookmarks
 * I receive good feedback when I cannot submit a bookmark
 * I can filter by rating
 */

 /**
  * Technical Requirements
  * Use fetch for AJAX calls and jQuery for DOM manipulation
  * Use namespacing to adhere to good architecture practices
  *     Minimal global variables
  *     Create modules in separate files to organize your code
  *     Logically group your functions (e.g. API methods, store methods...)
  * Keep your Data out of the DOM
  *     No direct DOM manipulation in your event handlers!
  *     Follow the React-ful design pattern - change your state, re-render your component
  * Use semantic HTML
  * Use a responsive and mobile-first design    
  *     Visually and functionally solid in viewports for mobile and desktop
  * Follow a11y best practices
  *     Refer back to the lessons on accessibility, forms
  */

import store from './store.js';
import html from './html.js';
import api from './api.js';
import event from './event.js'


function render(){

    if (store.adding === true) {
        $('main').html(html.addBookmarkView()) ;
    } else if (store.error) {
        $('main').html(html.errorView(store.error)) ;
    } else {
        $('main').html(html.initialView()) ;
    }   
}

function getAndRender(){
    api.getItems()
        .then(res => res.json())
        .then((items) => {

            for (let i=0; i<items.length; i++) {

                let element = {id: items[i].id, title: items[i].title, url: items[i].url, desc: items[i].desc, rating: items[i].rating, expanded: false};
                store.bookmarks.push(element);
            };
            store.adding = false;
            store.error = null;
            render ();
        });
    
};

function main(){
    getAndRender();
    event.handleNewBookmarkClick ();
    event.handleFilterByClick ();
    event.handleLiClick ();
    event.handleCancelClick ();
    event.handleCreateClick ();
    event.handleErrorboxClick ();
    event.handleSecTitleClick();
    event.handleSelectRatingClick();
    event.handleDeleteClick();      
};

main();

export default{
    getAndRender,
    render
};