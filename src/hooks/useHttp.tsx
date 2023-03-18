import { useState } from 'react'

const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const fetchCountries = async (url: string) => {
    try {
      setError(false)
      setLoading(true)
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error()
      }

      const data = await response.json()
      return data
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return {
    fetchCountries,
    loading,
    error
  }
}

export default useHttp
