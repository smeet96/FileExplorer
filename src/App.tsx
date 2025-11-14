
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import './App.css'
import { Explorer } from './components/Explorer'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/explorer' element={<Explorer />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
