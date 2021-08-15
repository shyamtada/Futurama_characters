/*
 * Characters Reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
    FETCH_CHARACTERS_LIST,
    FETCH_CHARACTERS_LIST_SUCCESS,
    FETCH_CHARACTERS_LIST_ERROR
} from './constants';


// The initial state of the App
export const initialState = {
    loading: false,
    successful: false,
    error: false,
    charactersList: false
};

/* eslint-disable default-case, no-param-reassign */
const CharactersReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case FETCH_CHARACTERS_LIST:
                draft.loading = true;
                break;

            case FETCH_CHARACTERS_LIST_SUCCESS:
                draft.successful = true;
                draft.charactersList = action.payload;
                draft.loading = false;
                break;

            case FETCH_CHARACTERS_LIST_ERROR:
                draft.error = action.error;
                draft.successful = false;
                draft.loading = false;
                break;
        }
    });

export default CharactersReducer;
