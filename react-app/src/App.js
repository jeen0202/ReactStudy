import './App.css';
import React, {Component} from 'react';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}
class TOC extends Component{
  render(){
    return(
      <ul>            
        <li><a href ="1.html">HTML</a></li>
        <li><a href ="2.html">CSS</a></li>
        <li><a href ="2.html">JavaScrpit</a></li>
      </ul>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
      <h2>HTML</h2>
      HTML is HyperText Markup Language.
  </article> 
    );
  }
}
class App extends Component {
  render(){
    return (
    <div className="App">
      <Subject></Subject>
      <TOC></TOC>
      <Content></Content>
    </div>
    );
  }
}
export default App;
