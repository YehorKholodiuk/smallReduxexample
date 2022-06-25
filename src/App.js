import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";

function App(props) {
    return (
        <div className="App">
            AppVersion:{props.av}
            <hr/>
            Count:{props.myCount}
        </div>
    );
}

const mapStateToProps = state => ({
    myCount: state.count,
    av : state.version

})

export default connect(mapStateToProps)(App);
