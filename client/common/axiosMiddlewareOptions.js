import { getActionTypes } from 'redux-axios-middleware/lib/getActionTypes'

export const returnRejectedPromiseOnError = true;

export const onComplete = ( { action, next, getState, dispatch }, actionOptions) => {
    const previousAction = action.meta.previousAction;
    const nextAction = {
        type: getActionTypes(previousAction, actionOptions)[0]+'_COMPLETE',
        meta: {
            previousAction: previousAction
        }
    };
    next(nextAction);
    return nextAction;
};