import RequestActionTypes from '../../actions/request.types';
import BookActionTypes from '../../actions/books/book.types';

const INITIAL_STATE = {
  isLoading: false,
  books: [],
  book: {},
  id: null,
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RequestActionTypes.REQUEST_API_START:
      return {
        ...state,
        isLoading: true,
      };
    case BookActionTypes.FETCH_BOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        books: action.payload,
      };
    case BookActionTypes.POST_BOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        book: action.payload,
      };
    case BookActionTypes.REMOVE_BOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: action.payload,
      };
    case RequestActionTypes.REQUEST_API_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default: return state;
  };
};

export default bookReducer;
