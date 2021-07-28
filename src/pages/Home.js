import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchTrendings } from "../actions/trendingsActions"
import { search } from "../actions/searchActions"
import { clearMovie } from "../actions/movieActions"
import { clearSimilarMovies } from "../actions/similarMoviesActions"

import Header from "../components/Header"
import Search from "../components/Search"
import TrendingSwitch from "../components/TrendingSwitch"
import Card from "../components/Card"

const Home = ({ dispatch, trendingsLoading, trendings, trendingsHasErrors, searchLoading, searchResults, searchHasErrors }) => {

  const [trendingsCards, setTrendingsCards] = useState([])
  const [searchCards, setSearchCards] = useState([])
  const [trendingsTime, setTrendingsTime] = useState("day")
  const [searchState, setSearchState] = useState(false)
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    dispatch(clearMovie())
    dispatch(clearSimilarMovies())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchTrendings(trendingsTime))
  }, [dispatch, trendingsTime])

  useEffect(() => {
    searchString && dispatch(search(searchString))
  }, [dispatch, searchString])

  useEffect(() => {
    setTrendingsCards([])
    trendings?.results?.map((result) => setTrendingsCards((trendingsCards) => [...trendingsCards, <Card movie={result} key={result.id} />]))
  }, [trendings])

  useEffect(() => {
    setSearchCards([])
    searchResults?.results?.map((result) => setSearchCards((searchCards) => [...searchCards, <Card movie={result} key={result.id} />]))
  }, [searchResults])

  return (
    <>
      <Header context="home" />
      <main>
        <Search searchState={searchState} setSearchState={setSearchState} searchString={searchString} setSearchString={setSearchString} />
        {
          searchState ?
            <div>
              <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 py-5">
                <div className="flex my-5">
                  <h2 className="text-2xl font-semibold mr-5">Search results:</h2>
                </div>
                <div className="flex flex-wrap justify-center">
                  {searchCards}
                </div>
              </div>
            </div> :
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 py-5">
              <div className="flex my-5">
                <h2 className="text-2xl font-semibold mr-5">Trending movies:</h2>
                <TrendingSwitch trendingsTime={trendingsTime} setTrendingsTime={setTrendingsTime} />
              </div>
              <div className="flex flex-wrap justify-center">
                {trendingsCards}
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