import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelrate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  break = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="main-heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-img"
          />
          <h1 className="speed-heading">
            Speed is {speed}mph
          </h1>
          <p className="speed-discription">
            Min Limit is 0mph, Max Limit is 200mph
          </p>
          <div className="btn-container">
            <button
              className="accelerate btn"
              type="button"
              onClick={this.accelrate}
            >
              Accelerate
            </button>
            <button
              className="apply-brake btn"
              type="button"
              onClick={this.break}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
