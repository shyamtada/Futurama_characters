/**
 * Gets the repositories of the user from Github
 */
 import { put, all, call, takeLatest } from "redux-saga/effects";
 import { FETCH_CHARACTERS_LIST } from './constants';
 import {
     fetchCharactersListSuccess,
     fetchCharactersListError,
 } from './actions';
 
 import request from '../../utils/request';
 import { urls } from '../../config/urls';
 
 //Characters API call
 function charactersListCall() {
         return request('GET', urls.FETCH_CHARACTERS_URL);
     }
 
 export function* charactersListWorker() {
     try {
         let response = yield call(charactersListCall);
         console.log("characters list saga response", response);
         yield put(fetchCharactersListSuccess(response && response.data));
     } catch (err) {
         console.log("character list err", err);
         yield put(fetchCharactersListError(err && err.response && err.response.data));
     }
 }
 
 /**
  * Root saga manages watcher lifecycle
  */
 export default function* Characters() {
     // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
     // By using `takeLatest` only the result of the latest API call is applied.
     // It returns task descriptor (just like fork) so we can continue execution
     // It will be cancelled automatically on component unmount
     yield all([
         takeLatest(FETCH_CHARACTERS_LIST, charactersListWorker),
     ]);
 }