import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumer: 0}

  onGenrateRandomNumber = () => {
    const genrateRandomNumber = () => {
      return Math.ceil(Math.random() * 100)
    }
    this.setState({
      randomNumer: genrateRandomNumber(),
    })
  }

  render() {
    const {randomNumer} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the <br /> range of 0 to 100
          </p>
          <div className="button-container">
            <button
              className="button"
              onClick={this.onGenrateRandomNumber}
              type="button"
            >
              Generate
            </button>
          </div>
          <h1 className="random-number-text">{randomNumer}</h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
