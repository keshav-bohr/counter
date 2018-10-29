import App from "../App";
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}


const mapDispatchToProps = dispatch => {
    return {
        increment: () => {
            dispatch({
                type: 'INCREMENT'
            })
        },

        decrement: () => {
            dispatch({
                type: 'DECREMENT'
            })
        },

        reset: () => {
            dispatch({
                type: 'RESET'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)