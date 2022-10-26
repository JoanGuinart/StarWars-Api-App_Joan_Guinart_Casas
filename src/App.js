import React from 'react';
import './index.css'
import { Home } from "./home";
import { Naves } from './starships';
import {
  BrowserRouter as 
  Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { MovieDetails } from './starshipDetails';
import Registration from './components/Registration';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Login } from './components/Login';
import { PrivateRoutes } from './components/PrivateRoute';

function App() {
  return (
    <div className="bg-black">
      <div className="mr-4 grid justify-items-end">
      {/* <nav className="text-zinc-200 mt-4">
         <Registration/> 
        </nav> */}
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
       <Link to="/home" className="text-zinc-200 border-2 border-slate-500 m-1 p-1">
        HOME
      </Link> 
      <Link to="/starships" className="text-zinc-200 border-2 border-slate-500 m-1 p-1">
        STARSHIPS(bucle infinito)
      </Link>
      <Link to="/register" className='text-zinc-200 border-2 border-slate-500 m-1 p-1' >
      REGISTER/LOGIN
      </Link>

      </div>
      
      <Routes>

        <Route element={<PrivateRoutes/>}>
        <Route path="/starships" element={<Naves />} /> 
        </Route>

        <Route path='/register' element={<Registration/>} />
        <Route path="/home" element={<Home />} />
        <Route path ="/starships/:id" element={<MovieDetails />} /> 
        <Route component={Login} path='/login'  />
        <Route path='/' element={<Registration/>}/>       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
