import React from 'react';
import SearchCity from './components/SearchCity';
import axios from 'axios';
import WeatherReport from './components/WeatherReport';

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
	}


		handelSearch = city => {

			//axios
			axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f`)
			.then(res => {
				console.log(res);
				this.setState({
					report: res.data
				})
			})
			.catch(error => {
				console.error(error);
				alert(`${city} finns inte, skriv in en ny stad, t.ex. malmö`)
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
