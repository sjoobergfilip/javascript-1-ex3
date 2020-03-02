import React from 'react';

const WeatherReport = props => {
	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
					<h5 className="card-title">Temperaturen i  {props.report.name} är {props.report.main.temp} &deg; C just nu, med en luftfuktighet på {props.report.main.humidity} %.</h5>
				</div>
			</div>
		</div>
	)
}

export default WeatherReport;
