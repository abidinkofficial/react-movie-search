const API_KEY = process.env.REACT_APP_API_KEY

export const generateRandomId = async () => {
  let random = ((Math.random() * 10) + 1).toFixed(0)
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${random}`)
  const data = await response.json()

  return data.results[random].id
}
