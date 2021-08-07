import { useEffect, useState } from "react"

const ProductionCompanies = ({ companies }) => {
  const [companyItems, setCompanyItems] = useState([])

  useEffect(() => {
    setCompanyItems([])
    if (companies?.length > 0) {
      companies?.map(company => setCompanyItems((items) => [...items, 
      <div key={company.id} className="h-10 flex items-center border-b">
        <div style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w200${company.logo_path})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100%" }} className="w-8 h-8 ml-3 border rounded-full overflow-hidden"></div>
        <h4 className="ml-3 text-sm">{company.name}</h4>
      </div>]))
    } else {
      setCompanyItems([
        <div key={0} className="h-10 flex items-center border-b">
          <h4 className="ml-3 text-sm">There is no info.</h4>
        </div>
      ])
    }
  }, [companies])

  return (
    <div className="flex flex-col w-80 border rounded-lg overflow-hidden">
      <div className="h-10 bg-indigo-800 flex items-center justify-center">
        <h3 className="text-gray-50">Production Companies</h3>
      </div>
      {companyItems}
    </div>
  )
}

export default ProductionCompanies