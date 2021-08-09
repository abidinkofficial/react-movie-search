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
        <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 px-4 md:px-12 xl:px-16">
          <div className="mx-auto max-w-screen-2xl flex flex-col xs:flex-row items-start xs:items-center justify-between border-b border-gray-900 border-opacity-30 py-5">
            <div onClick={refresh} className="cursor-pointer mb-3 xs:mb-0"><img src={process.env.PUBLIC_URL + "/logo-light.svg"} alt="movie search logo" /></div>
            <a href="https://github.com/abidinkofficial/react-movie-search" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-gray-50 hover:bg-gray-200 rounded-md hover:shadow-md py-4 px-4 text-sm text-gray-800 transition-colors h-8"><span style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/github-64.png)`, backgroundSize: "1rem", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="w-6 h-6 mr-1"></span>View on GitHub</a>
          </div>
          <div className="mx-auto max-w-screen-2xl flex flex-col md:flex-row items-start md:items-center justify-between py-8">
            <h1 className="text-xl xs:text-2xl text-gray-100 mb-8 md:mb-0">Search movies by typing below, <span className="opacity-75 block xl:inline">or bring a random one.</span></h1>
            <button href="/" onClick={goToRandomMovie} className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-md hover:shadow-md py-4 px-12 text-gray-50 transition-colors font-semibold w-full md:w-64 h-16">{randomMovieLoading ? <><Spinner tone="50" className="h-5 w-5" /></> : <><LightningBoltIcon className="h-5 w-5 mr-2" />Random Movie!</>}</button>
          </div>
        </header>}
      {context === "movie" &&
        <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 px-4 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-screen-2xl flex items-center justify-between py-4">
            <a href="/"><img src={process.env.PUBLIC_URL + "/logo-light.svg"} alt="movie search logo" /></a>
            <a href="https://github.com/abidinkofficial/react-movie-search" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-gray-50 hover:bg-gray-200 rounded-md hover:shadow-md py-4 px-4 text-sm text-gray-800 transition-colors h-8"><span style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/github-64.png)`, backgroundSize: "1rem", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="w-6 h-6 mr-1"></span>View on GitHub</a>
          </div>
        </header>}
    </>
  )
}

export default Header;