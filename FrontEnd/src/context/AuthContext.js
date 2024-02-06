import { createContext, useReducer, useEffect, useState } from 'react'

export const AuthContext = createContext({ user: null, dispatch: () => {} })

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('user'))

      if (user) {
        dispatch({ type: 'LOGIN', payload: user })
      }
    } catch (error) {
      console.log('Error parsing user from local storage:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  console.log('AuthContext state:', state)

  if (loading) {
    // Render a loading indicator or skeleton screen while loading
    return <p>Loading...</p>
  }

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
