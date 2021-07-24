const TrendingSwitch = ({ trendingsTime, setTrendingsTime }) => {

  const changeTrendingsTime = (newTrendingsTime) => {
    setTrendingsTime(newTrendingsTime)
  }

  const activeClassName = "bg-indigo-800 text-gray-50"
  const passiveClassName = "hover:bg-gray-200 transition-colors"

  return (
    <div className="w-max bg-gray-100 rounded-full overflow-hidden flex text-gray-900 shadow-md">
      <button onClick={() => changeTrendingsTime("day")} className={`px-3 py-1 rounded-full ${trendingsTime === "day" ? activeClassName : passiveClassName}`}>Today</button>
      <button onClick={() => changeTrendingsTime("week")} className={`px-3 py-1 rounded-full ${trendingsTime === "day" ? passiveClassName : activeClassName}`}>This Week</button>
    </div>
  )
}

export default TrendingSwitch;