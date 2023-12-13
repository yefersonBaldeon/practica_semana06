
import { useEffect, useState } from "react";
import Loader from "./Loading";

import Imagenes from "./Imagenes";

const Api = () => {


  const [Things, setThings] = useState([])


  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character").then(one => one.json()).then(one => setThings([...Things, ...one.results]))
    // fetch("https://rickandmortyapi.com/api/character").then(one => one.json()).then(one => console.log(one.results)
  }, [])


  return (
    <section>
      <h3 className="text-gray-300 text-2xl font-title">API</h3>
      <p className="text-gray-400">Consumo de la API</p>
      <button className="Button font-title p-2 mt-3">
        Consultar
      </button>



      <div className="flex flex-wrap mt-3">


        {Things.length !== 0 && Things.map(one => (
          <Imagenes key={one.id} one={one}></Imagenes>
        ))}

        {Things.length === 0 && (

          <div className="flex justify-center items-center w-full">

            <Loader></Loader>

          </div>

        )}


      </div>
    </section>
  );
};

export default Api;
