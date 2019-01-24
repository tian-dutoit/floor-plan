import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Unit from './Unit'

export class HomepageFlip extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props) {
    super(props)

    this.state = {
      orientation: true,
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

        // { id: 0, width: 200, length: 100, coords: [0, 0], isContainer: true },
        // {
        //   id: 1,
        //   width: 100,
        //   length: 250,
        //   coords: [200, 120],
        //   isContainer: true
        // },
        // {
        //   id: 2,
        //   width: 250,
        //   length: 50,
        //   coords: [300, 600],
        //   isContainer: true
        // },
        // {
        //   id: 20,
        //   width: 100,
        //   length: 100,
        //   coords: [300, 0],
        //   isContainer: false
        // },
        // { id: 3, width: 75, length: 10, coords: [550, 200], isContainer: true },
        // { id: 4, width: 20, length: 10, coords: [570, 0], isContainer: true },
        // { id: 5, width: 20, length: 10, coords: [590, 75], isContainer: true },
        // { id: 6, width: 20, length: 10, coords: [610, 30], isContainer: true },
        // { id: 7, width: 20, length: 10, coords: [630, 500], isContainer: true }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      orientation: !this.state.orientation
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className="flip-button">
          Flip
        </button>
        <div className="homepage-container">
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
)(HomepageFlip)
