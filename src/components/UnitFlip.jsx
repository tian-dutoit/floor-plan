import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UnitFlip extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const unitStyle = {
      fill: this.props.unit.isContainer ? 'rgb(0,0,255)' : 'transparent',
      strokeWidth: 3,
      stroke: 'rgb(0,0,0)'
    }
    const divStyle = {
      width: this.props.orientation
        ? `${this.props.unit.width}px`
        : `${this.props.unit.length}px`,
      height: this.props.orientation
        ? `${this.props.unit.length}px`
        : `${this.props.unit.width}px`,
      position: 'absolute',
      left: this.props.orientation ? `${this.props.unit.coords[0]}px` : ``,
      top: this.props.orientation
        ? `${this.props.unit.coords[1]}px`
        : `${this.props.unit.coords[0]}px`,
      right: !this.props.orientation && `${this.props.unit.coords[1]}px`
    }
    return (
      <div style={divStyle}>
        <svg
          width={
            this.props.orientation
              ? this.props.unit.width
              : this.props.unit.length
          }
          height={
            this.props.orientation
              ? this.props.unit.length
              : this.props.unit.width
          }
        >
          <g>
            <rect
              width={
                this.props.orientation
                  ? this.props.unit.width
                  : this.props.unit.length
              }
              height={
                this.props.orientation
                  ? this.props.unit.length
                  : this.props.unit.width
              }
              style={unitStyle}
            />
            <text
              x="0"
              y="10"
              font-family="Verdana"
              font-size="10"
              fill="white"
            >
              {' '}
              {this.props.unit.id}
              {/* X: {this.props.unit.width} Y: {this.props.unit.length} */}
            </text>
          </g>
        </svg>
      </div>
    )
  }
}
