import React, {Component} from 'react';

class TOC extends Component{
  state ={
    list:[]
  }
  componentDidMount(){
    fetch('list.json')
    .then(function(res){
      return res.json();
    })
    .then((json)=>{
      this.setState({list:json})
    })
  }
  // shouldComponentUpdate(newProps, newState){    
  //   console.log('==> TOC render ShuodComponentUpdate')
  //   if(newProps.data===this.props.data){
  //     return false
  //   }
  //   return true;
  // }  
  render(){
      console.log('TOC render');     
      var lists = [];
      var data = this.state.list;          
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