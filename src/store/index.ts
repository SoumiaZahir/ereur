// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import home from './apps/home/index'
import users from './apps/users'
import produits from './apps/produit'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    home,
    users,
    produits
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type useAppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppSelector = useSelector<RootState>
export const useAppDispatch = useDispatch<useAppDispatch>
