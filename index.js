import store from './store.js';
import html from './html.js';
import api from './api.js';
import event from './event.js'


function render(str){
    console.log(store);
    $('main').html(str)
}


  
  

function getAndRender(){
    api.getItems()
        .then(res => res.json())
        .then((items) => {

            for (let i=0; i<items.length; i++) {

                let element = {id: items[i].id, title: items[i].title, url: items[i].url, desc: items[i].desc, rating: items[i].rating, expanded: false};
                store.bookmarks.push(element);
            };
            render (html.initialView());
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
    event.clearSelectedClick();
    event.handleDeleteClick();
    
       
};


main();


render (html.initialView());

export default{
    getAndRender,
    render
};