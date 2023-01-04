import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlaceData } from './api';
import { LabelImportantRounded } from '@material-ui/icons';
import { fakeData } from './data/fakeData';

function App() {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    console.log('Coordinates:', coordinates);
    console.log('Bounds:', bounds);

    setIsLoading(true);

    if (bounds) {
      getPlaceData(bounds.sw, bounds.ne).then((data) => {
        console.log('Data:', data);

        setPlaces(data);
        setIsLoading(false);
      });
    }
    // setPlaces(fakeData);
  }, [bounds, coordinates]);

  return (
    <>
      <CssBaseline />
      <Header />
      {coordinates && (
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List
              places={places}
              childClicked={childClicked}
              isLoading={isLoading}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
              setChildClicked={setChildClicked}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default App;
