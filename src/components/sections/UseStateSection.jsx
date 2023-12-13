import { useState } from 'react'

const UseStateSection = () => {

  const [first, setfirst] = useState(0)


  const handleclick = () => {

    setfirst(first + 1)
  }

  const handledisminuir = () => {

    setfirst(first - 1)
  }

  const handleresset = () => {

    setfirst(0)
  }

  const handleincrementar2 = () => {

    setfirst(first + 2)
  }


  return (
    <section className='mt-5'>
      <h3 className='text-gray-300 text-2xl font-title'>UseState</h3>
      <p className='text-gray-400'>Ejemplo básico de UseState</p>
      <div className="p-2 flex items-center space-x-5">
        <button className='Button font-title p-2' onClick={handleclick}>Incrementar</button>
        <button className='Button font-title p-2' onClick={handledisminuir}>Disminuir</button>
        <button className='Button font-title p-2' onClick={handleresset}>Reset</button>
        <button className='Button font-title p-2' onClick={handleincrementar2}>Incrementar</button>
        <p className="text-7xl text-gray-300 font-title">{first}</p>
      </div>
    </section>
  )
}

export default UseStateSection