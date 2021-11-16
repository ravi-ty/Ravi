import {Component} from "react";

const newData = {
    data: 'Data from HOC...',
 }
 
 const MyHOC = (ComposedComponent) =>
 class extends Component {
    componentDidMount() {
       this.setState({
          data: newData.data
       });
    }
    render() {
       return <ComposedComponent {...this.props} {...this.state} />;
    }
 }
 class MyComponent extends Component {
    render() {
       return (
          <div>
             <h1 style={{color: "white"}}>{this.props.data}</h1>
          </div>
       )
    }
 }
 
 export default MyHOC(MyComponent);