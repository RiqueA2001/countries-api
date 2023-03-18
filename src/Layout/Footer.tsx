import { useContext } from 'react'
import { ThemeContext } from '../context/theme-context'

const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <footer className={`text-center p-2 ${theme?.elementBg} ${theme?.font}`}>
      <span>
        Challenge by{' '}
        <a
          className="font-bold"
          href="https://www.frontendmentor.io"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <b>Henrique Almada</b>.
      </span>
    </footer>
  )
}

export default Footer
