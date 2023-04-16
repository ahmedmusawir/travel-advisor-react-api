import axios from 'axios';

export const getPlaceData = async (type, sw, ne) => {
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
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_ADVISOR_API_KEY, // htmlfivedev
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
  };

  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      options
    );

    return data;
  } catch (error) {
    console.log('Axios faliure to get data:', error);
  }
};
