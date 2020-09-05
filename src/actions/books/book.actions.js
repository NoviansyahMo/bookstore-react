import API from '../../utils/axios.utils';
import {requestApiStart, requestApiFailure} from '../request.actions';
import BookActionTypes from './book.types';

const fetchBooks = () => {
  return (dispatch) => {
    dispatch(requestApiStart());
    API.get('/')
        .then((response) => dispatch(fetchBookSuccess(response.data)))
        .catch((error) => dispatch(requestApiFailure(error)));
  };
};

const insertBook = (book) => {
  return (dispatch) => {
    dispatch(requestApiStart());
    API.post('/', book)
        .then(() => dispatch(postBookSuccess(book)))
        .then(() => dispatch(fetchBooks()))
        .catch((error) => dispatch(requestApiFailure(error)));
  };
};

const removeBook = (id) => {
  return (dispatch) => {
    dispatch(requestApiStart());
    API.delete(`/${id}`)
        .then((response) => dispatch(removeBookSuccess(response)))
        .then(() => dispatch(fetchBooks()))
        .catch((error) => dispatch(requestApiFailure(error)));
  };
};

const fetchBookSuccess = (books) => ({
  type: BookActionTypes.FETCH_BOOK_SUCCESS,
  payload: books,
});

const postBookSuccess = (book) => ({
  type: BookActionTypes.POST_BOOK_SUCCESS,
  payload: book,
});

const removeBookSuccess = (id) => ({
  type: BookActionTypes.REMOVE_BOOK_SUCCESS,
  payload: id,
});

export {fetchBooks, insertBook, removeBook};
