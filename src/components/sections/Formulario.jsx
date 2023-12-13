import  { useState } from "react";

const Formulario = () => {


  const [Value, setValue] = useState({})

  const handlechange = (event) => {

    setValue({ ...Value, [event.target.name]: event.target.value })
    console.log(Value)
  }



  return (
    <section>
      <h3 className="text-gray-300 text-2xl font-title">Formularios</h3>
      <p className="text-gray-400">UseState,Formularios,Render Condicional</p>
      <div className="flex flex-row mt-3">
        <form className="basis-1/3 border-solid border-2 border-gray-400 p-3 rounded-sm">
          <h5 className="font-title text-gray-200">Registrarme</h5>
          <input type="text" className="w-full mt-1 font-title p-1" name="name" placeholder="Ingrese su Nombre" onChange={handlechange} />
          <input type="text" className="w-full mt-3 font-title p-1" name="email" placeholder="Ingrese su Correo" onChange={handlechange} />
          <button type="submit" className="Button font-title p-2 mt-3 w-full">Enviar</button>
        </form>
        <div className="basis-2/3 pl-2">
          <div className="p-3 bg-slate-50 w-1/2 rounded-sm shadow-md shadow-lime-600">
            <h4 className="font-title text-gray-400">Usuario Registrado</h4>

            {Value.name? <>
              <p className="text-black">Nombre: {Value.name}</p>
              <p className="text-black">Correo: {Value.email} </p>
            </> : <p className="text-black">No existe un usuario registrado.</p>


            }





          </div>
        </div>
      </div>
    </section>
  );
};

export default Formulario;
