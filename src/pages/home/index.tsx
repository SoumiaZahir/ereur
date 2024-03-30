import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import { Produit } from 'src/@core/utils/types'
import { RootState, useAppDispatch, useAppSelector } from 'src/store'
import { ajouterProduct, deleteProduct } from 'src/store/apps/produit'
import { deleteUser } from 'src/store/apps/users'

const Home = () => {
  const produits = useAppSelector((state: RootState) => state.produits) as unknown as RootState['produits']
  const dispatch = useAppDispatch()

  const supprimer = () => {
    dispatch(deleteProduct())
  }

  const ajouter = () => {
    dispatch(ajouterProduct())
  }

  useEffect(() => {
    console.log(produits)
  }, [produits, dispatch])

  return (
    <>
      <Grid container spacing={6}>
        <button
          onClick={() => {
            // Assuming you have the productId, pass it to supprimer function
            supprimer()
          }}
        >
          Supprimer
        </button>
        <button
          onClick={() => {
            // Assuming you have the productId, pass it to supprimer function
            ajouter()
          }}
        >
          ajouter
        </button>
        <ul>
          {produits.data.map(prod => (
            <li key={prod.id}>{prod.nom}</li>
          ))}
        </ul>
      </Grid>
    </>
  )
}

export default Home
