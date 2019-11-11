import { ADD_FAV_ITEM } from "../constants/action-types";
import { SELECTED_ALBUM } from "../constants/action-types";
import { REMOVE_FAV_ITEM } from "../constants/action-types";
import { CLEAR_FAVORITES } from "../constants/action-types";

const initialState = {
    favorite: [],
    selectedAlbum: []
};

function rootReducer(state = initialState, action) {
  if (action.type === SELECTED_ALBUM) {
    return Object.assign({}, state, {
      selectedAlbum: action.payload
    });
  }

  if (action.type === ADD_FAV_ITEM) {
    return Object.assign({}, state, {
      favorite: state.favorite.concat(action.payload)
    });
  }

  if (action.type === REMOVE_FAV_ITEM) {
    return Object.assign({}, state, {
      favorite: [...state.favorite.filter(item => item.id !== action.payload.id)]
    });
  }

  if (action.type === CLEAR_FAVORITES) {
    return Object.assign({}, state, {
      favorite: action.payload
    });
  }

  return state;
};

export default rootReducer;