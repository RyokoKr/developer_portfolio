import { Hero } from './components/Hero'
import { Contacts } from './components/Contacts'
import { Projects } from './components/Projects'

function App() {
  return (
    <main className="min-h-dvh bg-[#0a0a0a] text-white">
      <Hero />
      <Projects />
      <Contacts />
    </main>
  )
}

export default App
