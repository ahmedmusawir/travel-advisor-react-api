import axios from 'axios';

const URL = '';

export const getPlaceData = async (type, sw, ne) => {
  console.log('SW', sw.lat);
  console.log('SW', sw.lng);
  const options = {
    method: 'GET',
    params: {
      // bl_latitude: '11.847676',
      // tr_latitude: '12.838442',
      // bl_longitude: '109.095887',
      // tr_longitude: '109.149359',
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY, // lillian.lue
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
  };

  const runAxios = async () => {
    console.log({ type });
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      options
    );

    return data;
  };

  try {
    const mooseData = runAxios();
    return mooseData;
  } catch (error) {
    console.log('Axios faliure to get data:', error);
  }
};
