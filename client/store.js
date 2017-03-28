import { createStore, compose, applyMiddleware } from 'redux'

import promiseMiddleware from 'redux-promise';

import rootReducer from './reducers/index'

import Immutable from 'immutable'
import app from './data/app'
import boss from './data/boss'
import user from './data/user'

import axios from 'axios';
import './common/axiosConfig'
import axiosMiddleware from 'redux-axios-middleware';
import * as axiosMiddlewareOptions from './common/axiosMiddlewareOptions'


//create an object on the default data
const defaultState = Immutable.fromJS({
    app,
    boss,
    user,
});

const enhancers = compose(
    applyMiddleware(
        promiseMiddleware,
        axiosMiddleware(axios, {...axiosMiddlewareOptions}), //axios 中间件
    )
);
export const store = createStore(
    rootReducer,
    defaultState,
    enhancers
);