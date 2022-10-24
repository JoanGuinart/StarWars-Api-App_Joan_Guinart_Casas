import React from 'react';
import { Naves } from './starships';
import './index.css'
import { Home } from "./home";
import {
  BrowserRouter as 
  Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { MovieDetails } from './starshipDetails';


function App() {
  return (
    <div className="bg-black">
      <div className="mr-4 grid justify-items-end">
      <nav className="text-zinc-200 mt-4">
          LOGIN
          SIGNUP
        </nav>
      </div>
      <div className="flex justify-center">
        <img  src="https://www.cineactual.net/fotos/Star-wars-logo.jpg" className="object-contain h-48 w-96" alt="photonpnstarwars"/>
      </div>
      <div className="flex space-x-4 justify-center">
      </div>
    <Router>
      <div className='flex justify-center
flex justify-center'>
      <br />
      <Link to="/" className="text-zinc-200 border-2 border-slate-500 m-1 p-1">
        HOME
      </Link>
      <Link to="/starships" className="text-zinc-200 border-2 border-slate-500 m-1 p-1">
        STARSHIPS
      </Link>

      </div>
      
      <Routes>
        <Route path="/starships" element={<Naves />} />
        <Route path="/" element={<Home />} />
        <Route path ="/starships/:id" element={<MovieDetails />} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
