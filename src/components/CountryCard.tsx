import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/theme-context'

type Props = {
  name: string
  flag: string
  population: number
  region: string
  capital: string
}

const CountryCard: React.FC<Props> = ({
  name,
  flag,
  population,
  region,
  capital
}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="shadow w-[355px] min-w-[200px] rounded-[10px] overflow-hidden">
      <Link to={`/details/${name}`}>
        <img
          src={flag}
          alt="flag"
          className="h-[200px] w-full shadow border-b-[1px] border-b-[#0000003c]"
        />
        <div
          className={`px-[1.5rem] py-[2rem] h-full ${theme?.elementBg} ${theme?.font}`}
        >
          <h2 className="font-bold mb-[1rem] text-[1.2rem]">{name}</h2>
          <p className="mb-[0.3rem]">
            <span className="font-bold">Population: </span>
            {Intl.NumberFormat().format(population)}
          </p>
          <p className="mb-[0.3rem]">
            <span className="font-bold">Region: </span>
            {region}
          </p>
          <p>
            <span className="font-bold">Capital: </span>
            {capital}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard
