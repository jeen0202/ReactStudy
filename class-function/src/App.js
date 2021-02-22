import './App.css';
import React, {useState} from 'react';
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
  //hook을 사용한 state 생성 => useState(초기값)
  // 1번째 인자 : state 값,  2번째 인자 : setState 함수
  // var numberState = useState(props.initNumber);  
  // var number = numberState[0];
  // var setNumber = numberState[1];
  // var dateState = useState((new Date()).toString());
  // var _date = dateState[0];
  // var setDate = dateState[1];

  //코드 간소화
  var [number,setNumber] = useState(props.initNumber);
  var [_date,setDate] = useState((new Date()).toString());
  
  return (
    <div className="container">
        <h2>function style component</h2>
        <p>Number : {number}</p>
        <p>Date : {_date}</p>
        <input type="button" value = "random" onClick={
          ()=>{
            //function style에서 state의 값을 변경하는 방법
            //state객체의 2번째 인자의 매개변수로 변경하고자 하는 값 입력            
            setNumber(Math.random())
          }
        }></input>
        <input type="button" value = "date" onClick={
          ()=>{          
            setDate((new Date()).toString())
          }
        }></input>        
    </div>
  );
}
class ClassComp extends React.Component{
  state ={
    number:this.props.initNumber,
    date : (new Date()).toString()
  }
  render(){
    console.log("ClassComp Render")
    return (
      <div className="container">
        <h2>Class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value = "random" onClick={
          ()=>{
            this.setState({number:Math.random()})
          }
        }></input>
        <input type='button' value = "date" onClick={
          ()=>{
            this.setState({date:(new Date()).toString()})
          }
        }></input>
    </div>
    )
  }
}
export default App;
