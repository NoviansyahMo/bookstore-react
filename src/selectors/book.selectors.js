import {createSelector} from 'reselect';

const selectBook = (state) => state.book;

const selectIsBookFetching = createSelector(
    [selectBook],
    (book) => book.isLoading,
);

const selectBookList = createSelector(
    [selectBook],
    (book) => book.books,
);

export {selectIsBookFetching, selectBookList};
