const store = {
    bookmarks: [],
    adding: false,
    error: false,
    errorMessage: '',
    filter: 0,
    currentRating: 0,
    titleHold: '',
    descHold: ''
};

function addItem(item) {
    this.bookmarks.push(item)
};

const findById = function (id) {
    return this.bookmarks.find(currentItem => currentItem.id === id);
  };

export default {
    ...store,
    addItem,
    findById

};

