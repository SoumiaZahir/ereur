import React, { ChangeEvent, useState } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Button, Checkbox, useMediaQuery } from '@mui/material'
import { ThemeColor } from 'src/@core/layouts/types'
import { PDV } from 'src/@fake-db/types'
import { getInitials } from 'src/@core/utils/get-initials'
import QuickSearchToolbar from 'src/views/QuickSearchToolbar'
import { rows } from 'src/@fake-db/PDV/PDV'
import Icon from 'src/@core/components/icon'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { Ref, forwardRef, ReactElement } from 'react'
import Fade, { FadeProps } from '@mui/material/Fade'
import { Adminrow } from 'src/@fake-db/admin/PDV/static-data'
import Box, { BoxProps } from '@mui/material/Box'
import PageHeader from 'src/@core/components/page-header'
import Drawer from '@mui/material/Drawer'

// ** Icon Imports
const escapeRegExp = (value: string) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}
const CustomCloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  top: 0,
  right: 0,
  color: 'grey.500',
  position: 'absolute',
  boxShadow: theme.shadows[2],
  transform: 'translate(10px, -10px)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    transform: 'translate(7px, -5px)'
  }
}))

const DialogAddPDV = ({
  show,
  setShow,
  adminDataRow,
  setAdminDataRow
}: {
  show: boolean
  setShow: any
  adminDataRow: any
  setAdminDataRow: any
}) => {
  const [data, setData] = useState<PDV[]>(rows)
  const [searchText, setSearchText] = useState<string>('')
  const [filteredData, setFilteredData] = useState<PDV[]>([])
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })

  const handleChange = (row: PDV, id: number) => {
    setData(prevData => {
      return prevData.map(rowData => {
        if (rowData.id === id) {
          const newCheckedState = !rowData.checked

          // Mise à jour des données administratives en fonction de l'état de la case à cocher
          if (newCheckedState) {
            setAdminDataRow((prevAdminDataRow: any) => [...prevAdminDataRow, row])
          } else {
            setAdminDataRow((prevAdminDataRow: any) =>
              prevAdminDataRow.filter((adminRow: any) => adminRow.id !== row.id)
            )
          }

          return { ...rowData, checked: newCheckedState }
        }
        return rowData
      })
    })
  }

  const columns: GridColDef[] = [
    {
      flex: 1,
      minWidth: 200,
      field: 'nom',
      headerName: 'Nom',
      renderCell: (params: GridRenderCellParams) => {
        const { row } = params
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox checked={params.row.checked} onChange={() => handleChange(row as PDV, row.id)} />
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.nom}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 1,
      minWidth: 110,
      field: 'ville',
      headerName: 'Ville',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.ville}
        </Typography>
      )
    },
    {
      flex: 1,
      field: 'enseigne',
      minWidth: 200,
      headerName: 'Enseigne',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.enseigne}
        </Typography>
      )
    },
    {
      flex: 1,
      field: 'localisation',
      minWidth: 320,
      headerName: 'Localisation',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.localisation}
        </Typography>
      )
    },
    {
      flex: 1,
      field: 'region',
      minWidth: 300,
      headerName: 'Region',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.region}
        </Typography>
      )
    }
  ]
  const handleSearch = (searchValue: string) => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
    const filteredRows = data.filter(row => {
      return Object.keys(row).some(field => {
        // @ts-ignore
        return searchRegex.test(row[field].toString())
      })
    })
    if (searchValue.length) {
      setFilteredData(filteredRows)
    }
  }

  const Header = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(6),
    justifyContent: 'space-between'
  }))

  const handleClose = () => {
    setShow(false)
  }

  return (
    <Drawer
      open={show} // Contrôle l'ouverture et la fermeture du Drawer
      anchor='right' // Ancre le Drawer à droite
      variant='temporary' // Permet au Drawer de s'ouvrir et de se fermer
      onClose={handleClose} // Appelé lorsque le Drawer est fermé
      ModalProps={{ keepMounted: true }} // Permet au Drawer d'être rendu dans le DOM même s'il est fermé
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: 1300, sm: 1300 }, // Largeur du Drawer pour les tailles d'écran xs et sm
          marginTop: '90px', // Marge haute du Drawer
          paddingBottom: '20px', // Marge basse du Drawer
          height: '86%', // Hauteur du Drawer
          overflow: 'hidden'
        }
      }}
    >
      <div>
        <Header>
          <PageHeader title={<Typography variant='h1'>Ajouter Un Point de Vente</Typography>} />
          <IconButton
            size='small'
            onClick={handleClose}
            sx={{
              p: '0.438rem',
              borderRadius: 1,
              color: 'text.primary',
              backgroundColor: 'action.selected',
              '&:hover': {
                backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.16)`
              }
            }}
          >
            <Icon icon='tabler:x' fontSize='1.125rem' />
          </IconButton>
        </Header>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Card sx={{ flex: 1, marginBottom: '1rem' }}>
            <DataGrid
              autoHeight
              columns={columns}
              pageSizeOptions={[7, 10, 25, 50]}
              paginationModel={paginationModel}
              slots={{ toolbar: QuickSearchToolbar }}
              onPaginationModelChange={setPaginationModel}
              rows={filteredData.length ? filteredData : data}
              sx={{ '& .MuiSvgIcon-root': { fontSize: '1.125rem' } }}
              slotProps={{
                baseButton: { size: 'medium', variant: 'outlined' },
                toolbar: {
                  value: searchText,
                  clearSearch: () => handleSearch(''),
                  onChange: (event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)
                }
              }}
            />
          </Card>
        </Box>
      </div>
    </Drawer>
  )
}

export default DialogAddPDV
