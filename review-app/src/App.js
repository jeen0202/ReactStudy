import React, {useState} from 'react';
import TestComponent from './components/test';
import './App.css';
function useWorkday(){
  const [isWorkday, setIsworkday] = useState(null);

  if(new Date().getDay%6 >0)
    setIsworkday(true)
  return isWorkday
}
function App() {
  let workday = useWorkday()?"근무일":"휴일";
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className='body'>
        <h1>Welcome to React</h1>
        <TestComponent name="Function Componet Props" buttonstate='false'></TestComponent>
        <TestComponent name="Function Props Change Test" buttonstate='true'></TestComponent>
        {/* React에서의 변수 반영 */}
        <p>오늘은 {workday}입니다</p> 
      </div>
    </div>
  );
}

export default App;
