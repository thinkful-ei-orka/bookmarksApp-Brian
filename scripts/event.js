import index from './index.js'
import html from './html.js'
import store from './store.js';
import api from './api.js';

const getItemIdFromElement = function (item) {
    return $(item)
      .closest('.js-li')
      .data('item-id');
};

//new click
function handleNewBookmarkClick () {
    $('.js-bookmark-app').on('click', '.newBookmark', event => {
        
        store.descHold = '';
        store.titleHold = '';
        store.adding = true;
        store.error = null;
        index.render();
        store.adding = false;
    })
};

function handleFilterByClick () {
// filter click
    $('.js-bookmark-app').on('change', '#rating', event => {
        
        let crntRating = $('#rating').val();
        store.filter = crntRating;
        store.error = null;
        store.adding = false;
        index.render ();

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
        store.error = null;
        store.adding = false;
        index.render ();
    })
};

function handleSecTitleClick () {
    // li click
    $('.js-bookmark-app').on('click', ' .close-expanded', event => {
        // get the index of the item in store.items
    
        for (let i=0;i<store.bookmarks.length;i++){
            if (store.bookmarks[i].expanded === true){
                store.bookmarks[i].expanded = !store.bookmarks[i].expanded
            }
        }
        store.error = null;
        store.adding = false;
        index.render ();
    })
    };

function handleCancelClick () {
// cancel click
    $('.js-bookmark-app').on('click', '.cancel', event => {
        event.preventDefault();
        $('#addNewBookmarkTitle').val('');
        $('#addNewBookmarkUrl').val('');
        $('#bookmark-description').val('');
        store.currentRating = 0;
        store.error = false;
        store.adding = false;
        index.render();
    
    })
};



function handleCreateClick () {
// create click
    $('.js-bookmark-app').on('submit', '#form-add-new-bookmark', event => {
        event.preventDefault();
        
        let crntTitle = $('#addNewBookmarkTitle').val();
        let crntUrl = $('#addNewBookmarkUrl').val();
        let crntDesc = $('#bookmark-description').val();
        let crntRating = store.currentRating;

        //Check the rating 
        
            if (crntRating === 0){
                // create and error
                store.error = 'Must have a rating';
                store.adding = false;
                // store.error = 'Must have a rating';
                index.render ();
                // store.error = false;
                    
            } else {
                // call the api
                api.createItem(crntTitle, crntUrl, crntDesc, crntRating)
                                                
                    .then(function (newItem) {
                    
                        if (!store.error){
                            store.bookmarks = [];
                            index.getAndRender();
                        } else {
                            store.error = null;
                        };
                    
                    })
                    .catch((error) => {
                        store.descHold = crntDesc;
                        store.titleHold = crntTitle;
                        store.setError(error.message);
                        index.render();
                    });
            };
        
    });
};



function handleErrorboxClick () {
// errorbox click
    $('.js-bookmark-app').on('click', '.error-section', event => {

        if (store.error) {
            store.error = null;
            store.adding = true;
            index.render();
            store.adding = false;
        }
    }) 
}

function handleSelectRatingClick(){

    $('.js-bookmark-app').on('click', '.star-rating-choice', event => {
                
        let crntRating = $(event.currentTarget).data("value");
        let crntClass = $(event.currentTarget).attr('class');
        
        store.currentRating = crntRating;
        
        $('.star-rating-choice-selected').attr('class','star-rating-choice');
        $(event.currentTarget).attr('class', 'star-rating-choice-selected');
       
    });
}


function handleDeleteClick(){
    $('.js-bookmark-app').on('click', '.img-trash', event => {
        
        let thisId = event.currentTarget.id;
        
        api.itemDelete(thisId)
            .then(res => res.json())
            .then(function () {
        
            
            // clear the store
            store.bookmarks = [];
            index.getAndRender();
                  
            });

    });
};


export default {
    handleNewBookmarkClick,
    handleFilterByClick,
    handleLiClick,
    handleCancelClick,
    handleCreateClick,
    handleErrorboxClick,
    handleSecTitleClick,
    handleSelectRatingClick,
    handleDeleteClick
};