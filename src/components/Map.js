import React, { Component } from "react";

import GoogleMap from "google-map-react";
import icon from "../assets/img/location-icon.png";

const Icon = () => <img src={icon} />;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -20.269482,
      lng: 57.476192
    },
    zoom: 15
  };

  render() {
    return (
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMap center={this.props.center} zoom={this.props.zoom}>
          <Icon lat={-20.269482} lng={57.476192} />
        </GoogleMap>
      </div>
    );
  }
}

export default SimpleMap;
