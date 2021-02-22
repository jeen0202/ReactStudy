import './App.css';
import React from 'react';
function App() {
  return (
    <div className="container">
      <h1>Hello world</h1>
      <FuncComp initNumber = {2}></FuncComp>
      <ClassComp initNumber = {2}></ClassComp>
    </div>
  );
}
function FuncComp(props){
  return (
    <div className="container">
        <h2>function style component</h2>
        <p>Number : {props.initNumber}</p>
    </div>
  );
}
class ClassComp extends React.Component{
  state ={
    number:this.props.initNumber
  }
  render(){
    return (
      <div className="container">
        <h2>Class style component</h2>
        <p>Number : {this.props.initNumber}</p>
    </div>
    )
  }
}
export default App;
