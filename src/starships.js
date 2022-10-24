import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export const Naves = () => {
  const [nombreNaves, setnombreNaves] = useState([]);

  useEffect(() => {
    const obtenerNaves = async () => {
      const url = "https://swapi.dev/api/starships/";
      const result = await axios.get(url);

      setnombreNaves(result.data.results);
    };
    obtenerNaves();
  }, []);

  return (
    <div id="first-div" className="bg-black flex justify-center">
      
      <div className="flex justify-center">
        <ul>
          {nombreNaves.length === 0 && <p>Cargando...</p>}
          {nombreNaves.map((aeronave, index) => {
            let prepare = aeronave.url.split("/");
            let myid = prepare.slice(-2,-1);
            return (
              <div key={index} className="bg-zinc-900	m-4 w-96">
                <Link id="link" to={'/starships/' + myid}>
                <h4 className="text-zinc-400 text-xl">{aeronave.name} </h4>
                <h4 className="text-zinc-400 text-sm">{aeronave.model} </h4>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
