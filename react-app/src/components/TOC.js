import React, {Component} from 'react';

class TOC extends Component{
    render(){     
      var lists = [];
      var data = this.props.data;       
     data.forEach(data => {
      lists.push(<li key={data.id}><a href={"/content/"+data.id}>{data.title}</a></li>);
     });        
           
      return(
        <ul>
          {lists}
        </ul>        
      );
    }
  }
export default TOC;