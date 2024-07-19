import {BadgeCent} from 'lucide-react'

const SectionImage = () => {
  return (
    <div>
       <section className='text-center mt-6'>
           <img src="../public/pexels-silverkblack-23496897.jpg" alt="" />
            <div className='flex justify-center mb-6 mt-6 text-xl'><BadgeCent /></div>
            <p className='text-2xl mb-1'>Aprenda a cuidar do seu dinheiro como nunca antes</p> <br />
          </section>


          <section className="p-6 bg-white rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4">Imagem e Descrição</h2>
    <img src="https://via.placeholder.com/800x400" alt="Placeholder" className="w-full h-auto rounded-md" />
    <p className="mt-4">Descrição sobre a imagem exibida.</p>
  </section>
    </div>
  )
}

export default SectionImage
