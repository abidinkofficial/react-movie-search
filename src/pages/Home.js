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

  const [trendingsCards, setTrendingsCards] = useState([])
  const [searchCards, setSearchCards] = useState([])
  const [trendingsTime, setTrendingsTime] = useState("day")
  const [searchState, setSearchState] = useState(false)
  const [searchString, setSearchString] = useState("")
  const [trendingsPage, setTrendingsPage] = useState(1)
  const [searchPage, setSearchPage] = useState("1")

  useEffect(() => {
    dispatch(clearMovie())
    dispatch(clearSimilarMovies())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchTrendings(trendingsTime, trendingsPage))
  }, [dispatch, trendingsTime, trendingsPage])

  useEffect(() => {
    searchString && dispatch(search(searchString, searchPage))
  }, [dispatch, searchString, searchPage])

  useEffect(() => {
    setSearchCards([])
    setSearchPage(1)
  }, [searchString])

  useEffect(() => {
    trendings?.results?.map((result) => setTrendingsCards((trendingsCards) => [...trendingsCards, <Card movie={result} key={result.id} />]))
  }, [trendings])

  useEffect(() => {
    setTrendingsCards([])
    setTrendingsPage(1)
  }, [trendingsTime])

  useEffect(() => {
    searchResults?.results?.map((result) => setSearchCards((searchCards) => [...searchCards, <Card movie={result} key={result.id} />]))
  }, [searchResults])

  const refreshHome = () => {
    dispatch(clearMovie())
    dispatch(clearSimilarMovies())
    setTrendingsCards([])
    setTrendingsPage(1)
    setTrendingsTime("day")
    dispatch(fetchTrendings(trendingsTime, trendingsPage))
    history.push("/")
  }

  return (
    <>
      <Header context="home" refreshHome={refreshHome} />
      <main>
        <Search searchState={searchState} setSearchState={setSearchState} searchString={searchString} setSearchString={setSearchString} />
        {
          searchState ?
            <div>
              <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 py-5">
                <div className="flex my-5">
                  <h2 className="text-2xl font-semibold mr-5">Search results:</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                  {searchCards}
                  <LoadMoreCard page={searchPage} setPage={setSearchPage} />
                </div>
              </div>
            </div> :
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 py-5">
              <div className="flex my-5">
                <h2 className="text-2xl font-semibold mr-5">Trending movies:</h2>
                <TrendingSwitch trendingsTime={trendingsTime} setTrendingsTime={setTrendingsTime} />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {trendingsCards}
                <LoadMoreCard page={trendingsPage} setPage={setTrendingsPage} />
              </div>
            </div>
        }
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