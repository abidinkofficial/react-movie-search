import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchTrendings } from "../actions/trendingActions"

import Header from "../components/Header"
import Search from "../components/Search"
import TrendingSwitch from "../components/TrendingSwitch"
import Card from "../components/Card"

const Home = ({ dispatch, trendingsLoading, trendings, trendingsHasErrors }) => {
  const [trendingsCards, setTrendingsCards] = useState([])
  const [trendingsTime, setTrendingsTime] = useState("day")

  useEffect(() => {
    dispatch(fetchTrendings(trendingsTime))
  }, [dispatch, trendingsTime])

  useEffect(() => {
    setTrendingsCards([])
    trendings?.results?.map((result) => setTrendingsCards((trendingsCards) => [...trendingsCards, <Card movie={result} key={result.id} />]))
  }, [trendings])

  return (
    <>
      <Header />
      <main>
        <Search />
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 py-5">
          <div className="flex my-5">
            <h2 className="text-2xl font-semibold mr-5">Trending movies:</h2>
            <TrendingSwitch trendingsTime={trendingsTime} setTrendingsTime={setTrendingsTime} />
          </div>
          <div className="flex flex-wrap justify-center">
            {trendingsCards}
          </div>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = (state) => ({
  trendingsLoading: state.trendings.loading,
  trendings: state.trendings.trendings,
  trendingsHasErrors: state.trendings.hasErrors
})

export default connect(mapStateToProps)(Home);