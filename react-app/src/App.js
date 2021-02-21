import './App.css';
import React, {Component} from 'react';

import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/Control";

class App extends Component {
// 초기화
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',      
      selected_content_id: 1,
      welcome:{title:"Welcome",desc:"Hello. React & AJAX!!"},
      subject:{title:"WEB", sub:"World Wide Web!"},
      list:[]
      // contents:[
      //   {id:1, title:"HTML", desc:"HTML is for information"},
      //   {id:2, title:"CSS", desc:"CSS is for design"},
      //   {id:3, title:"JavaScript", desc:"JavaScript is for interactive"},
      // ]            
    }
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
  getReadContent(){
    var data = {};
    data.title = this.state.article.title;
    data.desc = this.state.article.desc;    
    // this.state.contents.forEach(element => {        
    //   if(element.id === this.state.selected_content_id){
    //     data=element         
    //   }      
    // });
    return data; 
  }
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title = {_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === 'read'){     
      var _content =this.getReadContent();
      _article = <ReadContent title = {_content.title} desc = {_content.desc}></ReadContent>
     // _article = <ReadContent title = {this.state.article.title} desc = {this.state.article.desc}></ReadContent>
    
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onCreate={(_title,_desc)=>{
        this.max_content_id += 1;
        var _contents = Array.from(this.state.contents)
        _contents.push({
          id:this.max_content_id,
          title:_title,
          desc:_desc});
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        })
      }}></CreateContent>

    }else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data = {_content} onUpdate={(_id,_title,_desc)=>{        
        var _contents = Array.from(this.state.contents);
        for (var i = 0; i<_contents.length;i++){
          if(_contents[i].id === _id){
            _contents[i] = {id:_id,title:_title,desc:_desc}
            }
        } 
        this.setState({
          mode:'read',
          contents:_contents          
        })
      }}></UpdateContent>
    }else if(this.state.mode === 'delete'){
      // var _contents = Array.from(this.state.contents);
      // if(window.confirm('really?')){
      //   for(var i = 0; i<_contents.length;i++){
      //     if(_contents[i].id === this.state.selected_content_id){
      //       _contents.splice(i,1);
      //       this.state.selected_content_id--;
      //       break;
      //     }
      //   }
      // }
      // this.setState({
      //   mode:'welcome',
      //   contents:_contents
      // });
      // alert('deleted!');
    }
    return _article;  
  }

  render(){
    console.log('App render');
  
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
        list ={this.state.list} onChangeContent={(id)=>{  
          fetch(id+'.json')
            .then((result)=>{
              return result.json();
            })
            .then((json)=>{
              this.setState({
              mode:'read',
              article:{
                title:json.title,
                desc:json.desc
              }
              ,
              selected_content_id:Number(id)
              })
            })
          }
        }        
      ></TOC>
      <Control onChangeMode ={(_mode)=>{
        if(_mode === 'delete'){
          var _contents = Array.from(this.state.contents);
          if(window.confirm('really?')){
            for(var i = 0; i<_contents.length;i++){
              if(_contents[i].id === this.state.selected_content_id){
                _contents.splice(i,1);
                this.state.selected_content_id--;
                break;
                }
              }
            }
            this.setState({
            mode:'welcome',
            contents:_contents
          });
          alert('deleted!');
          }        
        this.setState({mode:_mode})
        }
      }></Control>
      {this.getContent()}      
    </div>
    );
  }
}
export default App;
