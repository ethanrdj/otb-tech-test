
import './App.css'
import './styles/main.scss'
import { BackgroundContainer } from './components/BackgroundContainer'
import { HolidayFeed } from './components/HolidayFeed'

function App() {
  return (
    <BackgroundContainer>
      <div className="App">
        <HolidayFeed />
        </div>
    </BackgroundContainer>
  )
}

export default App
