/**
 * The global state selectors
 */

 import { createSelector } from 'reselect';
 import { initialState } from './reducer';
 
 const selectCharactersList = state => state.characters || initialState;
 
 const makeSelectReducerObject = () =>
     createSelector(
        selectCharactersList,
         charactersState => charactersState
     );
 
 const makeSelectCharacterList = () =>
     createSelector(
        selectCharactersList,
        charactersState => charactersState.charactersList
     );
 
 export {
    makeSelectReducerObject,
    makeSelectCharacterList
 };