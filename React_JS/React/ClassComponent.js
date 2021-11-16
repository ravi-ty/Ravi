import React, {Component} from "react";

class ClassComponent extends Component{
    /*constructor(props){
        super(props);
        this.state = {count : 0};
    }
    render(){
        return(
            <div>
                <p>Count : {this.state.count} times</p>
                <button onClick={()=>this.setState({count: this.state.count + 1})}>
                    CLICK
                </button>
            </div>
        )
    }*/

    /*componentDidMount() {
        console.log("Hello CC");
    }
     
    render() {
        return <h1>HELLO CC</h1>;
    }*/

    componentWillUnmount() {
        console.log("Bye CC");
    }
     
    render() {
        return <h1>BYE CC</h1>;
    }
}

export default ClassComponent;