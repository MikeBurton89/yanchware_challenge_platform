import { useParams } from "react-router-dom"
import useFetchCityDetails from "../../hooks/useFetchCityDetails"

const City = () => {
    const { cityId } = useParams<{cityId: string}>()
    const { data, isLoading, error } = useFetchCityDetails({cityId})
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>{data.cityName}</p>}
    </div>
  )
}

export default City