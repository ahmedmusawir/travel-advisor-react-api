import React from 'react';

import axios from 'axios';

function PlaceDetails({ place }) {
  return (
    <div>
      <h1>{place.name}</h1>
    </div>
  );
}

export default PlaceDetails;
