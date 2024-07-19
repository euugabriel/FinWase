

const Home = () => {
  return (
    <div>
      <section className="mt-6 mb-6">~
            <div className="flex justify-center text-center">
            <h2 className='text-3xl'>Máxima flexibilidade  para <br />gerenciar seu dinheiro, do seu  <br />jeito</h2>

           
            </div>
            <div  className="flex justify-center text-center">
            <button className='bg-[#1A9A8E] p-3 mt-4 w-44 rounded-xl text-white hover:bg-[#49817c] transition delay-300'>Criar sua conta</button>
            </div>
          </section>

          <section className="p-6 bg-gray-100 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4">Bem-vindo ao Dashboard</h2>
    <p>Aqui você pode visualizar as principais métricas e informações importantes.</p>
  </section>
    </div>
  )
}

export default Home
