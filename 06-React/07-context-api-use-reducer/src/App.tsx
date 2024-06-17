import './App.css'
import AddTimer from './Components/AddTimer'
import Header from './Components/Header'
import TimersList from './Components/TimersList'
import TimersContextProvider from './store/TimersContext'

function App() {

  return (
    <div className='app'>
      <TimersContextProvider>
        <Header />
        <div>
          <AddTimer />
          <TimersList />
        </div>
      </TimersContextProvider>
    </div>
  )
}

export default App
