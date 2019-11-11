import { ADD_FAV_ITEM } from "../constants/action-types";
import { SELECTED_ALBUM } from "../constants/action-types";
import { REMOVE_FAV_ITEM } from "../constants/action-types";
import { CLEAR_FAVORITES } from "../constants/action-types";

export function addFavItem(payload) {
    return { type: ADD_FAV_ITEM, payload };
};

export function removeFavItem(payload) {
    return { type: REMOVE_FAV_ITEM, payload };
};

export function clearFavorites(payload) {
    return { type: CLEAR_FAVORITES, payload };
};

export function selectAlbum(payload) {
    return { type: SELECTED_ALBUM, payload };
};