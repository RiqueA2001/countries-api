import { useEffect, useState } from 'react'
import CountriesList from '../components/CountriesList'
import SearchCountries from '../components/SearchCountries'
import useHttp from '../hooks/useHttp'

type Country = {
  name: {
    common: string
  }
  population: number
  region: string
  capital: string
  flags: {
    png: string
  }
}

const Home = () => {
  const { fetchCountries: request, loading, error } = useHttp()
  const [countries, setCountries] = useState<Country[]>([])
  const [listIndex, setListIndex] = useState(8)

  useEffect(() => {
    const makeRequest = async () => {
      const data: Country[] = await request(
        'https://restcountries.com/v3.1/all'
      )
      setCountries(data)
    }
    makeRequest()
  }, [])

  const searchHandler = (searchTerm: string) => {
    const makeRequest = async () => {
      const data: Country[] = await request(
        `https://restcountries.com/v3.1/name/${searchTerm}`
      )
      setCountries(data)
    }
    makeRequest()
  }

  const onChangeRegionHandler = (selectedRegion: string) => {
    const makeRequest = async () => {
      const data: Country[] = await request(
        `https://restcountries.com/v3.1/region/${selectedRegion}`
      )
      setCountries(data)
    }
    makeRequest()
  }

  return (
    <>
      <SearchCountries
        onSearch={searchHandler}
        onChangeRegion={onChangeRegionHandler}
        setListIndex={setListIndex}
      />
      <CountriesList
        countries={countries}
        loading={loading}
        listIndex={listIndex}
        setListIndex={setListIndex}
        error={error}
      />
    </>
  )
}

export default Home
