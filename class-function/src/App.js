import './App.css';
import React, {useState,useEffect} from 'react';
function useWorkDay(){
  const [isWorkDay, setIsWorkDay] = useState(null);

  if(new Date().getDay%6 >0)
    setIsWorkDay(true)
  return isWorkDay
}
function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello world</h1>
      <input type = "button" value = "remove func" onClick = {()=>{
        setFuncShow(false);
      }}></input>
      <input type = "button" value = "remove class" onClick = {()=>{
        setClassShow(false);
      }}></input>
      {funcShow ? <FuncComp initNumber = {2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber = {2}></ClassComp> : null}
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
  var WorkDay = useWorkDay()
  //componentDidMount만 실행되는 useEffect();
  //return 함수는 componetWillUnmount기능을 수행
  useEffect(function(){
    console.log('%cfunc=> useEffect (componentDidMount) '+(++funcId), funcStyle);    
    document.title = number;
    return function(){
      console.log('%cfunc=> useEffect return (componentWilUnmount) '+(++funcId), funcStyle)
    }  
  //effect 내에서 감지할 element를 지정하여 변화가 없으면 effect를 생략할 수도 있다.
  }, []);
  //render의 실행을 감지하여 실행된다.

  //side effect => component와 상관없는 작업이 수행되는것 => 이를 Life Cycle로 구현
  useEffect(function(){
    
    console.log('%cfunc=> useEffect date (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);            
    document.title = WorkDay? "휴일" : "평일";
    return function(){
      console.log('%cfunc=> useEffect date return (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle)
    }  
  } , [_date]);
  //userEffect는 여러개를 동시에 사용 할 수 있다.
  useEffect(function(){
    console.log('%cfunc=> useEffect number (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);    
    document.title = number;
    return function(){
      console.log('%cfunc=> useEffect number return (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle)
    }  
  } , [number]);

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
  componentWillUnmount(){
    console.log('%cclass => componenentWillUnMount',classStyle )
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
