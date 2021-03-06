'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Copyright (c) 2013-present Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Circle.art
 * @typechecks
 *
 * Example usage:
 * <Circle
 *   radius={10}
 *   stroke="green"
 *   strokeWidth={3}
 *   fill="blue"
 * />
 *
 */

var React = require('react');
var ReactART = require('./ReactART');

var PropTypes = React.PropTypes;

var Path = ReactART.Path;
var Shape = ReactART.Shape;

/**
 * Circle is a React component for drawing circles. Like other ReactART
 * components, it must be used in a <Surface>.
 */
var Circle = React.createClass({
  displayName: 'Circle',

  propTypes: {
    radius: PropTypes.number.isRequired
  },

  render: function render() {
    var radius = this.props.radius;

    var path = Path().moveTo(0, -radius).arc(0, radius * 2, radius).arc(0, radius * -2, radius).close();
    return React.createElement(Shape, _extends({}, this.props, { d: path }));
  }
});

module.exports = Circle;