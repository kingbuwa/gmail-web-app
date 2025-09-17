import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content placeholder */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Main Content</h1>
      </main>
    </div>
  )
}

export default App
