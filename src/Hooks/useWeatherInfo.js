import { useState, useEffect } from "react";
import axios from "axios";

function useWeatherInfo(citynamedata) {
  const [cityname, setcityname] = useState('');
  const [weatherinfo, setweatherinfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setcityname(citynamedata);
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=473709778eba4b4faed140237231009&q=${cityname}&aqi=yes`);
        setweatherinfo(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [cityname]);

  const location = weatherinfo?.location?.name || '';
  const tempC = weatherinfo?.current?.temp_c || '';

  return { location, tempC };
}

export default useWeatherInfo;
