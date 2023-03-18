import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/theme-context'
import CountryCard from './CountryCard'

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

type Props = {
  countries: Country[]
  listIndex: number
  setListIndex: React.Dispatch<React.SetStateAction<number>>
  loading: boolean
  error: boolean
}

const CountriesList: React.FC<Props> = ({
  countries,
  listIndex,
  setListIndex,
  loading,
  error
}) => {
  const themeCtx = useContext(ThemeContext)

  if (loading) {
    return <p className="mt-4">Loading...</p>
  }
  if (error) {
    return <p className="mt-4">Country Not Found</p>
  }
  return (
    <section className="mt-[3rem]">
      <div className="flex flex-wrap justify-center gap-x-[2rem] gap-y-[3rem] md:gap-y-[5rem]">
        {countries?.slice(0, listIndex).map(country => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
      {listIndex < countries.length && (
        <button
          onClick={() => setListIndex(prev => prev + 8)}
          className={`py-[0.5rem] px-[2rem] mt-[4rem] block mx-auto rounded-[5px] shadow-lg ${
            themeCtx.theme?.background === 'light'
              ? 'bg-white'
              : 'bg-darkModeElements'
          } ${
            themeCtx.theme?.text === 'light'
              ? 'text-lightModeText'
              : 'text-darkModeText'
          }`}
        >
          Load more
        </button>
      )}
    </section>
  )
}

export default CountriesList
