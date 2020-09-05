import {combineReducers} from 'redux';
import bookReducer from './books/book.reducer';

const rootReducer = combineReducers({
  book: bookReducer,
});

export default rootReducer;
