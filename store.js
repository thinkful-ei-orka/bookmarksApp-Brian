const store = {
    bookmarks: [
        {
            id: 'x56w',
            title: 'Title 1',
            rating: 4,
            url: 'http://www.title1.com',
            description: 'lorem ipsum dolor sit',
            expanded: false
        },
        {
            id: '6ffw',
            title: 'Title 2',
            rating: 5,
            url: 'http://www.title2.com',
            description: 'dolorum tempore deserunt',
            expanded: false
        }
    ],
    adding: false,
    error: null,
    filter: 0,
    currentRating: 0
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
// export default store;
