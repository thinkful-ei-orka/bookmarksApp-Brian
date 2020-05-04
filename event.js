import index from './index.js'
import html from './html.js'
import store from './store.js';

const getItemIdFromElement = function (item) {
    return $(item)
      .closest('.js-li')
      .data('item-id');
};

//new click
function handleNewBookmarkClick () {
$('.js-bookmark-app').on('click', '.newBookmark', event => {
    //  console.log('new click');
     index.render(html.addBookmarkView());
})

};

function handleFilterByClick () {
// filter click
$('.js-bookmark-app').on('click', '.filterBy', event => {
    // console.log('FilterBy click');
    let crntRating = $('#lbl-rating').value();
    let crntClass = $(event.currentTarget).attr('value');
 console.log(crntRating);
console.log(crntClass);

})
};

function handleLiClick () {
// li click
$('.js-bookmark-app').on('click', '.bookmarks li', event => {
    // get the index of the item in store.items
    const id = event.currentTarget.id;
    
    for (let i=0;i<store.bookmarks.length;i++){
        if (store.bookmarks[i].id === id){
            store.bookmarks[i].expanded = !store.bookmarks[i].expanded
    
        }
    }
    index.render (html.initialView());
})
};

function handleSecTitleClick () {
    // li click
    $('.js-bookmark-app').on('click', ' .close-expanded', event => {
        // get the index of the item in store.items
        // const id = event.currentTarget.id;
        console.log("clicked");
        for (let i=0;i<store.bookmarks.length;i++){
            if (store.bookmarks[i].expanded === true){
                store.bookmarks[i].expanded = !store.bookmarks[i].expanded
                // console.log(store.bookmarks[i].expanded);
            }
        }
        index.render (html.initialView());
    })
    };

function handleCancelClick () {
// cancel click
$('.js-bookmark-app').on('click', '.cancel', event => {
    event.preventDefault();
    console.log('Cancel click');

})
};

function handleCreateClick () {
// create click
$('.js-bookmark-app').on('click', '.create', event => {
    event.preventDefault();

    console.log('Create click');
})
};

function handleErrorboxClick () {
// errorbox click
$('.js-bookmark-app').on('click', '.error-section', event => {
    console.log('Error click');
})
};

function handleSelectRatingClick(){

    $('.js-bookmark-app').on('click', '.star-rating-choice', event => {
                
        let crntRating = $(event.currentTarget).data("value");
        let crntClass = $(event.currentTarget).attr('class');
        store.currentRating = crntRating;

        $('.star-rating-choice-selected').attr('class','star-rating-choice');
        $(event.currentTarget).attr('class', 'star-rating-choice-selected');
       
    });
}

function clearSelectedClick (){
    $('.js-bookmark-app').on('click', '.star-rating-choice-selected', event => {
                
        // let crntRating = $(event.currentTarget).data("value");
        let crntClass = $(event.currentTarget).attr('class');
        store.currentRating = 0;

        $(event.currentTarget).attr('class', 'star-rating-choice')
       
    });
}

export default {
    handleNewBookmarkClick,
    handleFilterByClick,
    handleLiClick,
    handleCancelClick,
    handleCreateClick,
    handleErrorboxClick,
    handleSecTitleClick,
    handleSelectRatingClick,
    clearSelectedClick
};