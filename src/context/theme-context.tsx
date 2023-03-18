import React, { ReactNode, useState } from 'react'

type Theme = {
  mode: string
  bodyBg: string
  elementBg: string
  font: string
}

type ThemeContextObj = {
  theme: undefined | Theme
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContextObj>({
  theme: undefined,
  toggleTheme: () => {}
})

type Props = {
  children?: ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const initialState = {
    mode: 'light',
    bodyBg: 'bg-lightModeBg',
    elementBg: 'bg-white',
    font: 'text-lightModeText'
  }

  const [theme, setTheme] = useState<Theme>(initialState)

  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme.mode === 'light') {
        return {
          mode: 'dark',
          bodyBg: 'bg-darkModeBg',
          elementBg: 'bg-darkModeElements',
          font: 'text-darkModeText'
        }
      } else {
        return initialState
      }
    })
  }

  const value = {
    theme,
    toggleTheme
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
