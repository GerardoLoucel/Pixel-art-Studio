import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import {Home, About, Contact, Welcome} from './pages'

const App = () => {
  return (
   <main className='bg-slate-300/20'>
     <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='*' element={<NavBar />} />
      </Routes>
      <Routes>
        <Route path='/Home' element={<Home />} />

        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contact />} />
      
      </Routes>
     </Router>
   </main>
  )
}

export default App