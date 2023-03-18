import { useContext } from 'react'
import { ThemeContext } from '../context/theme-context'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const themeCtx = useContext(ThemeContext)

  return (
    <>
      <Header />
      <main className={`min-h-[100vh] pb-[4rem] ${themeCtx.theme?.bodyBg}`}>
        <div className="m-auto max-w-[1550px] px-4">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
