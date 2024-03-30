import { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

import Button from '@mui/material/Button'
import Icon from 'src/@core/components/icon'
import PickersBasic from 'src/views/agenda/picker/PickersBasic'
import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import PageHeader from 'src/@core/components/page-header'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'

// ** Third Party Imports
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from '../../PickersCustomInput'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

import { Placement } from '@popperjs/core'

import CustomTextField from 'src/@core/components/mui/text-field'

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

export interface Visite {
  pointDeVente: PointDeVente
  h_db: string
  h_fin: string
  statut: string
  conform: boolean | null
  date: string
}

export interface MerchandiserVisite {
  merchandiser: Utilisateur
  visites: Visite[]
}

export interface Utilisateur {
  nom: string
  prenom: string
  email: string
  telephone: string
}

export interface PointDeVente {
  nom: string
  ville: string
  enseigne: string
  localisation: string
}

function createVisite(
  pointDeVente: PointDeVente,
  h_db: string,
  h_fin: string,
  statut: string,
  conform: boolean | null,
  date: string
): Visite {
  return { pointDeVente, h_db, h_fin, statut, conform, date }
}

const MarshandiserVisites: MerchandiserVisite[] = [
  {
    merchandiser: { nom: 'Soumia', prenom: 'Zahir', email: 'soumia@gmail.com', telephone: '0710458202' },
    visites: [
      createVisite(
        { nom: 'Morocco Mall', ville: 'Casa', enseigne: 'enseigne', localisation: 'localisation' },
        '8:00',
        '12:00',
        'to do',
        null,
        '2024-11-25'
      ),
      createVisite(
        { nom: 'Marjane Ain Sbaa', ville: 'Casa', enseigne: 'enseigne', localisation: 'localisation' },
        '13:00',
        '15:00',
        'done',
        true,
        '2024-11-26'
      ),
      createVisite(
        { nom: 'Carrefour', ville: 'Casa', enseigne: 'enseigne', localisation: 'localisation' },
        '18:00',
        '21:00',
        'absent',
        null,
        '2024-11-27'
      ),
      createVisite(
        { nom: 'Bim', ville: 'Casa', enseigne: 'enseigne', localisation: 'localisation' },
        '8:00',
        '12:00',
        'done',
        false,
        '2024-11-28'
      )
    ]
  },
  {
    merchandiser: { nom: 'Jihan', prenom: 'Najam', email: 'jihan@gmail.com', telephone: '1234567890' },
    visites: [
      createVisite(
        { nom: 'Morocco Mall', ville: 'Casa', enseigne: 'enseigne', localisation: 'localisation' },
        '8:00',
        '12:00',
        'to do',
        null,
        '2024-11-25'
      ),
      createVisite(
        { nom: 'Marjane Ain Sbaa', ville: 'Casa', enseigne: 'enseigne', localisation: 'localisation' },
        '13:00',
        '15:00',
        'absent',
        null,
        '2024-11-26'
      ),
      createVisite(
        { nom: 'Carrefour', ville: 'Casa', enseigne: 'enseigne', localisation: 'localisation' },
        '18:00',
        '21:00',
        'doing',
        true,
        '2024-11-27'
      ),
      createVisite(
        { nom: 'Bim', ville: 'Casa', enseigne: 'enseigne', localisation: 'localisation' },
        '8:00',
        '12:00',
        'done',
        false,
        '2024-11-28'
      )
    ]
  },
  {
    merchandiser: { nom: 'Aymen', prenom: 'Belkhiri', email: 'aymen@gmail.com', telephone: '0987654321' },
    visites: [
      createVisite(
        { nom: 'Morocco Mall', ville: 'Casa', enseigne: 'enseigne', localisation: 'localisation' },
        '8:00',
        '12:00',
        'doing',
        false,
        '2024-11-25'
      ),
      createVisite(
        { nom: 'Marjane Ain Sbaa', ville: 'Casa', enseigne: 'enseigne', localisation: 'localisation' },
        '13:00',
        '15:00',
        'doing',
        true,
        '2024-11-26'
      ),
      createVisite(
        { nom: 'Carrefour', ville: 'Casa', enseigne: 'enseigne', localisation: 'localisation' },
        '18:00',
        '21:00',
        'doing',
        true,
        '2024-11-27'
      ),
      createVisite(
        { nom: 'Bim', ville: 'Casa', enseigne: 'enseigne', localisation: 'localisation' },
        '8:00',
        '12:00',
        'absent',
        null,
        '2024-11-28'
      )
    ]
  }
]

const PlaningManuelle = (
  { handleNext }: { handleNext: () => void },
  { popperPlacement = 'auto' }: { popperPlacement?: Placement }
) => {
  const [pointDeVente, setPointDeVente] = useState('')
  const [heureDebut, setHeureDebut] = useState('')
  const [heureFin, setHeureFin] = useState('')
  const [MarshandiserVisitesState, setMarshandiserVisitesState] = useState(MarshandiserVisites)
  const [value, setValue] = useState('')

  // useEffect(() => {
  //   setMarshandiserVisitesState(MarshandiserVisitesState.filter(merch => merch.merchandiser.nom === value))
  // }, [])

  const handleChange = (e: any) => {
    const searchValue = e.target.value // Récupère la valeur de l'input
    setValue(searchValue) // Met à jour la valeur de l'input dans l'état local

    const filteredData = MarshandiserVisites.filter(merch =>
      merch.merchandiser.nom.toLowerCase().includes(searchValue.toLowerCase())
    )

    // Met à jour l'état avec les données filtrées
    setMarshandiserVisitesState(filteredData)
  }

  const [date, setDate] = useState<DateType>(new Date())
  return (
    <>
      <Grid item xs={12}>
        <CardContent sx={{ p: 6, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ gap: 6, display: 'flex', alignItems: 'center' }}>
            <DatePicker
              selected={date}
              id='basic-input'
              popperPlacement={popperPlacement}
              onChange={(date: Date) => setDate(date)}
              placeholderText='Date De Visite'
              customInput={<CustomInput label='Date_debut' />}
            />
            <DatePicker
              selected={date}
              id='basic-input'
              popperPlacement={popperPlacement}
              onChange={(date: Date) => setDate(date)}
              placeholderText='Date De Visite'
              customInput={<CustomInput label='Date_fin' />}
            />
          </Box>
          <Box display='flex' justifyContent='flex-end' marginTop={6}>
            <Box sx={{ gap: 6, display: 'flex', alignItems: 'center' }}>
              <TextField
                id='outlined-basic'
                label='Search...'
                variant='outlined'
                onChange={handleChange}
                value={value}
              />

              {/* <input type='text' placeholder='Search...' onChange={handleChange} value={value} /> */}
              <Button
                type='submit'
                variant='contained'
                onClick={() => {
                  handleNext()
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </CardContent>

        {/* </PageHeader> */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label='customized table'>
            <TableHead sx={{ backgroundColor: '#EBDEF0' }}>
              <TableRow>
                <TableCell sx={{ color: '#9B59B6' }}>Poste</TableCell>
                <TableCell sx={{ color: '#9B59B6' }}>Visite 1</TableCell>
                <TableCell sx={{ color: '#9B59B6' }}>Visite 2</TableCell>
                <TableCell sx={{ color: '#9B59B6' }}>Visite 3</TableCell>
                <TableCell sx={{ color: '#9B59B6' }}>Visite 4</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {MarshandiserVisitesState.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component='th' scope='row'>
                    <Typography sx={{ display: 'flex', alignItems: 'center' }}>{row.merchandiser.nom}</Typography>
                  </TableCell>
                  {row.visites.map((singleVisite, i) => (
                    <TableCell sx={{ width: '25%' }} key={i}>
                      <Card variant='outlined' sx={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginLeft: 3 }}>
                          <CustomTextField
                            fullWidth
                            select
                            sx={{
                              pr: 4,
                              '& .MuiFilledInput-input.MuiSelect-select': { minWidth: '8rem !important' }
                            }}
                            label='Select Point de Vente'
                          >
                            <MenuItem value=''>Select Region</MenuItem>
                            <MenuItem value='downloaded'>Downloaded</MenuItem>
                            <MenuItem value='draft'>Draft</MenuItem>
                            <MenuItem value='paid'>Paid</MenuItem>
                            <MenuItem value='partial payment'>Partial Payment</MenuItem>
                            <MenuItem value='past due'>Past Due</MenuItem>
                            <MenuItem value='sent'>Sent</MenuItem>
                          </CustomTextField>

                          <form>
                            {' '}
                            {/* Add the form tag here */}
                            <DatePicker
                              selected={date}
                              id={`basic-input-${index}-${i}`}
                              popperPlacement={popperPlacement}
                              onChange={(date: Date) => setDate(date)}
                              placeholderText='Date De Visite'
                              customInput={<CustomInput label='Date_debut' />}
                            />
                            <DatePicker
                              selected={date}
                              id={`basic-input-${index}-${i}`}
                              popperPlacement={popperPlacement}
                              onChange={(date: Date) => setDate(date)}
                              placeholderText='Date De Visite'
                              customInput={<CustomInput label='Date_fin' />}
                            />
                          </form>
                        </Box>
                      </Card>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Box display='flex' justifyContent='flex-end' marginTop={6}>
        <Button
          type='submit'
          variant='contained'
          onClick={() => {
            handleNext()
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}
        >
          Next
        </Button>
      </Box>
    </>
  )
}

export default PlaningManuelle
