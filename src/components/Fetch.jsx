import React, { useEffect, useState } from "react";
import { API_KEY } from "../key";

export const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/network?api_key=${API_KEY}&language=es-MX&query=netflix`
    )
    const data = await response.json();
    console.log(data.results.filter(e => e.logo_path && e.origin_country == 'US'))
  };

  return <div style={{ color: "#fff" }}>Probando respuestas de API</div>;
};