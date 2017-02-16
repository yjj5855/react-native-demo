import { ActionConst } from 'react-native-router-flux'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
    scene: {},
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // focus action is dispatched when a new screen comes into focus
        case ActionConst.FOCUS:
            return state.setIn(['scene'], Immutable.fromJS(action.scene) );

        // ...other actions

        default:
            return state;
    }
}