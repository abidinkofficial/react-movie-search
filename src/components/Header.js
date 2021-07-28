import { LightningBoltIcon } from '@heroicons/react/outline'

const Header = ({ context, ...props }) => {
  return (
    <>
      {context === "home" &&
        <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 px-4 sm:px-6 lg:px-16 pt-8">
          <div className="mx-auto max-w-screen-2xl flex items-center justify-between border-b border-gray-900 border-opacity-30 py-4">
            <a href="/"><img src={process.env.PUBLIC_URL + "/logo-light.svg"} alt="movie search logo" /></a>
            <a className="github-button" href="https://github.com/abidinkofficial" data-size="large" aria-label="Follow @abidinkofficial on GitHub">Follow @abidinkofficial</a>
          </div>
          <div className="mx-auto max-w-screen-2xl flex items-center justify-between py-8">
            <h1 className="text-2xl font-semibold text-gray-100">Search movies by typing below, or bring a random one.</h1>
            <button href="/" className="flex items-center bg-indigo-500 hover:bg-indigo-600 rounded-md hover:shadow-md py-4 px-12 text-gray-50 transition-colors font-semibold"><LightningBoltIcon className="h-5 w-5 mr-2" />Random Movie!</button>
          </div>
        </header>}
      {context === "movie" &&
        <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 px-4 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-screen-2xl flex items-center justify-between py-4">
            <a href="/"><img src={process.env.PUBLIC_URL + "/logo-light.svg"} alt="movie search logo" /></a>
            <a className="github-button" href="https://github.com/abidinkofficial" data-size="large" aria-label="Follow @abidinkofficial on GitHub">Follow @abidinkofficial</a>
          </div>
        </header>}
    </>
  )
}

export default Header;