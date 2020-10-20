import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'


class App extends Component {
  state =  {
     username : 'Rajesh'
  }
  changeHandler = (event) => {
    this.setState({
      username :event.target.value
    })
  }
  render () {
    return (
      <div className="App">
         <UserInput change={this.changeHandler} default={this.state.username}/>
         <UserOutput name='Kadiri' value={this.state.username}/>
         <UserOutput name={this.state.username} value='First Code' />
      </div>
    );
  }  
}

export default App;
