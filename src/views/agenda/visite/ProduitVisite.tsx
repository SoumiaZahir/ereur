// ** React Imports
import { useState ,useEffect} from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import PageHeader from 'src/@core/components/page-header'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Icon from 'src/@core/components/icon'
import { ChangeEvent } from 'react'
import Slider from '@mui/material/Slider'
// ** MUI Import
import MenuItem from '@mui/material/MenuItem'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
import ImageComponent from './ImageComponent'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import { width } from '@mui/system'

interface Column {
  id: 'produit' | 'shelf' | 'prix' | 'stock'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

interface Data {
  produit: string
  shelf: string
  prix: string
  stock: [number, number]
  family: string
  sub_family: string | null
}

const columns: readonly Column[] = [
  { id: 'produit', label: 'Produit', minWidth: 170 },
  { id: 'shelf', label: 'Shelf Sharing', minWidth: 170 },
  { id: 'prix', label: 'Prix', minWidth: 170 },
  { id: 'stock', label: 'Stock', minWidth: 170 }
]

function createData(
  produit: string,
  shelf: string,
  prix: string,
  stock: [number, number],
  family: string,
  sub_family: string | null
): Data {
  return { produit, shelf, prix, stock, family, sub_family }
}

const rows: Data[] = [
  createData('Produit 1', '0', '$10', [50, 200], 'Family 1', 'Subfamily 1.1'),
  createData('Produit 2', '0', '$15', [50, 180], 'Family 1', 'Subfamily 1.1'),
  createData('Produit 3', '0', '$20', [50, 250], 'Family 1', 'Subfamily 1.1'),
  createData('Produit 4', '0', '$25', [50, 300], 'Family 1', 'Subfamily 1.1'),
  createData('Produit 5', '0', '$30', [50, 200], 'Family 1', 'Subfamily 1.2'),
  createData('Produit 6', '0', '$35', [100, 200], 'Family 1', 'Subfamily 1.2'),
  createData('Produit 7', '0', '$40', [180, 200], 'Family 1', 'Subfamily 1.2'),
  createData('Produit 8', '0', '$45', [100, 200], 'Family 2', 'Subfamily 2.1'),
  createData('Produit 9', '0', '$50', [100, 200], 'Family 2', 'Subfamily 2.1'),
  createData('Produit 10', '0', '$55', [250, 200], 'Family 2', 'Subfamily 2.1'),
  createData('Produit 11', '0', '$60', [100, 200], 'Family 2', 'Subfamily 2.1'),
  createData('Produit 12', '0', '$65', [25, 350], 'Family 2', 'Subfamily 2.1'),
  createData('Produit 13', '0', '$70', [100, 200], 'Family 2', 'Subfamily 1.1'),
  createData('Produit 14', '0', '$75', [100, 200], 'Family 3', null),
  createData('Produit 15', '0', '$80', [100, 200], 'Family 3', null)
]

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))



interface Visite {
  h_db: string
  h_fin: string
  pointDeVente: string
  statut: string
  date: string
}

interface ProduitVisite {
  visite: Visite
  showProduit: any
  setShowProduit: any
}

interface Family {
  id: number
  name: string
  subfamilies: (string | null)[]
}

const families: Family[] = [
  { id: 1, name: 'Family 1', subfamilies: ['Subfamily 1.1', 'Subfamily 1.2', 'Subfamily 1.3'] },
  { id: 2, name: 'Family 2', subfamilies: ['Subfamily 2.1', 'Subfamily 2.2'] },
  { id: 3, name: 'Family 3', subfamilies: [null] }
]

const SidebarProduit = ({ visite, showProduit, setShowProduit }: ProduitVisite) => {
  // ** States
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [selectedFamily, setSelectedFamily] = useState<string>('')
  const [selectedSubFamily, setSelectedSubFamily] = useState<string>('')
  const [img, setImg] = useState<boolean>(false)
  const [url ,setUrl]=useState<string>('/images/avatars/1.png')

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleFamilyChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedFamily(event.target.value as string)
    setSelectedSubFamily('') // Reset selected subfamily when family changes
    setImg(true)
  }

  const handleSubFamilyChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedSubFamily(event.target.value as string)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleClose = () => {
    setShowProduit(false)
  }

  // Filtered rows based on selected family and subfamily
  const filteredRows = rows.filter(row => {
    if (!selectedFamily && !selectedSubFamily) return true
    if (selectedSubFamily) return row.sub_family === selectedSubFamily && row.family === selectedFamily
    return row.family === selectedFamily
  })

  return (

    <Drawer
  open={showProduit} // Contrôle l'ouverture et la fermeture du Drawer
  anchor='right' // Ancre le Drawer à droite
  variant='temporary' // Permet au Drawer de s'ouvrir et de se fermer
  onClose={handleClose} // Appelé lorsque le Drawer est fermé
  ModalProps={{ keepMounted: true }} // Permet au Drawer d'être rendu dans le DOM même s'il est fermé
  sx={{
    '& .MuiDrawer-paper': {
      width: { xs: 1300, sm: 1300 }, // Largeur du Drawer pour les tailles d'écran xs et sm
      // marginTop: '280px', // Marge haute du Drawer
      // margin: '200px 0 280px 0', // Marge basse du Drawer
      height: '100vh' // Hauteur du Drawer
    }
  }}
>
      <div>
        <Header>
          <PageHeader title={<Typography variant='h1'>Detail & Informations sur l'evenement</Typography>} />
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
        <Card>
  <CardContent style={{justifyContent:'space-between'}}>

    <Grid container spacing={2} alignItems='center'>
      {/* Point de Vente */}
      <Grid item xs={12} md={4}>
        <Typography variant='h2' style={{color:"#800080"}}>{visite.pointDeVente}</Typography>
        <Typography>
        <span style={{ fontSize: "15px", fontWeight: "bold" }}>Date de visite :</span> {visite.date}
          <br />
          <span style={{ fontSize: "15px", fontWeight: "bold" }}>  L'heure de visite : </span> {`${visite.h_db}-${visite.h_fin}`}
        </Typography>
      </Grid>



      {/* Select Famille */}
      <Grid item xs={12} md={4} >
        <CustomTextField
          select
          fullWidth
          label='Select Family'
          value={selectedFamily}
          onChange={handleFamilyChange}
        >
          <MenuItem value=''>Select Family</MenuItem>
          {families.map(family => (
            <MenuItem key={family.id} value={family.name}>
              {family.name}
            </MenuItem>
          ))}
        </CustomTextField>
      </Grid>

      {/* Select Sous-famille */}
      <Grid item xs={12} md={4}>
        {selectedFamily && (
          <CustomTextField
            select
            fullWidth
            label='Select Subfamily'
            value={selectedSubFamily}
            onChange={handleSubFamilyChange}
            sx={{ '& .MuiFilledInput-input.MuiSelect-select': { minWidth: '8rem !important' } }}
          >
            <MenuItem value=''>Select Sous-family</MenuItem>
            {/* Conditionally render subfamilies menu items */}
            {selectedFamily &&
              families
                .find(family => family.name === selectedFamily)
                ?.subfamilies.map(subfamily =>
                  subfamily !== null ? (
                    <MenuItem key={subfamily} value={subfamily}>
                      {subfamily}
                    </MenuItem>
                  ) : null
                )}
          </CustomTextField>
        )}
      </Grid>
    </Grid>
  </CardContent>
</Card>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8}>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    {columns.map(column => (
                      <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                    <TableRow hover role='checkbox' tabIndex={-1} key={row.produit}>
                      {columns.map(column => {
                        const value = row[column.id]
                        if (column.id === 'stock') {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Slider
                                value={Number(value)}
                                aria-labelledby='discrete-slider'
                                valueLabelDisplay='auto'
                                step={10}
                                disabled // Ajoutez la propriété disabled ici
                              />
                            </TableCell>
                          )
                        } else {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          )
                        }
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component='div'
              count={filteredRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Grid>
          {img ? (
            <Grid item xs={4}>
              <Grid container direction='column' spacing={1}>
                <Grid container justifyContent='center' alignItems='center' marginBottom={5}>
                  <Grid item>
                    <Box sx={{ minWidth: 275 }}>
                      <Card variant='outlined'>
                        <Typography align='center' variant='h5'>
                          Image Avant:
                        </Typography>
                        <Box sx={{ marginBottom: 2 }}>
                        <ImageComponent url={url} setUrl={setUrl}/>
                        </Box>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>

                <Grid container justifyContent='center' alignItems='center'>
                  <Grid item>
                    <Box sx={{ minWidth: 275 }}>
                      <Card variant='outlined'>
                        <Typography align='center' variant='h5'>
                          Image Après:
                        </Typography>
                        <Box sx={{ marginBottom: 2 }}>
                        <ImageComponent url={url} setUrl={setUrl}/>

                        </Box>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </div>
    </Drawer>

  )
}


export default SidebarProduit
