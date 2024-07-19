
import { Compass } from 'lucide-react'
import { Gauge } from 'lucide-react'
import { Landmark } from 'lucide-react'



const Utilidades = () => {
  return (
    <div>
              <div className='flex justify-center mb-6'>
        <div className="flex justify-between h-[200px] bg-[#1A9A8E] w-[1200px] p-3 rounded-2xl">

          <div className="flex flex-col items-center ml-5 mt-5 text-center">
            <Compass className="h-8 w-8 text-blue-500 ml-2 mb-5" />
            <h2 className="text-lg  text-white font-semibold">Tenha o controle perfeito sobre seu dinheiro</h2>
          </div>


          <div className="flex flex-col items-center text-center mt-5">
            <Gauge className="h-8 w-8 text-green-500 mb-5" />
            <h2 className="text-lg font-semibold  text-white">Obtenha uma visão geral rápida</h2>
          </div>

          <div className="flex flex-col items-center mr-5 text-center mt-5">
            <Landmark className="h-8 w-8 text-red-500 mb-5 " />
            <h2 className="text-lg font-semibold  text-white">Use nossos orçamentos inteligentes</h2>
          </div>
</div>
        </div>
        <section className="p-6 bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Utilidades</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Utilidade 1</h3>
        <p>Descrição da primeira utilidade.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Utilidade 2</h3>
        <p>Descrição da segunda utilidade.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Utilidade 3</h3>
        <p>Descrição da terceira utilidade.</p>
      </div>
    </div>
  </section>
    </div>
    
  )
}

export default Utilidades

  