import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeInput = () => this.setState(pre => ({count: pre.count + 1}))

  render() {
    const {count} = this.state

    return (
      <div className="lettersCal-container">
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="phrase-label">
            Enter the phrase
          </label>
          <br />
          <input
            id="input"
            type="text"
            className="input-search"
            placeholder="Enter the phrase"
            onChange={this.onChangeInput}
          />
          <p className="nos-count">No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="calculator-img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
