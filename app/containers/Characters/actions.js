/*
 * Characters Actions
 *
 */

import { toast } from "react-toastify";
import {
    FETCH_CHARACTERS_LIST,
    FETCH_CHARACTERS_LIST_SUCCESS,
    FETCH_CHARACTERS_LIST_ERROR,
} from './constants';


/**
 * Fetches the character list, this action starts the request saga
 *
 * @return {object} An action object with a type of FETCH_CHARACTERS_LIST
 */

export function fetchCharactersList() {
    return {
        type: FETCH_CHARACTERS_LIST,
    };
}

/**
 * Dispatched character list is loaded by the request saga
 *
 * An action object with a type of FETCH_CHARACTERS_LIST_SUCCESS passing the payload
 */

export function fetchCharactersListSuccess(payload) {
    console.log("Fetch Character list success called", payload);
    return {
        type: FETCH_CHARACTERS_LIST_SUCCESS,
        payload
    };
}



/**
 * Dispatched when get request fails
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of FETCH_CHARACTERS_LIST_ERROR passing the error
 */
export function fetchCharactersListError(error) {
    toast.error("Error occured while fetching characters list", { autoClose: 4000 });
    console.log("Fetch Characters list error called", error);
    return {
        type: FETCH_CHARACTERS_LIST_ERROR,
        error,
    };
}