import React, { PureComponent } from "react";
import classnames from "classnames";

import styles from "./button.scss";

export default class Button extends PureComponent {
  state = {
    isActive: false
  };

  handleClick = async () =>
    await this.setState({ isActive: !this.state.isActive });

  render() {
    return (
      <button
        onClick={this.handleClick}
        className={classnames(styles.button, {
          [styles.button_active]: this.state.isActive
        })}
      >
        {this.props.children}
      </button>
    );
  }
}
