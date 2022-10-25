import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "./gif/Spinner";



export const Naves = () => {
  const [nombreNaves, setnombreNaves] = useState([]);
  const [paginaNaves, setpaginaNaves] = useState(1) 
  const [loading, setloading] = useState(true)

  

  /* useEffect(() => {
    const obtenerNaves = async () => {
      const url = `https://swapi.dev/api/starships/?page=${paginaNaves}`;
      const result = await axios.get(url);
      setnombreNaves((previous) => [...previous, ...result.data.results]);
      setloading(false)
    };
    obtenerNaves();
  }, [paginaNaves]); */

  useEffect(() => {
    getNaves(paginaNaves);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginaNaves]);

  const getNaves = ((page) => {
    const obtenerNaves = async () => {
      const url = `https://swapi.dev/api/starships/?page=${page}`;
      const result = await axios.get(url);
      let previous = [...nombreNaves];
      setnombreNaves([...previous, ...result.data.results]);
      setloading(false)
    };
    obtenerNaves();
  });
  

  const handleScroll = () =>{
    
       if(window.innerHeight + document.documentElement.scrollTop +1>= document.documentElement.scrollHeight){
      (loading === false) || setpaginaNaves(prev => prev + 1)
      setloading(true)

    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    
    <div id="first-div" className="bg-black flex justify-center">
      <div className="flex justify-center">
        <ul>
          {nombreNaves.length === 0 && <p>Cargando...</p>}
          {nombreNaves.map((aeronave, index) => {
            let separar = aeronave.url.split("/");
            let myid = separar.slice(-2,-1);
            return (
              <div key={index} className="bg-zinc-900	m-4 w-96">
                <Link id="link" to={'/starships/' + myid}>
                <h4 className="text-zinc-400 text-xl">{aeronave.name} </h4>
                <h4 className="text-zinc-400 text-sm">{aeronave.model} </h4>
                <hr/>
                </Link>
              </div>
            );
          })}

          {paginaNaves >= 5 && (alert("no hay mas"))}
          {loading &&
          <div className="flex justify-center">
          <Spinner/>
          </div> }
        </ul>
      </div>
    </div>
  );
};
