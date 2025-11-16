import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import NotesPage from './pages/NotesPage'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <NotesPage />
      </main>
    </div>
  )
}

export default App

