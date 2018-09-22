import React, { PureComponent } from 'react'
import classnames from "classnames";

import styles from "./input.scss";

export default class Input extends PureComponent {
	state = {
		value: undefined
	}

	componentDidMount() {
		this.setState({ value: this.props.value })
	}

	handleChange = e => this.setState({ value: e.target.value })

	render() {
		return (
			<input
				className={classnames(styles.input, { [styles.input_active]: this.state.value })}
				onChange={this.handleChange}
				value={this.state.value} />
		)
	}
}
