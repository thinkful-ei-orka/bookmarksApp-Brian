const store = {
    bookmarks: [],
    adding: false,
    error: null,
    filter: 0,
    currentRating: 0,
    titleHold: '',
    descHold: ''
};

const setError = function (error) {
   this.error = error;
};

export default {
    ...store,
    setError
};

