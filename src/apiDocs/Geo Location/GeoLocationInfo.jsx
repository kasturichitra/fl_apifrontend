import React from "react";
import "../../styles/serviceInfo.css";

const LocationServicesInfo = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Location Services</h2>

      <p className="service-description">
        Location Services provide geospatial intelligence, geo-tagging, and
        geofencing capabilities to help track, validate, and analyze geographic
        data. These services are useful for logistics, delivery tracking,
        fraud detection, and location-based decision making.
      </p>

      <h3 className="service-subtitle">Available Services</h3>

      <ul className="service-list">
        <li>
          <strong>Geo-Tagging Search:</strong> Identifies and retrieves location
          details based on geo-tagged data inputs.
        </li>

        <li>
          <strong>Geo-Tagging Distance Calculation:</strong> Calculates the
          distance between two geo-tagged locations.
        </li>

        <li>
          <strong>Longitude/Latitude Geofencing:</strong> Defines and checks
          whether coordinates fall within a specified geographic boundary.
        </li>

        <li>
          <strong>Pincode Geofencing:</strong> Validates whether a location lies
          within a specific postal PIN code region.
        </li>

        <li>
          <strong>Lat Long to DIGIPIN:</strong> Converts latitude and longitude
          coordinates into a DIGIPIN (digital address code).
        </li>

        <li>
          <strong>DIGIPIN to Lat Long:</strong> Converts a DIGIPIN back into
          geographic coordinates.
        </li>

        <li>
          <strong>Address to DIGIPIN:</strong> Generates a DIGIPIN from a
          physical address for standardized location identification.
        </li>
      </ul>

      <p className="service-footer">
        These services are commonly used in mapping systems, logistics platforms,
        geo-analytics, and location-based verification workflows.
      </p>
    </div>
  );
};

export default LocationServicesInfo;