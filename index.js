import store from './store.js';
import html from './html.js';
import api from './api.js';
import event from './event.js'


function render(str){
    $('main').html(str)
}

const findById = function (id) {
    return this.items.find(currentItem => currentItem.id === id);
  };
  
  function addItem(item) {
    this.items.push(item)
  };


function main(){
    api.getItems()
        .then(res => res.json())
        .then((items) => {
    
    for (let i=0; i<items.length; i++) {

        let element = {id: items[i].id, title: items[i].title, url: items[i].url, desc: items[i].desc, rating: items[i].rating, expanded: false};
        store.bookmarks.push(element);
    }

    event.handleNewBookmarkClick ();
    event.handleFilterByClick ();
    event.handleLiClick ();
    event.handleCancelClick ();
    event.handleCreateClick ();
    event.handleErrorboxClick ();
    event.handleSecTitleClick();
    event.handleSelectRatingClick();
    event.clearSelectedClick();
    render (html.initialView());
       
})}


main();


render (html.initialView());

export default{
render,
addItem,
findById
};