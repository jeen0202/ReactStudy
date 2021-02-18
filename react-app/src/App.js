import './App.css';
import React, {Component} from 'react';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";

class App extends Component {
// 초기화
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      welcome:{title:"Welcome",desc:"Hello. React!!"},
      subject:{title:"WEB", sub:"World Wide Web"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"},
      ],
      content:{title:"HTML", desc: "HTML is HyperText Markup Language"}
    }
  }
  render(){
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
    <div className="App">      
      {/* <Subject 
        title ={this.state.subject.title}
        sub={this.state.subject.sub}>        
      </Subject>   */}
      <header>
          <h1><a href = "/" onClick={(e)=>{
            console.log(e);
            e.preventDefault();
            //this.state.mode ='welcome';
           // bind, this, arrow function에 대한 이해가 필요하다.
            this.setState({
              mode:'welcome'
            })           
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
      <TOC data = {this.state.contents}></TOC>
      <Content title = {_title} desc = {_desc}></Content>
    </div>
    );
  }
}
export default App;
