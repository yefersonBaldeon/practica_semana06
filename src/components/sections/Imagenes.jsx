import React from 'react'

function Imagenes({ one } ) {

    let color;


    if(one.status==="Alive"){
        color="bg-green-700"
    }

    if(one.status==="Dead"){
        color="bg-red-600"
    }

    if(one.status==="unknown"){
        color="bg-orange-600"
    }



    return (
        <div className="basis-1/3">

            <div className="flex p-3 bg-slate-50 rounded-sm shadow-md shadow-lime-600">
                <img className="w-1/3 hrounded-sm mr-2" src={one.image} alt="" />
                {/* unknown,Alive,Dead */}
                <div>
                    <h4 className="font-title text-gray-400 text-3xl">{one.name}</h4>
                    <p className="text-black"> <b>Especie:</b> {one.species}</p>
                    <p className="text-black"> <b>Género:</b> {one.gender}</p>
                    <p className="text-black mt-2"> <b>Estado:</b></p>
                    <span className={`rounded-md ${color}  font-title px-3 text-center text-white`}>{one.status}</span>
                    {/* <span className="rounded-md bg-green-700  font-title px-3 text-center text-white">{one.status}</span> */}
                </div>
            </div>

        </div>
    )
}

export default Imagenes