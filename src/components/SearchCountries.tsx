import {
  ChangeEvent,
  FormEvent,
  InputHTMLAttributes,
  useContext,
  useRef,
  useState
} from 'react'
import { ThemeContext } from '../context/theme-context'

type Props = {
  onSearch: (searchTerm: string) => void
  onChangeRegion: (selectedRegion: string) => void
  setListIndex: React.Dispatch<React.SetStateAction<number>>
}

const SearchCountries: React.FC<Props> = ({
  onSearch,
  onChangeRegion,
  setListIndex
}) => {
  const { theme } = useContext(ThemeContext)
  const countryInputRef = useRef<HTMLInputElement>(null)
  const regionSelectRef = useRef<HTMLSelectElement>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()

    const enteredText = countryInputRef.current!.value

    if (enteredText?.trim().length === 0) {
      return
    }

    onSearch(enteredText)

    countryInputRef.current!.value = ''
  }

  const changeHandler = () => {
    const selectedRegion = regionSelectRef.current!.value

    onChangeRegion(selectedRegion)
    setListIndex(8)
  }

  return (
    <section className="flex flex-col gap-[3rem] md:flex-row sm:justify-between pt-[2rem] md:pt-[3rem]">
      <form onSubmit={submitHandler}>
        <div className="shadow w-full sm:w-[500px] flex h-[60px]">
          <button className={`px-4 ${theme?.elementBg}`}>
            <i className={`fa-solid fa-magnifying-glass ${theme?.font}`}></i>
          </button>
          <input
            type="text"
            placeholder="Search for a country..."
            className={`w-full pl-4 outline-none ${theme?.elementBg} ${theme?.font}`}
            ref={countryInputRef}
          />
        </div>
      </form>
      <select
        name="region"
        id="region"
        className={`shadow w-[50%] sm:w-[300px] p-4 outline-none ${theme?.elementBg} ${theme?.font}`}
        onChange={changeHandler}
        ref={regionSelectRef}
      >
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  )
}

export default SearchCountries
