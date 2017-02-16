import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from './reducers/index'

import Immutable from 'immutable'
import app from './data/app'
import boss from './data/boss'
import user from './data/user'

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import './common/axiosConfig'
import * as axiosMiddlewareOptions from './common/axiosMiddlewareOptions'


//create an object on the default data
const defaultState = Immutable.fromJS({
    app,
    boss,
    user,
});

const enhancers = compose(
    applyMiddleware(
        axiosMiddleware(axios, {...axiosMiddlewareOptions}), //axios 中间件
    )
);
export const store = createStore(
    rootReducer,
    defaultState,
    enhancers
);