/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from "prop-types";
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingIndicator from '../../components/LoadingIndicator';

//Saga calls
import { fetchCharactersList } from './actions';
import { makeSelectReducerObject, makeSelectCharacterList } from './selectors';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';

const key = "characters";

import './characters.css';


export function Characters({
    charactersReducerObj,
    charactersList,
    onInitialize
}) {

    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    useEffect(() => {
        onInitialize();
    }, [])


    return (
        <div>
            <ToastContainer />
            <h1 className="head-container">
                Futurama Characters
            </h1>
            <div className="characters-container">
                {
                    charactersReducerObj && charactersReducerObj.loading ?
                        <LoadingIndicator />
                        :
                        charactersList && charactersList.map((data, index) => {
                            const { name = {}, age = "", images = {}, gender = "", species = "", occupation =""  } = data || {};
                            const { first = "", middle = "", last = "" } = name;
                            return (
                                
                                    first || middle || last ?
                                    <div className={"characters-container-style"}>
                                        <h2><strong>Name: </strong>{first + ' ' + middle + ' ' + last}</h2>
                                        <p><strong>Age: </strong>{age}</p>
                                        <p><strong>Gender: </strong>{gender}</p>
                                        <p><strong>Species: </strong>{species}</p>
                                        <p><strong>Occupation: </strong>{occupation}</p>
                                        <div>
                                            <img src={images.main} alt={images.main} />
                                        </div>
                                    </div>
                                    :
                                    null
                        )
                })
            }
            </div>
        </div>
    );
}

Characters.propTypes = {
    charactersList: PropTypes.arrayOf(object),
    charactersReducerObj: PropTypes.object,
    onInitialize: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
    charactersList: makeSelectCharacterList(),
    charactersReducerObj: makeSelectReducerObject()
});

export function mapDispatchToProps(dispatch) {
    return {
        onInitialize: () => {
            dispatch(fetchCharactersList());
        }
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(Characters);