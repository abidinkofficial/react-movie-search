import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchTrendings } from "../actions/trendingsActions"
import { search } from "../actions/searchActions"
import { clearMovie } from "../actions/movieActions"
import { clearSimilarMovies } from "../actions/similarMoviesActions"
import { useHistory } from "react-router"

import Header from "../components/Header"
import Search from "../components/Search"
import TrendingSwitch from "../components/TrendingSwitch"
import Card from "../components/Card"
import LoadMoreCard from "../components/LoadMoreCard"

const Home = ({ dispatch, trendingsLoading, trendings, trendingsHasErrors, searchLoading, searchResults, searchHasErrors }) => {
  const history = useHistory()

  const [movieCards, setMovieCards] = useState([])
  const [trendingsSwitch, setTrendingsSwitch] = useState("day")
  const [searchQuery, setSearchQuery] = useState("")
  const [page, setPage] = useState(1)

  // Load trending movies or get search results, and generate corresponding movie cards
  useEffect(() => {
    searchQuery ? dispatch(search(searchQuery, 1))
      .then((data) => fillMovieCards(data)) :
      dispatch(fetchTrendings(trendingsSwitch, 1))
        .then((data) => fillMovieCards(data))
    // eslint-disable-next-line
  }, [trendingsSwitch, searchQuery])

  // Load new movies when the page increments
  useEffect(() => {
    (page > 1 && searchQuery) && dispatch(search(searchQuery, page))
      .then((data) => addToMovieCards(data));
      (page > 1 && !searchQuery) && dispatch(fetchTrendings(trendingsSwitch, page))
        .then((data) => addToMovieCards(data));
    // eslint-disable-next-line
  }, [page])

  // Add new cards to the Home page
  const addToMovieCards = (data) => {
    data.results?.map((result) => setMovieCards((movieCards) => [...movieCards, <Card movie={result} key={result.id} />]))
  }

  // Clear existing cards and add new ones to the Home page
  const fillMovieCards = (data) => {
    setMovieCards([])
    data.results?.map((result) => setMovieCards((movieCards) => [...movieCards, <Card movie={result} key={result.id} />]))
  }

  // Clear the state and reload the application
  const refresh = () => {
    dispatch(clearMovie())
    dispatch(clearSimilarMovies())
    setMovieCards([])
    setPage(1)
    setTrendingsSwitch("day")
    setSearchQuery("")
    dispatch(fetchTrendings(trendingsSwitch, page)).then((data) => fillMovieCards(data))
    history.push("/")
  }

  return (
    <>
      <Header context="home" refresh={refresh} />
      <main>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 py-5">
          <div className="flex flex-col md:flex-row my-5">
            <h2 className="text-2xl font-semibold mr-5 mb-5 md:mb-0">{searchQuery ? "Search results:" : "Trending movies:"}</h2>
            {!searchQuery && <TrendingSwitch trendingsSwitch={trendingsSwitch} setTrendingsSwitch={setTrendingsSwitch} />}
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 max-w-max mx-auto">
            {movieCards}
            <LoadMoreCard page={page} setPage={setPage} />
          </div>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = (state) => ({
  trendingsLoading: state.trendings.loading,
  trendings: state.trendings.trendings,
  trendingsHasErrors: state.trendings.hasErrors,

  searchLoading: state.searchReducer.loading,
  searchResults: state.searchReducer.results,
  searchHasErrors: state.searchReducer.hasErrors
})

export default connect(mapStateToProps)(Home);