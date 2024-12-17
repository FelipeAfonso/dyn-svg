import { useState } from 'react'
import './App.css'
import DynamicSvg from './DynamicSvg'

function App() {
  const [selected, setSelected] = useState(1)
  return (
    <>
      <DynamicSvg selected={selected} onSelect={setSelected} />
    </>
  )
}

export default App
