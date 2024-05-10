import { CircularProgress, Grid, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import InnerLayout from "../../components/InnerLayout"
import useFetchCityDetails from "../../hooks/useFetchCityDetails"
import CityDetails from "./components/CityDetails"
import CityDetailsHeader from "./components/CityDetailsHeader"

const City = () => {
    const { cityId } = useParams<{cityId: string}>()
    const { data, isLoading, error } = useFetchCityDetails({cityId})
  return (
    <>
    <InnerLayout
        header={
            <CityDetailsHeader cityName={data?.cityName} cityId={cityId ?? ''}/>
        }
    >
        <Grid p={2} container spacing={2} justifyContent="center">
            {data && <CityDetails cityDetails={data} />}
            {isLoading && <CircularProgress/>}
            {error && <Typography>Error: {error.message}</Typography>}
        </Grid>
    </InnerLayout>
  </>
  )
}

export default City