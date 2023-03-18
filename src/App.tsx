import { Routes, Route } from 'react-router-dom'
import ThemeProvider from './context/theme-context'
import Layout from './Layout/Layout'
import Details from './pages/Details'
import Home from './pages/Home'

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
