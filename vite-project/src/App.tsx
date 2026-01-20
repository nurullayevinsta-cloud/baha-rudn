import EinsteinEnergiya from './components/EinsteinEnergiya'
import PifagorTeorema from './components/PifagorTeorema'
import CilindrObem from './components/CilindrObem'
import KvadratnoeUravnenie from './components/KvadratnoeUravnenie'
import KvadratSummy from './components/KvadratSummy'
import VodaFormula from './components/VodaFormula'
import Logarifm from './components/Logarifm'
import './App.css'

const App = () => {
  const spisokFormul = [
    <EinsteinEnergiya key="1" />,
    <PifagorTeorema key="2" />,
    <CilindrObem key="3" />,
    <KvadratnoeUravnenie key="4" />,
    <KvadratSummy key="5" />,
    <VodaFormula key="6" />,
    <Logarifm key="7" />
  ]
  
  return (
    <div className="app-container">
      <h1 className="zagolovok">Формулы для вёрстки:</h1>
      <ol className="spisok-formul">
        {spisokFormul}
      </ol>
    </div>
  )
}

export default App
