import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.980606953038006,
      lng: 23.732251595398456
    },
    zoom: 18
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '140%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBu-r7hQzSrYKcLQjaN--ELjVE7e1iaBPs" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}

        >


          <AnyReactComponent
            lat={37.980606953038006}
            lng={23.732251595398456}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;