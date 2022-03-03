import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {num: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  showButton = () => {
    const randomNum = this.randomNumber()
    this.setState(prevState => ({num: prevState.num + randomNum}))
  }

  render() {
    const {num} = this.state
    const Even = num % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="main">
        <div className="card">
          <h1 className="heading1">{`Count ${num}`}</h1>
          <p className="heading2">{`Count is ${Even}`} </p>
          <button className="button" type="button" onClick={this.showButton}>
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
