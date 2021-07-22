import { SearchIcon } from "@heroicons/react/outline"

const Search = () => {
  return (
    <form className="px-4 sm:px-6 lg:px-16 shadow-md">
      <div className="mx-auto max-w-screen-2xl flex items-center">
        <label className="flex items-center mr-5" htmlFor="search-input">
          <SearchIcon className="h-5 w-5" />
        </label>
        <input type="text" id="search-input" placeholder="Find a movie" className="w-full outline-none placeholder-gray-500 focus:placeholder-gray-300 py-5"/>
      </div>
    </form>
  )
}

export default Search;