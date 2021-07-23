const TrendingSwitch = () => {
  return (
    <div className="w-max bg-gray-200 rounded-full overflow-hidden flex text-gray-900 ">
      <button className="px-3 py-1 bg-indigo-800 rounded-full text-gray-50">Today</button>
      <button className="px-3 py-1 rounded-full hover:bg-gray-300 transition-colors">This Week</button>
    </div>
  )
}

export default TrendingSwitch;