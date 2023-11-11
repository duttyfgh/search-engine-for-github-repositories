import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import FavouritePage from "./pages/FavouritePage"

const App = () => {
  return (
    <div className='h-[80vh] overflow-y-hidden'>
      <Header />

      <Routes>
        <Route path="/search-engine-for-github-repositories/" element={<HomePage />} />
        <Route path="/search-engine-for-github-repositories/favourites" element={<FavouritePage />} />
      </Routes>

    </div>
  )
}

export default App
