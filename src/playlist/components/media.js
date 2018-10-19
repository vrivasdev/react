import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
	state = { //ES7: State definition
		author: 'Carlos Perez'
	}
	handleClick = (event) => { // ES7: arrows inherit the parent context
		this.setState({
			author: 'Ricardo Sanchez'
		})
	}
	render() {
		return (
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img className="Media-image"
						src={this.props.cover}
						alt=""
						width={260}
						height ={160}
						/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
		)
	}
}
// Validations
Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio']) // must be audio or video
}

export default Media;
