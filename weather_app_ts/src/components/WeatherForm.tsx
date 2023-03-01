import { useState } from "react";
import styles from "./weatherForm.module.css";

interface prop {
  onChangeCity: (city: string)=> void;
}

export function WeatherForm({ onChangeCity }: prop) {

  const [city, setCity] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if(value !== "") {
      setCity(value);
    }
  }
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <form className={styles.container} onSubmit={ handleSubmit }>
      <input className={styles.input} type="text" onChange={ onChange } />
    </form>
  );
}