import React, { Component } from 'react';
import './media.css';

class Media extends Component {
	render() {
		/*const styles = {
			container: {
				fontSize: 14,
				color: '#44546b',
				cursor: 'pointer',
				width: 260,
				border: '1px solid red'
			}
		}*/
		return (
			<div className="Media">
				<div className="Media-cover">
					<img className="Media-image"
						src={this.props.image}
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

export default Media;
