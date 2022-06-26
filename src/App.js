import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import Controls from "./Controls";

function App(props) {
    return (
        <div className="App">
            AppVersion:{props.av}
            <hr/>
            Count:{props.myCount}

            <Controls/>
        </div>
    );
}

const mapStateToProps = state => ({
    myCount: state.count,
    av : state.version

})



export default connect(mapStateToProps)(App);
