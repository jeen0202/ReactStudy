import React,{useEffect, useState} from 'react';
const Test = (props)=>{
    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        if (props.buttonstate ==='true') {
            console.log(props.buttonstate);
            let btn = document.getElementsByTagName('button');
            btn[0].disabled = true;
        }
    })
    return (
        <div>
            <h1>{props.name} Test입니다.</h1>
            <p>당신은 버튼을 {count}번 클릭했습니다.</p>
            <button onClick={()=> setCount(count + 1)}>
                Click Here!
            </button>
        </div>
    )
}
export default Test;
