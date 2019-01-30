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
        { id: 115, width: 40, length: 40, coords: [660, 0], isContainer: true },
        { id: 116, width: 40, length: 40, coords: [700, 0], isContainer: true },
        { id: 117, width: 40, length: 40, coords: [740, 0], isContainer: true },
        { id: 118, width: 40, length: 40, coords: [780, 0], isContainer: true },
        { id: 119, width: 20, length: 40, coords: [820, 0], isContainer: true },
        { id: 120, width: 20, length: 40, coords: [840, 0], isContainer: true },
        { id: 121, width: 20, length: 40, coords: [860, 0], isContainer: true },
        { id: 122, width: 20, length: 40, coords: [880, 0], isContainer: true },
        { id: 123, width: 20, length: 40, coords: [900, 0], isContainer: true },
        { id: 124, width: 20, length: 40, coords: [920, 0], isContainer: true },
        { id: 125, width: 20, length: 40, coords: [940, 0], isContainer: true },
        { id: 126, width: 20, length: 40, coords: [960, 0], isContainer: true },
        { id: 127, width: 20, length: 40, coords: [980, 0], isContainer: true },
        {
          id: 128,
          width: 140,
          length: 160,
          coords: [1000, 0],
          isContainer: true
        },

        {
          id: 1100,
          width: 40,
          length: 40,
          coords: [0, 250],
          isContainer: true
        },
        {
          id: 1101,
          width: 40,
          length: 40,
          coords: [40, 250],
          isContainer: true
        },
        {
          id: 1102,
          width: 40,
          length: 40,
          coords: [80, 250],
          isContainer: true
        },
        {
          id: 1103,
          width: 40,
          length: 40,
          coords: [120, 250],
          isContainer: true
        },
        {
          id: 1104,
          width: 40,
          length: 40,
          coords: [160, 250],
          isContainer: true
        },
        {
          id: 1105,
          width: 40,
          length: 40,
          coords: [200, 250],
          isContainer: true
        },
        {
          id: 1106,
          width: 40,
          length: 40,
          coords: [240, 250],
          isContainer: true
        },
        {
          id: 1107,
          width: 40,
          length: 40,
          coords: [280, 250],
          isContainer: true
        },
        {
          id: 1108,
          width: 40,
          length: 40,
          coords: [320, 250],
          isContainer: true
        },
        {
          id: 1109,
          width: 40,
          length: 40,
          coords: [360, 250],
          isContainer: true
        },
        {
          id: 1110,
          width: 20,
          length: 40,
          coords: [400, 250],
          isContainer: true
        },
        {
          id: 1111,
          width: 120,
          length: 40,
          coords: [420, 250],
          isContainer: false
        },
        {
          id: 1112,
          width: 40,
          length: 40,
          coords: [540, 250],
          isContainer: true
        },
        {
          id: 1113,
          width: 40,
          length: 40,
          coords: [580, 250],
          isContainer: true
        },
        {
          id: 1114,
          width: 40,
          length: 40,
          coords: [620, 250],
          isContainer: true
        },
        {
          id: 1115,
          width: 40,
          length: 40,
          coords: [660, 250],
          isContainer: true
        },
        {
          id: 1116,
          width: 40,
          length: 40,
          coords: [700, 250],
          isContainer: true
        },
        {
          id: 1117,
          width: 40,
          length: 40,
          coords: [740, 250],
          isContainer: true
        },
        {
          id: 1118,
          width: 40,
          length: 40,
          coords: [780, 250],
          isContainer: true
        },
        {
          id: 1119,
          width: 20,
          length: 40,
          coords: [820, 250],
          isContainer: true
        },
        {
          id: 1120,
          width: 20,
          length: 40,
          coords: [840, 250],
          isContainer: true
        },
        {
          id: 1121,
          width: 20,
          length: 40,
          coords: [860, 250],
          isContainer: true
        },
        {
          id: 1122,
          width: 20,
          length: 40,
          coords: [880, 250],
          isContainer: true
        },
        {
          id: 1123,
          width: 20,
          length: 40,
          coords: [900, 250],
          isContainer: true
        },
        {
          id: 1124,
          width: 20,
          length: 40,
          coords: [920, 250],
          isContainer: true
        },
        {
          id: 1125,
          width: 20,
          length: 40,
          coords: [940, 250],
          isContainer: true
        },
        {
          id: 1126,
          width: 20,
          length: 40,
          coords: [960, 250],
          isContainer: true
        },
        {
          id: 1127,
          width: 20,
          length: 40,
          coords: [980, 250],
          isContainer: true
        },
        {
          id: 1128,
          width: 140,
          length: 160,
          coords: [1000, 250],
          isContainer: true
        }
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
