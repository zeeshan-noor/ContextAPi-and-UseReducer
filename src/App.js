import React, { useState } from 'react'
import Parent from './Parent'
import counterContext from './ContextApi'
function App() {
  let Count = useState(1)

  return (
    <counterContext.Provider value={Count}>
      <Parent />
    </counterContext.Provider>
  )
}

export default App