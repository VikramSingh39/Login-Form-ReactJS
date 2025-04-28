import { useState } from 'react'

import './App.css'
import Authform from './AuthForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Authform></Authform>
    </>
  )
}

export default App
