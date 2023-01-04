import axios from 'axios';

const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlaceData = async (sw, ne) => {
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
      'X-RapidAPI-Key': 'f80279d24fmshcd035e6338443c9p11c937jsn303f49754aaa', // lillian.lue
      // 'X-RapidAPI-Key': '01979c6e5bmsh5cd6196dd41058bp1f6b24jsn0bb211c4b924', // odesk.shourav
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
  };

  try {
    const {
      data: { data },
    } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log('Axios faliure to get data:', error);
  }
};
