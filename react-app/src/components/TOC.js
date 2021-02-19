import React, {Component} from 'react';

class TOC extends Component{
  //parameter를 받아 boolean값을 반환하여 render 함수의 실행을 제어
  //push를 사용하면 비교할 수 없어 진다.
  shouldComponentUpdate(newProps, newState){    
    console.log('==> TOC render ShuodComponentUpdate')
    if(newProps.data===this.props.data){
      return false
    }
    return true;
  }  
  render(){
      console.log('TOC render');     
      var lists = [];
      var data = this.props.data;       
     data.forEach(data => {
      lists.push(<li key={data.id}><a href={"/content/"+data.id} data-id={data.id} onClick={(e)=>{        
        e.preventDefault();        
        this.props.onChangeContent(e.target.dataset.id);
      }
      }>{data.title}</a></li>);
     });        
           
      return(
        <ul>
          {lists}
        </ul>        
      );
    }
  }
export default TOC;