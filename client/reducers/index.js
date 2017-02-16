import { combineReducers } from 'redux-immutable'


import routes from './route'
import app from './app'
import boss from './boss'
import user from './user'

const rootReducer = combineReducers({
    app,
    boss,
    user,
    routes
});

export default rootReducer;