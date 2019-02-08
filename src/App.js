import React, { Component } from 'react';
import kendal from './images/kendal.jpg';
import iconPresent from './images/present.png';
import './App.css';
import Activity from './components/Actvity.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    }
  }

  render() {
    return (
      <div className="App">
        <div className='greenHeader' />
        <div className='content'>
          <Activity />
        </div>
        <div className='grayBorder'>

          <img src={kendal} height="105" width="105" />
          <h1>Kendall </h1>
          <h2>ID : 555555</h2>

          <div className='whiteBorder'>
            <div className={this.state.selected === 0 ? 'selected menu' : 'menu select'} onClick={() => this.setState({ selected: 0 })}><a><img src={iconPresent} height="25" width="25" /><b> Activities</b></a></div>
          </div>
          <div className='whiteBorder'>
            <div className='menu'><a className={this.state.selected === 1 ? 'selected' : 'select'} onClick={() => this.setState({ selected: 1 })}>Notification</a></div>
          </div>
          <div className='whiteBorder'>
            <div className='menu'><p className={this.state.selected === 2 ? 'selected' : 'select'} onClick={() => this.setState({ selected: 2 })}>Members</p></div>
          </div>
          <div className='whiteBorder'>
            <div className='menu'><p>Overview</p></div>
          </div>
          <div className='whiteBorder'>
            <div className='menu'><p>Insight</p></div>
          </div>
          <div className='whiteBorder'>

            <div className='menu'><p>Logout</p></div>
          </div>
        </div>
        

      </div>
    );
  }
}

export default App;
