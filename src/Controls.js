import {connect} from "react-redux";

function Controls(props) {
    return (
        <div>
            <button onClick={props.plus}>Plus</button>
            <button onClick={props.minus}>Minus</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    plus: () => dispatch({type: 'PLUS'}),
    minus: () => dispatch({type: 'MINUS'})
})
export default connect(null, mapDispatchToProps)(Controls)
