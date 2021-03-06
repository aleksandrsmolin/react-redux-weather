import React, {Component} from 'react';

class GoogleMap extends Component {

	componentDidMount() {
		new google.map.Map(this.refs.map, {
			zoom:12,
			center: { 
				lat: this.props.lat,
				lag: this.props.lon
			}
		})
	}

	render() {
		return <div ref="map" />
	}
}

export default GoogleMap;