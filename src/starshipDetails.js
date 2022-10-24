import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export const MovieDetails = () => {

    const [Naves, setNaves] = useState([]);
    const [Desc, setDesc] = useState([]);
    const [ImagenNave, setImagenNave] = useState();
    let  shipId  = useParams();
    
    
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
        <div id="first-div" className="bg-black">
          
          <div className="flex justify-center">
            <ul>
          {/*  {Naves.length === 0 && <p>Cargando...</p>}
              {Naves.map((aeronave, index) => { */}
                 
                  <div className="bg-zinc-400	m-4 w-96">  

                        <img src={ImagenNave} alt="imagen Nave" />
                        {Naves.name} 
                        <br/>
                        {Desc.opening_crawl}
                           
                  </div>
                ;
              
            </ul>
          </div>
        </div>
      );
    };