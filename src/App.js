import React, { Component} from 'react';
import Validation from './components/Validation'
import './App.css';
import Char from './components/Char'
class  App extends Component{
  state ={ 
    input: ''
  
  }

  userInputChange = ( event ) => {
    this.setState({input : event.target.value})
  }
  
  charDelete = (index) => {
   const text = this.state.input.split('');
   text.splice(index, 1);
   const updatedText = text.join('');
   this.setState({ input: updatedText});
  }
   
  render(){
    const charList = this.state.input.split('').map((ch, index)  => {
      return <Char characters= {ch} key= {index} whenClicked={() => this.charDelete(index)}/>;
    });
    return (

      <div className="App">
        <h1> This is really working !!</h1>
       <input type="text" 
       onChange= { this.userInputChange} 
       value={ this.state.input}/> 
       <p> {this.state.input} </p>
       <Validation inputLength= {this.state.input.length}/> 
       {charList }
      </div>
    );
  
  }
}

export default App;
