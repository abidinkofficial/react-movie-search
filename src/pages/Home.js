import Header from "../components/Header"
import Search from "../components/Search"
import TrendingSwitch from "../components/TrendingSwitch"

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Search />
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 py-5">
          <TrendingSwitch />
        </div>
      </main>
    </>
  )
}

export default Home;