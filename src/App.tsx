import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import FavouritePage from "./pages/FavouritePage"

const App = () => {
  return (
    <div className='h-[80vh] overflow-y-hidden'>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritePage />} />
      </Routes>

    </div>
  )
}

export default App