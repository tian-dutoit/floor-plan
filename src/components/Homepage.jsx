import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Unit from './Unit'

export class Homepage extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props) {
    super(props)

    this.state = {
      counter: 1,
      orientation: 0,
      translation: 0,
      units: [
        { id: 100, width: 40, length: 40, coords: [0, 0], isContainer: true },
        { id: 101, width: 40, length: 40, coords: [40, 0], isContainer: true },
        { id: 102, width: 40, length: 40, coords: [80, 0], isContainer: true },
        { id: 103, width: 40, length: 40, coords: [120, 0], isContainer: true },
        { id: 104, width: 40, length: 40, coords: [160, 0], isContainer: true },
        { id: 105, width: 40, length: 40, coords: [200, 0], isContainer: true },
        { id: 106, width: 40, length: 40, coords: [240, 0], isContainer: true },
        { id: 107, width: 40, length: 40, coords: [280, 0], isContainer: true },
        { id: 108, width: 40, length: 40, coords: [320, 0], isContainer: true },
        { id: 109, width: 40, length: 40, coords: [360, 0], isContainer: true },
        { id: 110, width: 20, length: 40, coords: [400, 0], isContainer: true },
        {
          id: 111,
          width: 120,
          length: 40,
          coords: [420, 0],
          isContainer: false
        },
        { id: 112, width: 40, length: 40, coords: [540, 0], isContainer: true },
        { id: 113, width: 40, length: 40, coords: [580, 0], isContainer: true },
        { id: 114, width: 40, length: 40, coords: [620, 0], isContainer: true },
        { id: 115, width: 40, length: 40, coords: [660, 0], isContainer: true }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const rotationOptions = [0, 90, 180, 270]
    // const translationOptions = [0, 125, 0, -125]
    const translationOptions = [0, 20, 0, -20]
    this.setState({
      orientation: rotationOptions[this.state.counter],
      translation: translationOptions[this.state.counter],
      counter: this.state.counter <= 2 ? this.state.counter + 1 : 0
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className="flip-button">
          Rotate
        </button>
        <div
          className="homepage-container"
          style={{
            transform: `rotate(${this.state.orientation}deg) translate(${
              this.state.translation
            }%, 0%)`
          }}
        >
          {this.state.units.map(unit => {
            return <Unit unit={unit} orientation={this.state.orientation} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)
