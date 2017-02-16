import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actionCreators from './actions/actionCreator'

function mapStateToProps(state) {
    return {
        $$app: state.get('app'),
        $$boss: state.get('boss'),
        $$user: state.get('user'),
    }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default function (Component) {
    return connect(mapStateToProps, mapDispachToProps)(Component);
};