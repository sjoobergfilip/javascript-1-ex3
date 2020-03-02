import React from 'react';
import SearchCity from './components/SearchCity';
import axios from 'axios';
import WeatherReport from './components/WeatherReport';

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
	}


		handelSearch = (city) => {

			//axios
			axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=513f5e5aacbc39b1f10d91cb9aedc523`)
			.then(res => {
				console.log(res);
				this.setState({
					report: res.data
				})
			})
			.catch(error => {
				console.error(error);
				alert(`Ojsan, ${city} finns inte, skriv in en ny stad, t.ex. malmö`)
			});
		}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity handelSearch={this.handelSearch}
					/>

					{
						this.state.report
						? (
							<WeatherReport report={this.state.report} />
						)
						: ''
					}
				</div>
			</div>
		)
	}
}

export default App;
