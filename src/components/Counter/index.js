import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onReset = () => {
    this.setState({count: 0})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button type="button" className="button" onClick={this.onDecrement}>
            Decrease
          </button>
          <button
            type="button"
            className={`reset button`}
            onClick={this.onReset}
          >
            Reset
          </button>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increase
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
