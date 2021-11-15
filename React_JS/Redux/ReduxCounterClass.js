import styles from './Counter.module.css';
import {Component} from "react";
import {connect} from "react-redux";

class ReduxCounterClass extends Component {

    incrementHandler(){
        this.props.increment();
    }
    decrementHandler(){
        this.props.decrement();
    }

    render(){
        return (
            <main className={styles.counter}>
              <h1>Redux Counter</h1>
              <div className={styles.value}>{this.props.counter}</div>
              <div>
                <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
              </div>
            </main>
          );
    }
}

const mapStateToProps = (state) => {
    return {
        counter : state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment : ()=>{dispatch({type:"increment"})},
        decrement : ()=>{dispatch({type:"decrement"})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReduxCounterClass);