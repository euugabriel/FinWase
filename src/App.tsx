import './App.css'



import Header from './components/Header'
import Home from './components/Home'
import SectionImage from './components/SectionImage'
import Utilidades from './components/Utilidades'

function App() {
  

  return (
    <>
      <div>
      
        <Header />

        <main className='mt-8'>
          <Home />

        <SectionImage />

        <Utilidades />

        <script src="path/to/chartjs/dist/chart.umd.js"></script>


       <div>
   

       

       </div>
        </main>

        <div className='text-center p-5'>
        <footer className=''>FinWase &copy; 2024</footer>
        </div>
      </div>
    </>
  )
}

export default App
