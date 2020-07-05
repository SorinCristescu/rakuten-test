import { combineReducers } from 'redux';
import movieReducer from './movie/reducer';
import listsReducer from './lists/reducer';

export default combineReducers({
  movie: movieReducer,
  lists: listsReducer,
});
