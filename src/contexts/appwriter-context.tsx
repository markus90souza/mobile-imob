import React, { createContext, useContext, ReactNode } from 'react'

import { getUser } from '@/lib/appwrite'
import { useAppwrite } from '@/hooks/use-appwrite'

interface User {
  $id: string
  name: string
  email: string
  avatar: string
}

interface AppwriteContextType {
  isLogged: boolean
  user: User | null
  loading: boolean
  refetch: (newParams?: Record<string, string | number>) => Promise<void>
}

const AppwriteContext = createContext<AppwriteContextType | undefined>(
  undefined,
)

interface AppwriteProviderProps {
  children: ReactNode
}

export const AppwriteProvider = ({ children }: AppwriteProviderProps) => {
  const {
    data: user,
    loading,
    refetch,
  } = useAppwrite({
    fn: getUser,
  })

  const isLogged = !!user

  return (
    <AppwriteContext.Provider
      value={{
        isLogged,
        user,
        loading,
        refetch,
      }}
    >
      {children}
    </AppwriteContext.Provider>
  )
}

export const useAppwriteContext = (): AppwriteContextType => {
  const context = useContext(AppwriteContext)
  if (!context)
    throw new Error('useGlobalContext must be used within a GlobalProvider')

  return context
}
