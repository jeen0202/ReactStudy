import './App.css';
import React, {Component} from 'react';
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Control from "./components/Control";

class App extends Component {
// 초기화
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',      
      selected_content_id: 0,
      welcome:{title:"Welcome",desc:"Hello. React!!"},
      subject:{title:"WEB", sub:"World Wide Web"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"},
      ]      
    }
  }
  render(){
    console.log('App render');
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){     
      this.state.contents.forEach(element => {        
        if(element.id === this.state.selected_content_id){          
          _title = element.title;
          _desc = element.desc;
        }
        _article = <ReadContent title = {_title} desc = {_desc}></ReadContent>
      });
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onCreate={(_title,_desc)=>{
        this.max_content_id += 1;
        var _contents = this.state.contents.concat(
          {id:this.max_content_id,title:_title,desc:_desc}
        )
        //성능 개선이 어려운 버전
        // concat => 복제본을 만들어 수정, push => 원본을 수정
        // Array.from() method로 원본을 복제하여 수정할 수 있다.
        // var _content = Array.from(this.state.contents)
        // _content.push({
        //   id:this.max_content_id,
        //   title:_title,
        //   desc:_desc});
        this.setState({
          contents:_contents
        })
      }}></CreateContent>
    }
    return (
    <div className="App">      
      <Subject 
        title ={this.state.subject.title}
        sub={this.state.subject.sub}
        onChangePage={()=>{
          this.setState({mode:'welcome'});
        }}
        >        
      </Subject>  
      <TOC
        data = {this.state.contents}
        onChangeContent={(id)=>{        
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
            })
        }}
      ></TOC>
      <Control onChangeMode ={(_mode)=>{        
        this.setState({mode:_mode})
        }
      }></Control>
      {_article}      
    </div>
    );
  }
}
export default App;
