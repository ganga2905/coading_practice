import React from 'react'
import Counter from './Components/Counter'
import Todo from './Components/Todo'
import PasswordToggle from './Components/PasswordToggle'
import Fetch from './Components/Fetch'

const App = () => {
  return (
    <div>
      <Counter/>
      <Todo/>
      <PasswordToggle/>
      <Fetch/>

    </div>
  )
}

export default App