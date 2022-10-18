import { useState } from 'react'
import bg_header from "./assets/pattern-bg.png"
import Header from './components/header'

function App() {
  return (
    <>
      <Header background={ bg_header } title="IP Address Tracker" />
    </>
  )
}

export default App
