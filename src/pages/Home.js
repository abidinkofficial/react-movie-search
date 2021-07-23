import Header from "../components/Header"
import Search from "../components/Search"
import TrendingSwitch from "../components/TrendingSwitch"
import Card from "../components/Card"

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Search />
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 py-5">
          <TrendingSwitch />
          <div className="flex flex-wrap justify-center">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;