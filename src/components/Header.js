import { LightningBoltIcon } from '@heroicons/react/outline'
import { generateRandomId } from '../actions/otherActions';
import { useHistory } from "react-router"
import { useState } from 'react';
import Spinner from './Spinner';

const Header = ({ context, refresh }) => {
  let history = useHistory()

  const [randomMovieLoading, setRandomMovieLoading] = useState(false)

  const goToRandomMovie = async () => {
    setRandomMovieLoading(true)
    const id = await generateRandomId()
    setTimeout(() => history.push(`/movie/${id}`), 500)
  }

  return (
    <>
      {context === "home" &&
        <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 px-4 sm:px-6 lg:px-16 pt-8">
          <div className="mx-auto max-w-screen-2xl flex items-center justify-between border-b border-gray-900 border-opacity-30 py-4">
            <div onClick={refresh} className="cursor-pointer"><img src={process.env.PUBLIC_URL + "/logo-light.svg"} alt="movie search logo" /></div>
            <a href="https://github.com/abidinkofficial/react-movie-search" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-gray-50 hover:bg-gray-200 rounded-md hover:shadow-md py-4 px-8 text-sm text-gray-800 font-semibold transition-colors h-10"><span style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/github-64.png)`, backgroundSize: "1.25rem", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="w-6 h-6 mr-2"></span>View on GitHub</a>
          </div>
          <div className="mx-auto max-w-screen-2xl flex items-center justify-between py-8">
            <h1 className="text-2xl font-semibold text-gray-100">Search movies by typing below, or bring a random one.</h1>
            <button href="/" onClick={goToRandomMovie} className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-md hover:shadow-md py-4 px-12 text-gray-50 transition-colors font-semibold w-64 h-16">{randomMovieLoading ? <><Spinner tone="50" className="h-5 w-5" /></> : <><LightningBoltIcon className="h-5 w-5 mr-2" />Random Movie!</>}</button>
          </div>
        </header>}
      {context === "movie" &&
        <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 px-4 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-screen-2xl flex items-center justify-between py-4">
            <a href="/"><img src={process.env.PUBLIC_URL + "/logo-light.svg"} alt="movie search logo" /></a>
            <a href="https://github.com/abidinkofficial/react-movie-search">View on GitHub</a>
          </div>
        </header>}
    </>
  )
}

export default Header;