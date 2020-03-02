import React from 'react';

class SearchCity extends React.Component {
	state = {
		city: ''
	}

	handelChange = (e) => {
		this.setState({
			city: e.target.value,
		});
	}
	handelSerach = (e) => {
		e.preventDefault();
		this.props.handelSearch(this.state.city)
	}

	render() {
		return (
			<div id="SearchCity" className="mb-5">
				<form onSubmit={this.handelSerach}>
					<div className="input-group">
						<input type="text" className="form-control form-control-lg" id="city" value={this.state.city} onChange={this.handelChange}/>
						<div className="input-group-append">
							<button className="btn btn-success btn-lg">Search</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchCity;
