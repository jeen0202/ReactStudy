import './App.css';
import React, {useState,useEffect} from 'react';
function App() {
  return (
    <div className="container">
      <h1>Hello world</h1>
      <FuncComp initNumber = {2}></FuncComp>
      <ClassComp initNumber = {2}></ClassComp>
    </div>
  );
}
var funcStyle = 'color:blue';
var funcId = 0;
function FuncComp(props){
  //hook을 사용한 state 생성 => useState(초기값)
  // 1번째 인자 : state 값,  2번째 인자 : setState 함수
  var [number,setNumber] = useState(props.initNumber);
  var [_date,setDate] = useState((new Date()).toString());

  //render의 실행을 감지하여 실행된다.
  //side effect => component와 상관없는 작업이 수행되는것 => 이를 Life Cycle로 구현
  //
  useEffect(function(){
    console.log('%cfunc=> useEffect (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);    
    document.title =number + ' : ' + _date;
    //useEffect의 return 함수는 Life Cycle의 cleanup으로 사용할 수 있다.
    return function(){
      console.log('%cfunc=> useEffect return (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle)
    }
  });
  //userEffect는 여러개를 동시에 사용 할 수 있다.
  console.log('%cfunc=> render ' +(++funcId), funcStyle);

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
var classStyle = 'color:red';
class ClassComp extends React.Component{
  state ={
    number:this.props.initNumber,
    date : (new Date()).toString()
  }
  componentWillMount(){
    console.log('%cclass => componenentWillMount',classStyle )
  }  
  componentDidMount(){
    console.log('%cclass => componenentDidMount',classStyle )
  }
  render(){
    console.log("%cclass => render",classStyle);    
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
