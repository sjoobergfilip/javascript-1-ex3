import React from 'react'


const WeatherDescription = props => {
	return(
		<div>
			<p>{props.report.main.description}</p>
		</div>
	)
}

export default WeatherDescription
