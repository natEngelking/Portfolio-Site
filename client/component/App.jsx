import React from 'react';
import '../dist/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: '',
      click: false,
    }
  }

  // handleChange (e) {
  //   e.preventDefault();
  //   this.setState({searchInput: e.target.value})
  // }

  handleClick (e) {
    e.preventDefault()
    this.setState({
      clicked: 'You clicked?',
      click: true,
    })
  }


  render () {
    if (this.state.click === true) {
      console.log(this.state.clicked)
      return(
        <div>
          <div className='title'>Creation Station</div>
          <div className='click'>{this.state.clicked}</div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='title'>Creation Station</div>
          <input className='button' type='submit' value='click me' onClick={this.handleClick.bind(this)}/>
        </div>
      )
    }
    }
}

export default App;