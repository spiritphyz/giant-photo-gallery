import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/container.css';

export default class Container extends Component {
  render() {
    const { title, className, children, ...moreProps } = this.props;
    const joinClasses = classNames('Container', className);

    return (
      <div className={ joinClasses } { ...moreProps }>
        <h1>{ title }</h1>
        <hr />
        <div>{ children }</div>
      </div>
    );
  }
}

// Type checking for development builds
// https://facebook.github.io/react/docs/typechecking-with-proptypes.html#proptypes
Container.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};
