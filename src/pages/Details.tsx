import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ThemeContext } from '../context/theme-context'
import useHttp from '../hooks/useHttp'

type Country = {
  name: {
    common: string
    nativeName: {}
  }
  population: number
  region: string
  subregion: string
  capital: string
  flags: {
    svg: string
    alt: string
  }
  tld: string[]
  languages: {}
  currencies: {}
}

const Details = () => {
  const { theme } = useContext(ThemeContext)
  const { fetchCountries: request, loading, error } = useHttp()
  const navigate = useNavigate()
  const params = useParams()
  const [country, setCountry] = useState<Country>()

  useEffect(() => {
    const makeRequest = async () => {
      const data: Country[] = await request(
        `https://restcountries.com/v3.1/name/${params.id}`
      )
      setCountry(data[0])
    }
    makeRequest()
  }, [])

  const info = [
    {
      title: 'Native Name',
      desc:
        country?.name?.nativeName &&
        Object.values(country.name.nativeName)
          .map((obj: any) => obj.common)
          .join(', ')
    },
    {
      title: 'Population',
      desc:
        country?.population &&
        new Intl.NumberFormat().format(country.population)
    },
    {
      title: 'Region',
      desc: country?.region
    },
    {
      title: 'Sub Region',
      desc: country?.subregion
    },
    {
      title: 'Capital',
      desc: country?.capital
    },
    {
      title: 'Languages',
      desc: country?.languages && Object.values(country.languages).join(', ')
    },
    {
      title: 'Top Level Domain',
      desc: country?.tld.join(', ')
    },
    {
      title: 'Currencies',
      desc:
        country?.currencies &&
        Object.values(country.currencies)
          .map((obj: any) => obj.name)
          .join(', ')
    }
  ]

  if (loading) {
    return <p className="text-center">Loading...</p>
  }
  if (error) {
    return <p>Something went wrong!</p>
  }

  return (
    <section>
      <button
        onClick={() => navigate(-1)}
        className={`py-[0.5rem] px-[2rem] mb-[4rem] mt-[2rem] md:mt-[4rem] rounded-[5px] shadow ${theme?.elementBg} ${theme?.font}`}
      >
        <i className="fa-solid fa-arrow-left"></i>
        <span className="ml-3">Back</span>
      </button>
      <div className="flex flex-col lg:flex-row gap-[4rem] md:gap-[4rem]">
        <div className="flex-1 max-h-[500px] w-full md:w-[85%] lg:w-full mx-auto">
          <img
            src={country?.flags.svg}
            alt={country?.flags.alt}
            className="shadow-lg max-h-[500px] w-full"
          />
        </div>
        <div
          className={`flex flex-col md:flex-row gap-[3rem] md:gap-[8rem] md:items-center flex-1 ${theme?.font}`}
        >
          <div className="md:pl-[4rem] lg:pl-0">
            <h2 className="font-bold text-[1.8rem] mb-[2rem]">
              {country?.name.common}
            </h2>
            <ul className="flex flex-col gap-[1rem]">
              {info.map((i, index) => (
                <li key={index}>
                  <span className="font-semibold">{`${i.title}: `}</span>
                  {i.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
