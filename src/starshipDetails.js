import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const [Naves, setNaves] = useState([]);
  const [Desc, setDesc] = useState([]);
  const [ImagenNave, setImagenNave] = useState();

  let shipId = useParams();

  useEffect(() => {
    const obtenerNaves = async () => {
      const url = `https://swapi.dev/api/starships/${shipId.id}`;
      const result = await axios.get(url);
      setNaves(result.data);

      const urlDesc = `${result.data.films[0]}`;
      const resultDesc = await axios.get(urlDesc);
      setDesc(resultDesc.data);

      const urlImg = `https://starwars-visualguide.com/assets/img/starships/${shipId.id}.jpg`;
      setImagenNave(urlImg);
    };
    obtenerNaves();
  }, [shipId]);
  return (
    <div className="bg-black">
      <div className="bg-black text-zinc-400 flex justify-center">
        <img src={ImagenNave} alt="imagen Nave" className="object-center" />
      </div>
      <br />
      <div className="bg-black text-zinc-400 flex justify-start ml-40">
        <h1 className="text-2xl">{Naves.name}</h1>
      </div>
      <br />
      <div className="bg-black text-zinc-400 flex justify-center ml-40 mr-40">
        <p className="text-justify">{Desc.opening_crawl}</p>
      </div>
      <br />
      <div className="bg-black text-zinc-400 flex justify-center ml-40 mr-40 grid grid-cols-2">
        <div>
          <h5>Model: {Naves.model}</h5>
        </div>
        <div>
          <h5>Manufacturer: {Naves.manufacturer}</h5>
        </div>
        <div>
          <h5>Cost in credits: {Naves.cost_in_credits}</h5>
        </div>
        <div>
          <h5>Length: {Naves.length}m</h5>
        </div>
        <div>
          <h5>Max speed: {Naves.max_atmosphering_speed} km/s</h5>
        </div>
        <div>
          <h5>Crew: {Naves.crew}</h5>
        </div>
        <div className="text-black">espai en negre jeje</div>
      </div>
    </div>
  );
};
