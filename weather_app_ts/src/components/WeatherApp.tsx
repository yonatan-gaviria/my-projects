import { useState, useEffect } from "react"
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";
import styles from "./weatherApp.module.css";

export function WeatherApp() {

  interface Weather {
    location: {
      name: string
      country: string
      lon: string
      lat: string
    }
    current: {
      temp_c: string
      condition: {
        icon: string
        text: string
      }
    }
  }
  
  const [weather, setWeather] = useState <Weather | null> (null);

  useEffect(()=> {
    loadInfo();
  }, []);

  useEffect(()=> {
    document.title = `weather | ${weather?.location.name ?? ""}`
  }, [weather]);

  async function loadInfo(city = "medellin") {
    try {
      const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);

      const json = await request.json();

      setWeather(json);

      console.log(json);
    } catch (error) {}
  }

  function handleChangeCity(city: string) {
    setWeather(null);
    loadInfo(city);
  }

  return(
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={ handleChangeCity } />
      <WeatherMainInfo weather={ weather }/>
    </div>
  )
}