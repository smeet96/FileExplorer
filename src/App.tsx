
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import './App.css'
import Folder from './components/Folder'
import { Explorer } from './components/Explorer'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Folder />} />
        <Route path='/explorer' element={<Explorer />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
