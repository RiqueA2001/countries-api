import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/theme-context'

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header
      className={`py-6 h-[84px] shadow ${theme?.elementBg} ${theme?.font}`}
    >
      <nav className="flex justify-between m-auto max-w-[1550px] px-4">
        <Link to="/" className="font-[600] text-[1.2rem] sm:text-[1.5rem]">
          Where in the world?
        </Link>
        <button onClick={toggleTheme}>
          {theme?.mode === 'light' ? (
            <i className="fa-regular fa-moon"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
          <span className="ml-2">Dark Mode</span>
        </button>
      </nav>
    </header>
  )
}

export default Header
